import React, { useState } from 'react';
import axios from 'axios';

function CadastroFuncionario() {

  const [dados, setDados] = useState({
    nome: '',
    cargo: '',
    salario: '',
    departamento: ''
  });

  const salvar = async () => {
    await axios.post('http://localhost:3001/api/funcionarios', dados);
    alert('Cadastrado');
  };

  return (
    <div className="card p-4 shadow">

      <h3>Cadastrar</h3>

      <input className="form-control mb-2" placeholder="Nome"
        onChange={e => setDados({ ...dados, nome: e.target.value })}
      />

      <input className="form-control mb-2" placeholder="Cargo"
        onChange={e => setDados({ ...dados, cargo: e.target.value })}
      />

      <input className="form-control mb-2" placeholder="Salário"
        onChange={e => setDados({ ...dados, salario: e.target.value })}
      />

      <input className="form-control mb-2" placeholder="Departamento"
        onChange={e => setDados({ ...dados, departamento: e.target.value })}
      />

      <button className="btn btn-primary" onClick={salvar}>
        Salvar
      </button>

    </div>
  );
}

export default CadastroFuncionario;