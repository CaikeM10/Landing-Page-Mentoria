import React, { useState } from "react";
import styles from "./styles.module.scss";
import router from "next/router";

// 🚨 LINKS DE ACESSO IMEDIATO (SUBSTITUA ESTES VALORES!)
const YOUTUBE_ACCESS_LINK = "https://youtu.be/QtEv5KXpvHU";
const WHATSAPP_GROUP_LINK =
  "https://chat.whatsapp.com/DcpKUyQw8L6FOpVLNcReO6?mode=wwt";

const ModalForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    instagram: "",
    site: "",
    msg_send: "",
    profissao: "", // Novo campo
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Desestruturação dos dados brutos (Incluindo profissao)
    const { name, email, phone, budget, instagram, site, profissao } = formData;

    if (!name || !email || !phone) {
      alert("Por favor, preencha todos os campos antes de enviar!");
      return;
    }

    // Criação do PAYLOAD (JSON limpo)
    const payload = {
      name,
      email,
      phone,
      instagram: instagram || "N/A",
      site: site || "N/A",
      budget: budget || "N/A",
      profissao: profissao || "N/A", // 💥 NOVO: Adiciona profissão ao payload
      msg_send: `Olá ${name} preenchi o formulário entre em contato comigo.`,
    };

    try {
      // Chamada fetch para o endpoint seguro /api/sendEmails
      const response = await fetch("/api/sendEmails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // 💥 IMPLEMENTAÇÃO DA LÓGICA DE REDIRECIONAMENTO DUPLO
        // 1. Abre o link do WhatsApp em uma nova aba
        window.open(WHATSAPP_GROUP_LINK, "_blank");

        // 2. Redireciona a aba atual para o YouTube
        window.location.href = YOUTUBE_ACCESS_LINK;
      } else {
        alert("Erro ao enviar o formulário. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Erro ao enviar o formulário. Tente novamente.");
    }
  };

  return (
    <div className={styles.conatiner}>
      <div className={styles.content}>
        <div className={styles.close}>
          <img src="/XSquare.svg" alt="x" onClick={onClose} />
        </div>
        <div className={styles.backgroundImage}></div>

        <div className={styles.text}>
          <h3>
            Libere agora mesmo <span>sua aula!</span>
          </h3>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Campos existentes */}
          <input
            type="text"
            name="name"
            placeholder="Nome completo"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Telefone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="instagram"
            placeholder="Instagram (@seuusuario)"
            value={formData.instagram}
            onChange={handleInputChange}
          />

          {/* 💥 NOVO CAMPO: PROFISSÃO */}
          <input
            type="text"
            name="profissao"
            placeholder="Digite Sua Profissão"
            value={formData.profissao} // ⬅️ CORREÇÃO: Usa o estado 'profissao'
            onChange={handleInputChange}
          />

          {/* Botão de Submissão */}
          <button type="submit" className={styles.button}>
            ASSISTA AGORA MESMO A AULA!
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
