function calcularNivel(vitorias, derrotas) {
    
  
    const saldoVitorias = vitorias - derrotas;
    let nivel;
  
    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias < 21) {
      nivel = "Bronze";
    } else if (vitorias < 51) {
      nivel = "Prata";
    } else if (vitorias < 81) {
      nivel = "Ouro";
    } else if (vitorias < 91) {
      nivel = "Diamante";
    } else if (vitorias < 101) {
      nivel = "Lendário";
    } else {
      nivel = "Imortal";
    }
  
    return { saldoVitorias, nivel };
  }
  
  // Entrada de dados (prompt é específico do navegador, use métodos apropriados para o seu ambiente)
  const vitorias = parseInt(prompt("Digite o número de vitórias: "));
  const derrotas = parseInt(prompt("Digite o número de derrotas: "));
  
  // Calcular nível
  const resultado = calcularNivel(vitorias, derrotas);
  const { saldoVitorias, nivel } = resultado;  // Desestruturação do objeto
  
  // Exibir resultado
  console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
  