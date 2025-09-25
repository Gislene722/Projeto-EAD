
// Programa de  site EAD para pessoas com comorbidade.
// Início do programa.
// Importando a biblioteca prompt-sync.
const prompt = require("prompt-sync")();

// Exibe mensagem de boas-vindas.
console.log("Seja bem-vindo(a) ao Conhecimento para Todos.");

// Pergunta o nome do usuário
let nome = prompt("Qual é o seu nome? ");  // O usuário digita e a resposta é armazenada na variável "nome".

// Mostra mensagem personalizada com o nome informado.
console.log(`Que bom te ter por aqui, ${nome}.`);

// Mostra informações sobre os benefícios.
console.log();
console.log("Já pensou em ter acesso a um conteúdo didático e voltado para a sua necessidade?");
console.log("E o melhor: tudo isso pode ser agendado conforme sua disponibilidade.");
console.log("Legal, né?");
console.log();
// Pergunta ao usuário se ele quer 3 aulas grátis.
let resposta = prompt("O que você acha de ganhar 3 aulas experimentais totalmente grátis? (sim/não): ").toLowerCase();

console.log();

if (resposta === "não" || resposta === "nao") {
    let certeza = prompt("Tem certeza que vai deixar passar essa oportunidade? (sim/não) ").toLowerCase();

    if (certeza === "sim") {
        console.log(" Ok, fique à vontade para navegar no site. Se mudar de ideia, estaremos aqui.");
        process.exit(); // Encerra o programa.
    }
}

console.log(" Para começar, você é:");
console.log("1 - Responsável");
console.log("2 - Educador");
console.log("3 - Administrador");
console.log("4 - Criança (Aluno)");
console.log();

let perfil = prompt("Digite o número correspondente ao seu perfil: ");

console.log();

//Condicional if/else usada para cada perfil.

if (perfil === "1") {
    console.log("--- Responsável ---");
    let emailPai = prompt("Digite seu e-mail: ");
    let telPai = prompt("Digite seu telefone: ");
    let serie = prompt("Qual é a série ou necessidade da criança? ");
    console.log();
    console.log(`Obrigado! Com base na série "${serie}", mostraremos conteúdos recomendados.`);

} else if (perfil === "2") {
    console.log(" --- Educador ---");
    let disciplina = prompt("Qual disciplina/área você leciona? ");
    let emailEdu = prompt("Digite seu e-mail: ");
    console.log();
    console.log(` Obrigado, ${nomeEdu}! Você terá acesso a materiais de apoio para professores de ${disciplina}.`);

} else if (perfil === "3") {
    console.log(" --- Administrador ---");
    let emailAdmin = prompt("Digite seu e-mail institucional: ");
    let funcao = prompt("Qual é sua função administrativa? ");
    console.log(`Acesso concedido para gestão de alunos, turmas e relatórios (${funcao}).`);

} else if (perfil === "4") {
    console.log(" --- Criança (Aluno) ---");
    let idade = prompt("Qual é a sua idade ou série escolar? ");
    console.log(`Olá ${nomeAluno}! Você terá acesso a conteúdos adequados para sua faixa (${idade}).`);

} else {
    console.log("Opção inválida. Reinicie o programa e escolha uma opção correta.");
    process.exit(); 
}

//Informação impresa na tela.
console.log();
console.log("Esses são os conteúdos disponíveis atualmente para você.");
console.log();

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
console.log("Matérias disponíveis:");
materias.forEach((mat, index) => {
  console.log(`${index + 1}. ${mat}`);
});
console.log();

// Perguntar qual matéria deseja
rl.question("Digite o NOME ou o NÚMERO da matéria que deseja acessar: ", (resMat) => {
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
    console.log(`Você escolheu a matéria: ${materiaEscolhida}`);
    console.log();

    // Mostrar horários
    console.log("Horários disponíveis:");
    horarios.forEach((hora, index) => console.log(`${index + 1}. ${hora}`));
    console.log();
    // Perguntar horário
    rl.question("Digite o número do horário que deseja agendar: ", (resHora) => {
      const horaEscolhida = horarios[parseInt(resHora) - 1];

      if (horaEscolhida) {
        console.log(`✅ Agendamento confirmado para ${materiaEscolhida} no horário: ${horaEscolhida}.`);
      } else {
        console.log("❌ Opção de horário inválida. Reinicie o programa.");
      }
      rl.close();
    });

  } else {
    console.log("❌ Opção de matéria inválida. Reinicie o programa.");
    rl.close();
  }
});
