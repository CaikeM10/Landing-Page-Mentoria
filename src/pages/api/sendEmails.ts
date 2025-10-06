// src/pages/api/sendEmails.ts

import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

// 1. 🚨 ATRIBUIÇÃO SEGURA DA CHAVE DE API
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(SENDGRID_API_KEY || ""); // O || '' é um fallback, mas a chave deve existir

// 2. Define o email de destino (Fixo)
const DESTINATARIO_EMAIL = "triasaboiapsicologa@gmail.com";
const REMETENTE_EMAIL = process.env.EMAIL_FROM;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // 💥 VERIFICAÇÃO CRÍTICA DE VARIÁVEIS (Retorna 500 com mensagem útil se a chave for inválida)
  if (!SENDGRID_API_KEY || !REMETENTE_EMAIL) {
    console.error(
      "ERRO CRÍTICO: Chaves de API/FROM não configuradas no ambiente."
    );
    return res
      .status(500)
      .json({
        success: false,
        message: "Falha na configuração do servidor. (Chaves ausentes)",
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
      <p><strong>Orçamento:</strong> ${budget || "Não especificado"}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    // 3. Retorno de sucesso (200)
    return res
      .status(200)
      .json({ success: true, message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("ERRO NO ENVIO DO SENDGRID:", error);
    // 4. Retorno de falha (500)
    return res
      .status(500)
      .json({
        success: false,
        message: "Falha ao enviar e-mail. Verifique a API Key.",
      });
  }
}
