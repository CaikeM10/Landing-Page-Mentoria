import React, { useState } from "react";
import styles from "./styles.module.scss";
import router from "next/router";

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

    const { name, email, phone, budget, instagram, site, profissao } = formData;

    if (!name || !email || !phone) {
      alert("Por favor, preencha todos os campos antes de enviar!");
      return;
    }

    const payload = {
      name,
      email,
      phone,
      instagram: instagram || "N/A",
      site: site || "N/A",
      budget: budget || "N/A",
      profissao: profissao || "N/A",
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
        // 💥 CORREÇÃO: Redireciona a aba atual para a página de escolha (thankYou)
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
            Libere agora mesmo <span>sua aula!</span>
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
          <input
            type="text"
            name="profissao"
            placeholder="Digite Sua Profissão"
            value={formData.profissao}
            onChange={handleInputChange}
          />
          <button type="submit" className={styles.button}>
            CLIQUE AQUI PARA GANHAR ESSE ACESSO!
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
