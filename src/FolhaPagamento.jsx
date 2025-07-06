import React, { useState } from "react";
import "./FolhaPagamento.css";

export default function FolhaPagamento() {
  const [formData, setFormData] = useState({
    ano: "",
    funcionario: "",
    cargo: "",
    horas: "",
    empresa: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const imprimir = () => {
    window.print();
  };

  return (
    <div className="folha-container">
      <h2>Folha de Pagamento</h2>
      <form>
        <div className="campo">
          <label>Ano</label>
          <input
            type="number"
            name="ano"
            value={formData.ano}
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo">
          <label>Nome do Funcionário</label>
          <input
            type="text"
            name="funcionario"
            value={formData.funcionario}
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo">
          <label>Cargo</label>
          <input
            type="text"
            name="cargo"
            value={formData.cargo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo">
          <label>Horas de Trabalho</label>
          <input
            type="number"
            name="horas"
            value={formData.horas}
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo">
          <label>Nome da Empresa</label>
          <input
            type="text"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            required
          />
        </div>

        <button type="button" onClick={imprimir} style={{ marginBottom: 10 }}>
          Imprimir
        </button>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}