CREATE DATABASE folha_pagamento;

USE folha_pagamento;

CREATE TABLE funcionarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(120),
    cargo VARCHAR(100),
    salario DECIMAL(10,2),
    departamento VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);