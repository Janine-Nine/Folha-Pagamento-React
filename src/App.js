import React from "react";
import "./index.css";
import FolhaPagamento from "./FolhaPagamento";

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Folha de Pagamento
      </h1>
      <FolhaPagamento />
    </div>
  );
}
