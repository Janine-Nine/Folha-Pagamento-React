import React from 'react';
import CadastroFuncionario from './CadastroFuncionario';
import FolhaPagamento from './FolhaPagamento';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Sistema RH
      </h1>

      <div className="row">

        <div className="col-md-6">
          <CadastroFuncionario />
        </div>

        <div className="col-md-6">
          <FolhaPagamento />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;