function enviarFolha(nome, dados) {
  const texto = `
Funcionário: ${nome}

Salário Bruto: R$ ${dados.bruto.toFixed(2)}
INSS: R$ ${dados.inss.toFixed(2)}
IR: R$ ${dados.ir.toFixed(2)}
Líquido: R$ ${dados.liquido.toFixed(2)}
`;

  const blob = new Blob([texto], { type: 'text/plain' });
  const link = document.createElement('a');

  link.href = URL.createObjectURL(blob);
  link.download = `${nome}_folha.txt`;
  link.click();
}

export default enviarFolha;