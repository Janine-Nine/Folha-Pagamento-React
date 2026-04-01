# Folha-Pagamento-React
Espero que esteja certo essa folha de pagamento pois React me dá dor de cabeça
# 💰 Folha de Pagamento - React App

## 📌 Sobre o Projeto

A **Folha de Pagamento** é uma aplicação web desenvolvida em **React** para gerenciamento de dados básicos de funcionários, permitindo o preenchimento de informações como ano, nome do funcionário, cargo, horas trabalhadas e empresa, com opção de impressão da folha de pagamento.

O sistema possui uma interface simples, organizada e funcional, focada em usabilidade e rapidez no preenchimento de dados.

---

## 🚀 Tecnologias Utilizadas

* React
* JavaScript
* HTML5
* CSS3
* Create React App
* Fetch API
* Testing Library
* Web Vitals

---

## 📂 Estrutura do Projeto

```
folha-pagamento/
│
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   ├── favicon.ico
│   ├── logo192.png
│   └── logo512.png
│
├── src/
│   ├── App.js
│   ├── FolhaPagamento.js
│   ├── FolhaPagamento.css
│   ├── index.js
│   ├── index.css
│   ├── enviarFolha.js
│   ├── App.test.js
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── package.json
└── README.md
```

---

## ⚙️ Funcionalidades

✔️ Cadastro de folha de pagamento
✔️ Preenchimento de dados do funcionário
✔️ Registro de horas trabalhadas
✔️ Nome da empresa
✔️ Impressão da folha
✔️ Envio de dados via API (HTTP POST)
✔️ Interface simples e responsiva
✔️ Estrutura pronta para expansão

---

## 🖥️ Interface

A aplicação possui:

* Formulário centralizado
* Campos organizados
* Botão de impressão
* Botão de envio
* Layout limpo
* Responsivo

---

## 📦 Instalação do Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/folha-pagamento.git
```

---

### 2. Entrar na pasta

```bash
cd folha-pagamento
```

---

### 3. Instalar dependências

```bash
npm install
```

---

### 4. Rodar o projeto

```bash
npm start
```

---

## 🌐 Acesso

Após iniciar, abra no navegador:

```
http://localhost:3000
```

---

## 📡 Envio de Dados

A aplicação utiliza **Fetch API** para envio dos dados para uma API de teste:

```
https://httpbin.org/post
```

Exemplo de envio:

```javascript
fetch("https://httpbin.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(dados)
});
```

---

## 🧪 Testes

O projeto possui suporte a testes com:

* Testing Library
* Jest DOM

Rodar testes:

```bash
npm test
```

---

## 📊 Performance

O sistema utiliza **Web Vitals** para monitoramento de desempenho:

* CLS
* FID
* FCP
* LCP
* TTFB

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de:

* Praticar React
* Criar formulários dinâmicos
* Trabalhar com estados
* Implementar envio de dados
* Simular um sistema de folha de pagamento
* Estruturar um projeto profissional

---

## 🔮 Melhorias Futuras

* Integração com banco de dados
* Backend com Node.js ou Spring Boot
* Cadastro de múltiplos funcionários
* Geração de PDF
* Dashboard administrativo
* Autenticação de usuários
* Histórico de folhas

---

## 👩‍💻 Autora

**Janine Tavares Cunha**
Estudante de Tecnologia e Desenvolvedora Web Full Stack

📧 Email: [janinecunha213@gmail.com](mailto:janinecunha213@gmail.com)
🔗 LinkedIn: https://www.linkedin.com/in/janine-cunha-74b456307
💻 GitHub: https://github.com/Janine-Nine

---

## 📜 Licença

Este projeto é de uso educacional e livre para estudos.

---

## ⭐ Contribuição

Sinta-se à vontade para contribuir com melhorias.

1. Fork o projeto
2. Crie uma branch
3. Commit suas mudanças
4. Push
5. Abra um Pull Request

---

## 💡 Observação

Projeto ideal para portfólio de desenvolvedor React iniciante/intermediário e demonstração de habilidades em:

* Componentização
* Formulários
* Estados
* API
* Organização de código
* Estrutura profissional

---


