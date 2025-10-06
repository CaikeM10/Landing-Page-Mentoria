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

    // 1. Desestruturação dos dados brutos
    const { name, email, phone, budget, instagram, site } = formData;

    if (!name || !email || !phone) {
      alert("Por favor, preencha todos os campos antes de enviar!");
      return;
    }

    // 💥 CORREÇÃO CRÍTICA: SIMPLIFICAÇÃO DO PAYLOAD
    // Removemos a lógica de cookies e formatação de telefone, pois o servidor (Next.js API)
    // lidará com isso, ou os dados brutos são suficientes para o SendGrid.
    const payload = {
      name,
      email,
      phone, // Enviado sem formatação internacional
      instagram: instagram || "N/A",
      site: site || "N/A",
      budget: budget || "N/A",
      msg_send: `Olá ${name} preenchi o formulário entre em contato comigo.`,
    };

    try {
      // 💥 MUDANÇA CRÍTICA: Altera a URL de envio para o ENDPOINT DE API SEGURO LOCAL
      const response = await fetch(
        "/api/sendEmails", // ⬅️ Este endpoint deve ser o seu arquivo /pages/api/sendEmails.ts
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
          <input
            type="text"
            name="instagram"
            placeholder="Instagram (@seuusuario)"
            value={formData.instagram}
            onChange={handleInputChange}
          />

          {/* O botão agora usa a classe styles.button para o estilo dourado */}
          <button type="submit" className={styles.button}>
            QUERO GARANTIR AGORA MESMO!
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
