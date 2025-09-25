
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
  "07:00 - 09:00",
  "09:00 - 11:00",
  "11:00 - 13:00",
  "13:00 - 15:00",
  "15:00 - 17:00",
  "17:00 - 19:00",
];

// Mostrar matérias numeradas
console.log("Matérias disponíveis:");
materias.forEach((mat, index) => {
  console.log(`${index + 1}. ${mat}`);
});
console.log();


// OBJETIVO: Criar um calendário de aulas, permitindo marcar e desmarcar aulas,
// com controle de dias disponíveis, indisponíveis e dias de aula coletiva.


// Objeto para armazenar as aulas marcadas. Modelo: 'YYYY-MM-DD', Valor: true (aula marcada), false (aula desmarcada), ex: { '2025-09-15': true }.
let aulasMarcadas = {}; // guarda datas com aulas marcadas.

// Defina aqui o dia da semana para aula coletiva (ex: quarta-feira = 3)
const DIA_COLETIVO = 3; // 1=Seg, 2=Ter, 3=Qua, 4=Qui, 5=Sex — escolhi 3 (quarta)

// Exibe mensagem de boas-vindas ao calendário
console.log("Bem-vindo ao Calendário de Aulas!");
console.log();
console.log("Você pode marcar aulas individuais em dias disponíveis (dias úteis, exceto dia coletivo).");
console.log("Aulas coletivas ocorrem toda quarta-feira, são aulas em grupo com outros alunos.");
console.log("Dias indisponíveis: Sábados, Domingos e o dia coletivo (quarta-feira).");
console.log("Símbolos no calendário: X = indisponível | * = aula individual marcada | # = aula coletiva | espaço = disponível");
console.log();

// Função para desenhar um calendário mensal no terminal
function desenharCalendario(mes, ano) {
    const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']; // nomes das colunas do calendário
    const ultimoDia = new Date(ano, mes + 1, 0).getDate(); // pega quantos dias tem no mês
    const primeiroDiaSemana = new Date(ano, mes, 1).getDay(); // dia da semana do primeiro dia do mês (0..6)

    // Cabeçalho do mês
    console.log(`\n   ${new Date(ano, mes).toLocaleString('pt-BR', { month: 'long', year: 'numeric' }).toUpperCase()}`); // mostra "SETEMBRO 2025" por exemplo
    console.log(diasSemana.join('  ')); // imprime "Dom  Seg  Ter  Qua  Qui  Sex  Sáb"

    // Espaços antes do primeiro dia
    let linha = ''; // vai montar a linha atual do calendário
    for (let i = 0; i < primeiroDiaSemana; i++) {  // adiciona espaços para os dias antes do primeiro dia do mês
        linha += '     '; // adiciona espaços em branco até começar o primeiro dia
    }

    // Dias do mês
    for (let dia = 1; dia <= ultimoDia; dia++) {  // para cada dia do mês
        const data = `${ano}-${(mes+1).toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`; // formato 'YYYY-MM-DD'
        const diaSemana = new Date(ano, mes, dia).getDay(); // pega o dia da semana do dia atual
        let simbolo = ' '; // Espaço para dias disponíveis

        if (diaSemana === 0 || diaSemana === 6) { // domingo ou sábado
            simbolo = 'X'; // se for domingo(0) ou sábado(6), marca como indisponível
        } else if (diaSemana === DIA_COLETIVO) {  // dia da semana da aula coletiva
            simbolo = '#'; // se for o dia coletivo configurado, marca com '#'
        }
        if (aulasMarcadas[data]) { // se houver uma aula marcada nessa data
            simbolo = '*'; // individual, mostra '*'
        }
        // Exibe o dia com símbolo: X = indisponível, * = aula marcada, # = aula coletiva, espaço = disponível
        linha += `${dia.toString().padStart(2, ' ')}${simbolo}  `; // adiciona algo como " 1  2*  3#  " à linha
        if ((primeiroDiaSemana + dia) % 7 === 0 || dia === ultimoDia) { // se a semana terminou ou é o último dia do mês
            console.log(linha); // quando a semana termina, imprime a linha inteira
            linha = ''; // reinicia a linha para a próxima semana
        }
    }
}

// Função para listar todos os dias disponíveis para marcar aula em um mês
function listarDiasDisponiveis(mes, ano) { 
    const ultimoDia = new Date(ano, mes + 1, 0).getDate(); // quantos dias tem no mês
    let disponiveis = []; // vai guardar as datas livres
    for (let dia = 1; dia <= ultimoDia; dia++) { // para cada dia do mês
        const data = `${ano}-${(mes+1).toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`; // 'YYYY-MM-DD'
        const diaSemana = new Date(ano, mes, dia).getDay(); // dia da semana
        // Não permite marcar em sábados, domingos ou dia coletivo
        if (diaSemana !== 0 && diaSemana !== 6 && diaSemana !== DIA_COLETIVO && !aulasMarcadas[data]) { // se não for sábado(6), domingo(0), dia coletivo e não tiver aula marcada
            disponiveis.push(data); // se estiver livre, adiciona na lista
        }
    }
    return disponiveis; // retorna array com as datas disponíveis
}

// Função para marcar uma aula em um dia disponível
function marcarAula() {
    const mes = Number(prompt('Digite o mês (9, 10 ou 11): ')) - 1; // lê mês e converte para índice (0=Jan)
    const ano = 2025; // fixa o ano em 2025
    const disponiveis = listarDiasDisponiveis(mes, ano); // pega dias livres desse mês
    if (disponiveis.length === 0) { // se não tiver nenhum dia livre
        console.log('Não há dias disponíveis para marcar aula neste mês.'); // avisa se não tiver nenhum dia livre
        return; // sai da função
    }
    console.log('Dias disponíveis para marcar aula:'); // mostra as opções
    disponiveis.forEach((data, idx) => { // para cada data disponível
        console.log(`${idx + 1}) ${data}`); // lista cada data com um número
    });
    const escolha = Number(prompt('Escolha o número do dia para marcar aula: ')); // pede qual opção quer
    if (escolha < 1 || escolha > disponiveis.length) { // se a escolha for inválida
        console.log('Escolha inválida.'); // validação simples
        return; // sai da função
    }
    const dataEscolhida = disponiveis[escolha - 1]; // pega a data escolhida
    aulasMarcadas[dataEscolhida] = true; // marca a aula nessa data
    console.log(`Aula marcada para o dia ${dataEscolhida}!`); // confirma para o usuário
}

// Função para desmarcar uma aula já marcada
function desmarcarAula() {
    const marcadas = Object.keys(aulasMarcadas).filter(data => aulasMarcadas[data]); // pega só as datas que estão marcadas como true
    if (marcadas.length === 0) { // se não tiver nenhuma aula marcada
        console.log('Nenhuma aula marcada para desmarcar.'); // se não tiver nada marcado
        return;
    }
    console.log('Aulas marcadas:'); // mostra as aulas que estão marcadas
    marcadas.forEach((data, idx) => {  // para cada data marcada
        console.log(`${idx + 1}) ${data}`); // lista com número pra escolher
    });
    const escolha = Number(prompt('Escolha o número do dia para desmarcar a aula: ')); // pede a escolha do usuário
    if (escolha < 1 || escolha > marcadas.length) { 
        console.log('Escolha inválida.'); // validação da escolha
        return;
    }
    const dataEscolhida = marcadas[escolha - 1]; // data selecionada
    aulasMarcadas[dataEscolhida] = false; // desmarca a aula (coloca false)
    console.log(`Aula desmarcada para o dia ${dataEscolhida}.`); // confirma para o usuário
}

// Função principal para mostrar o menu e executar comandos
function calendario() {
    while (true) { // repete até o usuário escolher sair
        console.log('\n=== MENU DO CALENDÁRIO ==='); // cabeçalho do menu
        console.log('1) Ver calendário de Setembro a Novembro de 2025'); // opção 1
        console.log('2) Marcar aula'); // opção 2
        console.log('3) Desmarcar aula'); // opção 3
        console.log('0) Sair'); // opção 0 para sair

        const opcao = prompt('Escolha uma opção: '); // lê a opção do usuário
        if (opcao === '1') {
            for (let mes = 8; mes <= 10; mes++) { // Setembro (8) até Novembro (10)
                desenharCalendario(mes, 2025); // desenha cada mês
            }
        } else if (opcao === '2') {
            marcarAula(); // chama função para marcar
        } else if (opcao === '3') {
            desmarcarAula(); // chama função para desmarcar
        } else if (opcao === '0') {
            console.log('Saindo... Obrigado por usar o calendário de aulas!'); // mensagem de despedida
            break; // sai do loop e encerra o programa
        } else {
            console.log('Opção inválida.'); // recebe outra entrada se inválida
        }
    }
}

// Inicia o programa,
calendario(); // chamando a função principal para começar o menu
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
