const readline = require('readline'); // Importa o módulo 'readline' do Node.js para ler entradas do usuário no terminal

// Cria a interface de entrada e saída para o terminal
const rl = readline.createInterface({
  input: process.stdin, // define que a entrada será o teclado
  output: process.stdout // define que a saída será o terminal
});

// Lista de matérias disponíveis
const materias = [
  "Matemática", "Português", "Ciências","História", "Geografia", "Artes", "Inglês",
  "Música", "Informática", "Filosofia", "Sociologia", "Literatura"
];

// Lista de horários disponíveis (segunda a sexta-feira, dois horários por dia)
const horarios = [
  "Segunda-feira 10h", "Segunda-feira 14h",
  "Terça-feira 10h", "Terça-feira 14h",
  "Quarta-feira 10h", "Quarta-feira 14h",
  "Quinta-feira 10h", "Quinta-feira 14h",
  "Sexta-feira 10h", "Sexta-feira 14h"
];

// Mostra todas as matérias e horários disponíveis no terminal
console.log("Matérias e horários disponíveis:\n");
materias.forEach((mat) => { // Para cada matéria na lista
  console.log(`Matéria: ${mat}`); // Mostra o nome da matéria
  horarios.forEach((hora) => console.log(`  - ${hora}`)); // Lista todos os horários disponíveis para cada matéria
  console.log(""); // Linha em branco entre matérias para melhor visualização
});

// Pergunta ao usuário qual matéria ele deseja acessar
rl.question("Digite o nome da matéria que deseja acessar: ", (resMat) => {
  // Procura a matéria digitada pelo usuário, ignorando maiúsculas/minúsculas
  const materiaEscolhida = materias.find(m => m.toLowerCase() === resMat.toLowerCase());

  if (materiaEscolhida) { // Se a matéria digitada for válida
    console.log(`\nVocê escolheu a matéria: ${materiaEscolhida}`);
    
    // Mostra todos os horários disponíveis
    console.log("\nHorários disponíveis:");
    horarios.forEach((hora, index) => console.log(`${index + 1}. ${hora}`));

    // Pergunta ao usuário qual horário deseja agendar
    rl.question("\nDigite o número do horário que deseja agendar: ", (resHora) => {
      const horaEscolhida = horarios[resHora - 1]; // Seleciona o horário correspondente ao número digitado

      if (horaEscolhida) { // Se o horário digitado for válido
        console.log(`\nAgendamento confirmado para ${materiaEscolhida} no horário: ${horaEscolhida}`);
      } else { // Caso o número digitado não corresponda a nenhum horário
        console.log("\nOpção de horário inválida. Reinicie o programa.");
      }
      rl.close(); // Fecha a interface de entrada
    });

  } else { // Se a matéria digitada não existir na lista
    console.log("\nOpção de matéria inválida. Reinicie o programa.");
    rl.close(); // Fecha a interface de entrada
  }
});

