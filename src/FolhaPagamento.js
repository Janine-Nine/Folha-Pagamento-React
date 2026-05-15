import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';

function FolhaPagamento() {

  const [lista, setLista] = useState([]);

  useEffect(() => {
    carregar();
  }, []);

  const carregar = async () => {
    const res = await axios.get('http://localhost:3001/api/funcionarios');
    setLista(res.data);
  };

  const gerarPDF = (funcionario) => {

    const doc = new jsPDF();

    const inss = funcionario.salario * 0.11;
    const ir = funcionario.salario * 0.075;
    const liquido = funcionario.salario - inss - ir;

    doc.text(`Funcionário: ${funcionario.nome}`, 10, 20);
    doc.text(`Cargo: ${funcionario.cargo}`, 10, 30);
    doc.text(`Salário Bruto: ${funcionario.salario}`, 10, 40);
    doc.text(`INSS: ${inss}`, 10, 50);
    doc.text(`IR: ${ir}`, 10, 60);
    doc.text(`Líquido: ${liquido}`, 10, 70);

    doc.save(`${funcionario.nome}.pdf`);
  };

  return (
    <div className="card p-4 shadow">

      <h3>Folha</h3>

      {lista.map(f => (

        <div key={f.id} className="border p-2 mb-2 rounded">

          <h5>{f.nome}</h5>
          <p>{f.cargo}</p>

          <button className="btn btn-success"
            onClick={() => gerarPDF(f)}>
            PDF
          </button>

        </div>

      ))}

    </div>
  );
}

export default FolhaPagamento;