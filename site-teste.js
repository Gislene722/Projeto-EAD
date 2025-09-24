
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
console.log(" Já pensou em ter acesso a um conteúdo didático e voltado para a sua necessidade?");
console.log("E o melhor: tudo isso pode ser agendado conforme sua disponibilidade.");
console.log("Legal, né?");

// Pergunta ao usuário se ele quer 3 aulas grátis.
let resposta = prompt("O que você acha de ganhar 3 aulas experimentais totalmente grátis? (sim/não) ").toLowerCase();

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

let perfil = prompt("Digite o número correspondente ao seu perfil: ");


//Condicional if/else usada para cada perfil.

if (perfil === "1") {
    console.log("--- Responsável ---");
    let emailPai = prompt("Digite seu e-mail: ");
    let telPai = prompt("Digite seu telefone: ");
    let serie = prompt("Qual é a série ou necessidade da criança? ");
    console.log(` Obrigado! Com base na série "${serie}", mostraremos conteúdos recomendados.`);

} else if (perfil === "2") {
    console.log(" --- Educador ---");
    let disciplina = prompt("Qual disciplina/área você leciona? ");
    let emailEdu = prompt("Digite seu e-mail: ");
    console.log(` Obrigado, ${nomeEdu}! Você terá acesso a materiais de apoio para professores de ${disciplina}.`);

} else if (perfil === "3") {
    console.log(" --- Administrador ---");
    let emailAdmin = prompt("Digite seu e-mail institucional: ");
    let funcao = prompt("Qual é sua função administrativa? ");
    console.log(`Acesso concedido para gestão de alunos, turmas e relatórios (${funcao}).`);

} else if (perfil === "4") {
    console.log(" --- Criança (Aluno) ---");
    let idade = prompt("Qual é a sua idade ou série escolar? ");
    console.log(` Olá ${nomeAluno}! Você terá acesso a conteúdos adequados para sua faixa (${idade}).`);

} else {
    console.log(" Opção inválida. Reinicie o programa e escolha uma opção correta.");
    process.exit(); 
}

//Informação impresa na tela.

console.log(" Esses são os conteúdos disponíveis atualmente para você.");
console.log("Que tal agendar sua primeira aula? ");

// Fim parcial do programa.


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
console.log("Matérias e horários disponíveis: ");
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
    console.log(` Você escolheu a matéria: ${materiaEscolhida}`);
    
    // Mostra todos os horários disponíveis
    console.log(" Horários disponíveis:");
    horarios.forEach((hora, index) => console.log(`${index + 1}. ${hora}`));

    // Pergunta ao usuário qual horário deseja agendar
    rl.question(" Digite o número do horário que deseja agendar: ", (resHora) => {
      const horaEscolhida = horarios[resHora - 1]; // Seleciona o horário correspondente ao número digitado

      if (horaEscolhida) { // Se o horário digitado for válido
        console.log(` Agendamento confirmado para ${materiaEscolhida} no horário: ${horaEscolhida}`);
      } else { // Caso o número digitado não corresponda a nenhum horário
        console.log(" Opção de horário inválida. Reinicie o programa.");
      }
      rl.close(); // Fecha a interface de entrada
    });

  } else { // Se a matéria digitada não existir na lista
    console.log(" Opção de matéria inválida. Reinicie o programa.");
    rl.close(); // Fecha a interface de entrada
  }
});

