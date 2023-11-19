// Função tradicional sem parâmetros
function apresentacao() {
    return "Olá, meu nome é Letícia...";
  }
  
  // Função tradicional com parâmetros e retorno de valor
  function calcularSubtracao(a, b) {
    return a - b;
  }
  
  // Arrow function com parâmetros e retorno de valor
  const multiplicar = (a, b) => a * b;
  
  // Exemplo de uso das funções
  const mensagemApresentacao = apresentacao();
  console.log(mensagemApresentacao);
  
  const resultadoSubtracao = calcularSubtracao(5, 3);
  console.log("Resultado da subtracao:", resultadoSubtracao);
  
  const resultadoMultiplicacao = multiplicar(4, 7);
  console.log("Resultado da multiplicação:", resultadoMultiplicacao);