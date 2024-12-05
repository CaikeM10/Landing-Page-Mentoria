import React, { useState } from "react";
import styles from "./styles.module.scss";

const ModalForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, phone, email } = formData;

    if (!name || !phone || !email) {
      alert("Por favor, preencha todos os campos antes de enviar!");
      return;
    }

    const message = `Olá, gostaria de pedir um orçamento grátis!%0A
    Nome: ${name}%0A
    Telefone: ${phone}%0A
    Email: ${email}`;

    const whatsappUrl = `https://wa.me/5541999179672?text=${message}`;
    window.open(whatsappUrl, "_blank");
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
            Peça agora um <span>orçamento</span> grátis
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
            type="tel"
            name="phone"
            placeholder="Telefone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <button type="submit">RECEBER ORÇAMENTO GRÁTIS</button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
