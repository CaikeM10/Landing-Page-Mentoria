import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { eventName, eventTime, actionSource, testEventCode, userData } =
    req.body;

  console.log("Received data:", {
    eventName,
    eventTime,
    actionSource,
    testEventCode,
    userData,
  });

  try {
    const response = await axios.post(
      `https://graph.facebook.com/v20.0/875794081268430/events`,
      {
        data: [
          {
            event_name: eventName,
            event_time: eventTime,
            action_source: actionSource,
            user_data: {
              em: [sha256(userData.email)], // Email hash
              ph: [sha256(userData.phone)], // Phone hash
              fn: sha256(userData.firstName),
              ln: sha256(userData.lastName),
              ge: sha256(userData.gender),
              db: sha256(userData.dateOfBirth),
              ct: sha256(userData.city),
              st: sha256(userData.state),
              zp: sha256(userData.zipCode),
              country: sha256(userData.country),
            },
          },
        ],
        test_event_code: testEventCode,
        access_token:
          "EAAVmlsnqbbwBO9vE4tywkIszD4uJF4XRL9vgc1oTsABGw5fFuVMJcPookCTOv0o14g9c8y0wvfRa3om5198S3RFsaGQhMH7P47OhmxFnr0ZBQhT7U2DFfnbGDjkJlSqfNjt0e8tv1YLo2DB32vMCNvZAalhEPoBnLV03MQLEpNA0LG1FOfVauSjEfpJewpOXV4CWymPeFZBZCiPGKwZDZD",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Facebook API response:", response.data);

    if (response.status !== 200) {
      console.error("Error from Facebook API:", response.data);
      throw new Error("Failed to send event");
    }

    res.status(200).json({ message: "Event sent successfully!" });
  } catch (error: any) {
    console.error(
      "Error sending event:",
      error.response ? error.response.data : error.message
    );
    res
      .status(500)
      .json({ error: "Failed to send event", details: error.message });
  }
}

function sha256(data: string) {
  return require("crypto").createHash("sha256").update(data).digest("hex");
}
