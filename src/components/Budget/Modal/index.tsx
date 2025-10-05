import React, { useState } from "react";
import styles from "./styles.module.scss";
import router from "next/router";

const ModalForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    instagram: "", // Já está no estado, ótimo!
    site: "",
    msg_send: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Incluindo 'instagram' e 'site' na desestruturação para o payload
    const { name, email, phone, budget, instagram, site } = formData;

    if (!name || !email || !phone) {
      alert("Por favor, preencha todos os campos antes de enviar!");
      return;
    }

    const cleanedPhone = phone.replace(/\D/g, "");
    const formattedPhone = cleanedPhone.startsWith("55")
      ? cleanedPhone
      : `55${cleanedPhone}`;

    const msg_send = `Olá ${name} preenchi o formulário entre em contato comigo.`;

    // Obtém os cookies
    const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
      const [key, value] = cookie.split("=");
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);

    // 2. Adicionando 'instagram' e 'site' ao payload
    const payload = {
      name,
      email,
      phone: formattedPhone,
      instagram, // Adicionado
      site, // Adicionado
      budget, // Adicionado
      msg_send,
      cookies,
    };

    try {
      const response = await fetch(
        "https://webhookn8n.maistickets.com.br/webhook/rd-n8n-evo-graph",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        router.push("/thankYou");
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
            Garanta agora mesmo <span>sua vaga!</span>
          </h3>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
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
          {/* 3. NOVO INPUT DE INSTAGRAM (DESCOMENTADO) */}
          <input
            type="text"
            name="instagram"
            placeholder="Instagram (@seuusuario)"
            value={formData.instagram}
            onChange={handleInputChange}
          />

          <button type="submit"> QUERO GARANTIR MINHA VAGA!</button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
