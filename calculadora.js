function somar(a, b) {
  return a + b;
}

// Função de subtração
function subtrair(a, b) {
  return a - b;
}

// Função de multiplicação
function multiplicar(a, b) {
  return a * b;
}

// Função de divisão com verificação de divisão por zero
function dividir(a, b) {
  if (b === 0) {
    return 'Erro: Divisão por zero!';
  }
  return a / b;
}

// Teste de todas as funções
const num1 = 10;
const num2 = 5;

console.log('🧮 Teste soma:', somar(num1, num2));           // 15
console.log('➖ Teste subtração:', subtrair(num1, num2));   // 5
console.log('✖️ Teste multiplicação:', multiplicar(num1, num2)); // 50
console.log('➗ Teste divisão:', dividir(num1, num2));       // 2
console.log('🚫 Teste divisão por zero:', dividir(num1, 0)); // Erro