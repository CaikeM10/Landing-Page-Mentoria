// src/pages/api/sendEmails.ts

import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

// 🚨 CORREÇÃO CRÍTICA: Lendo a chave de forma segura do ambiente
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const REMETENTE_EMAIL = process.env.EMAIL_FROM;

// Configura a chave de API do SendGrid
sgMail.setApiKey(SENDGRID_API_KEY || "");

const DESTINATARIO_EMAIL = "Iriasaboiapsicologa@gmail.com";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // 1. VERIFICAÇÃO DE CHAVES (PARA EVITAR ERRO 500 GENÉRICO)
  if (!SENDGRID_API_KEY || !REMETENTE_EMAIL) {
    console.error("ERRO CRÍTICO: Variáveis de ambiente do SendGrid ausentes.");
    // ⚠️ Retornamos um erro 500 para indicar falha na configuração do servidor
    return res.status(500).json({
      success: false,
      message:
        "Falha na configuração do servidor. As chaves de API não foram carregadas.",
    });
  }

  // Recebe os dados brutos
  const { name, email, phone, instagram, budget } = req.body;

  const msg = {
    to: DESTINATARIO_EMAIL,
    from: REMETENTE_EMAIL, // E-mail Remetente Autenticado no SendGrid
    subject: `[NOVO LEAD] Inscrição: ${name} (Consultório Sustentável)`,
    html: `
      <h2>Nova Inscrição Recebida!</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${phone}</p>
      <p><strong>Instagram:</strong> ${instagram || "N/A"}</p>
     
    `,
  };

  try {
    await sgMail.send(msg);
    return res
      .status(200)
      .json({ success: true, message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("ERRO NO ENVIO DO SENDGRID:", error);
    // ⚠️ Retorna 500 se houver falha de autenticação (403)
    return res.status(500).json({
      success: false,
      message: "Falha ao enviar e-mail. Verifique a API Key.",
    });
  }
}
