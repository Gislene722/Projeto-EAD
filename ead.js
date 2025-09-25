const readline = require('readline'); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Lista de matérias disponíveis
const materias = [
  "Matemática", "Português", "Ciências", "História", "Geografia",
  "Artes", "Inglês", "Música", "Informática", "Filosofia",
  "Sociologia", "Literatura"
];

// Lista de horários disponíveis
const horarios = [
  "Segunda-feira 10h", "Segunda-feira 14h",
  "Terça-feira 10h", "Terça-feira 14h",
  "Quarta-feira 10h", "Quarta-feira 14h",
  "Quinta-feira 10h", "Quinta-feira 14h",
  "Sexta-feira 10h", "Sexta-feira 14h"
];

// Mostrar matérias numeradas
console.log("Matérias disponíveis:\n");
materias.forEach((mat, index) => {
  console.log(`${index + 1}. ${mat}`);
});

// Perguntar qual matéria deseja
rl.question("\nDigite o NOME ou o NÚMERO da matéria que deseja acessar: ", (resMat) => {
  let materiaEscolhida;

  // Se o usuário digitou um número
  if (!isNaN(resMat)) {
    const indice = parseInt(resMat) - 1;
    materiaEscolhida = materias[indice];
  } else {
    // Se digitou o nome (ignora maiúsculas/minúsculas)
    materiaEscolhida = materias.find(m => m.toLowerCase() === resMat.toLowerCase());
  }

  if (materiaEscolhida) {
    console.log(`\nVocê escolheu a matéria: ${materiaEscolhida}`);

    // Mostrar horários
    console.log("\nHorários disponíveis:");
    horarios.forEach((hora, index) => console.log(`${index + 1}. ${hora}`));

    // Perguntar horário
    rl.question("\nDigite o número do horário que deseja agendar: ", (resHora) => {
      const horaEscolhida = horarios[parseInt(resHora) - 1];

      if (horaEscolhida) {
        console.log(`\n✅ Agendamento confirmado para ${materiaEscolhida} no horário: ${horaEscolhida}`);
      } else {
        console.log("\n❌ Opção de horário inválida. Reinicie o programa.");
      }
      rl.close();
    });

  } else {
    console.log("\n❌ Opção de matéria inválida. Reinicie o programa.");
    rl.close();
  }
});
