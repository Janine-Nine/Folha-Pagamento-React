CREATE DATABASE rh_system;
USE rh_system;
CREATE TABLE usuarios (
 id INT AUTO_INCREMENT PRIMARY KEY,
 nome VARCHAR(100),
 email VARCHAR(120) UNIQUE,
 senha VARCHAR(255),
 perfil ENUM('admin','funcionario') DEFAULT 'funcionario'
);
CREATE TABLE funcionarios (
 id INT AUTO_INCREMENT PRIMARY KEY,
 nome VARCHAR(120),
 cargo VARCHAR(100),
 salario DECIMAL(10,2)
);