// Importação da biblioteca
const prompt = require("prompt-sync")();

// Dados globais
const materias = [
  "Matemática", "Português", "Ciências", "História", "Geografia",
  "Artes", "Inglês", "Música", "Informática", "Filosofia",
  "Sociologia", "Literatura"
];

const horarios = [
  "07:00 - 09:00",
  "09:00 - 11:00",
  "11:00 - 13:00",
  "13:00 - 15:00",
  "15:00 - 17:00",
  "17:00 - 19:00",
];

let materiaEscolhida = null;
let aulasMarcadas = {};
const DIA_COLETIVO = 3; // Quarta-feira

// Início do programa
console.log("======================================");
console.log("        CONHECIMENTO PARA TODOS       ");
console.log("======================================");

// Nome e boas-vindas
let nome = prompt("Qual é o seu nome? ");
console.log(`Que bom te ter por aqui, ${nome}.`);
console.log();

// Proposta
console.log("Já pensou em ter acesso a um conteúdo didático e voltado para a sua necessidade?");
console.log("E o melhor tudo isso pode ser agendado conforme sua disponibilidade.");
console.log("Legal, né?");
console.log();

// Oferta de aulas grátis
let resposta = prompt("O que você acha de ganhar 3 aulas experimentais totalmente grátis? (sim/não): ").toLowerCase();
console.log();

if (resposta === "não" || resposta === "nao") {
    let certeza = prompt("Tem certeza que vai deixar passar essa oportunidade? (sim/não): ").toLowerCase();
    if (certeza === "sim") {
        console.log("Ok, fique à vontade para navegar no site. Se mudar de ideia, estaremos aqui.");
        process.exit();
    }
}

// Perfil do usuário
console.log("Para começar, você é:");
console.log("1)  Responsável");
console.log("2)  Educador");
console.log("3)  Administrador");
console.log("4)  Criança (Aluno)");
console.log();

let perfil = prompt("Digite o número correspondente ao seu perfil: ");
console.log();

if (perfil === "1") {
    console.log("--- Responsável ---");
    let email = prompt("Digite seu e-mail: ");
    let telefone = prompt("Digite seu telefone: ");
    let serie = prompt("Qual é a série ou necessidade da criança? ");
    console.log();
    console.log(`Obrigado! ${nome}, vou verificar os conteúdos recomendados.`);

} else if (perfil === "2") {
    console.log("--- Educador ---");
    let disciplina = prompt("Qual disciplina/área você leciona? ");
    let email = prompt("Digite seu e-mail: ");
    console.log(`Obrigado! Você terá acesso a materiais de apoio para professores de ${disciplina}.`);

} else if (perfil === "3") {
    console.log("--- Administrador ---");
    let email = prompt("Digite seu e-mail institucional: ");
    let funcao = prompt("Qual é sua função administrativa? ");
    console.log(`Acesso concedido para gestão de alunos, turmas e relatórios (${funcao}).`);

} else if (perfil === "4") {
    console.log("--- Criança (Aluno) ---");
    let idade = prompt("Qual é a sua idade ou série escolar? ");
    console.log(`Olá! Você terá acesso a conteúdos adequados para sua faixa (${idade}).`);
} else {
    console.log("Opção inválida. Reinicie o programa e escolha uma opção correta.");
    process.exit();
}
console.log();

// Escolha da matéria
console.log("Esses são os conteúdos disponíveis atualmente: ");
console.log();
materias.forEach((mat, i) => {
    console.log(`${i + 1}) ${mat}`);
});
console.log();

let resMat = prompt("Digite o NOME ou o NÚMERO da matéria que deseja acessar: ");

if (!isNaN(resMat)) {
    const indice = parseInt(resMat) - 1;
    materiaEscolhida = materias[indice];
} else {
    materiaEscolhida = materias.find(m => m.toLowerCase() === resMat.toLowerCase());
}

if (!materiaEscolhida) {
    console.log("❌ Opção de matéria inválida. Reinicie o programa.");
    process.exit();
}

console.log(`Você escolheu a matéria: ${materiaEscolhida},vamos para o menu: `);
console.log();

// Inicia o calendário
calendario();

// Funções do calendário
function calendario() {
 
    while (true) {
        console.log("=== MENU DO CALENDÁRIO ===");
        console.log();
        console.log("1) Ver calendário (Set a Nov 2025).");
        console.log("2) Marcar aula");
        console.log("3) Desmarcar aula");
        console.log("0) Sair");
        console.log();

        const opcao = prompt("Escolha uma opção: ");
        console.log();
        if (opcao === "1") {
            for (let mes = 8; mes <= 10; mes++) {
                desenharCalendario(mes, 2025);
            }
        } else if (opcao === "2") {
            marcarAula();
        } else if (opcao === "3") {
            desmarcarAula();
        } else if (opcao === "0") {
            console.log("Obrigado por usar o Conhecimento para todos!");
            console.log(`Até a proxima ${nome}!.`);
            break;
        } else {
            console.log("Opção inválida.");
        }
    }
}

function desenharCalendario(mes, ano) {
    const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const ultimoDia = new Date(ano, mes + 1, 0).getDate();
    const primeiroDiaSemana = new Date(ano, mes, 1).getDay();

    console.log(`${new Date(ano, mes).toLocaleString('pt-BR', { month: 'long', year: 'numeric' }).toUpperCase()}`);
    console.log(diasSemana.join('  '));
  
    let linha = '';
    for (let i = 0; i < primeiroDiaSemana; i++) {
        linha += '     ';
    }

    for (let dia = 1; dia <= ultimoDia; dia++) {
        const data = `${ano}-${(mes + 1).toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;
        const diaSemana = new Date(ano, mes, dia).getDay();
        let simbolo = ' ';

        if (diaSemana === 0 || diaSemana === 6) simbolo = 'X';
        else if (diaSemana === DIA_COLETIVO) simbolo = '#';
        if (aulasMarcadas[data]) simbolo = '*';

        linha += `${dia.toString().padStart(2, ' ')}${simbolo}  `;
        if ((primeiroDiaSemana + dia) % 7 === 0 || dia === ultimoDia) {
            console.log(linha);
            linha = '';
        }
    }
    console.log();
    console.log("Símbolos no calendário: X = indisponível | * = aula individual marcada | # = aula coletiva | espaço = disponível.");
    console.log();
}


function listarDiasDisponiveis(mes, ano) {
    const ultimoDia = new Date(ano, mes + 1, 0).getDate();
    let disponiveis = [];
    for (let dia = 1; dia <= ultimoDia; dia++) {
        const data = `${ano}-${(mes + 1).toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;
        const diaSemana = new Date(ano, mes, dia).getDay();
        if (diaSemana !== 0 && diaSemana !== 6 && diaSemana !== DIA_COLETIVO && !aulasMarcadas[data]) {
            disponiveis.push(data);
        }
    }
    return disponiveis;
}

function marcarAula() {
    
    console.log("Você pode marcar aulas individuais em dias úteis, exceto o dia coletivo.");
    console.log("Aulas coletivas ocorrem toda quarta-feira.");
    console.log();
   
    const mes = Number(prompt('Digite o mês (9, 10 ou 11): ')) - 1;
    const ano = 2025;
    const disponiveis = listarDiasDisponiveis(mes, ano);

    if (disponiveis.length === 0) {
        console.log();
        console.log('❌ Não há dias disponíveis para marcar aula neste mês.');
        return;
    }

    console.log('Dias disponíveis para marcar aula:');
    console.log();
    disponiveis.forEach((data, idx) => {
        console.log(`${idx + 1}) ${data}`);
    });
    console.log();

    const escolha = Number(prompt('Escolha o número do dia para marcar aula: '));
    if (escolha < 1 || escolha > disponiveis.length) {
        console.log('❌ Escolha inválida.');
        return;
    }
    console.log();

    const dataEscolhida = disponiveis[escolha - 1];

    console.log("Horários disponíveis:");
    console.log();
    horarios.forEach((hora, index) => {
        console.log(`${index + 1}) ${hora}`);
    });
    console.log();

    const escolhaHora = Number(prompt('Escolha o número do horário desejado: '));
    console.log();
    const horaEscolhida = horarios[escolhaHora - 1];

    if (!horaEscolhida) {
        console.log("❌ Horário inválido.");
        return;
    }

    aulasMarcadas[dataEscolhida] = true;

    console.log(` Aula marcada com sucesso ${nome}!.`);
    console.log(` Matéria: ${materiaEscolhida}`);
    console.log(` Dia: ${dataEscolhida}`);
    console.log(` Horário: ${horaEscolhida}`);
    console.log();
}

function desmarcarAula() {
    const marcadas = Object.keys(aulasMarcadas).filter(data => aulasMarcadas[data]);
    if (marcadas.length === 0) {
        console.log('Nenhuma aula marcada para desmarcar.');
        console.log();
        return;
    }

    console.log('Aulas marcadas:');
    console.log();
    marcadas.forEach((data, idx) => {
        console.log(`${idx + 1}) ${data}`);
    });
    console.log();

    const escolha = Number(prompt('Escolha o número do dia para desmarcar a aula: '));
    console.log();
    if (escolha < 1 || escolha > marcadas.length) {
        console.log('Escolha inválida.');
        return;
    }
    
    const dataEscolhida = marcadas[escolha - 1];
    aulasMarcadas[dataEscolhida] = false;
    console.log(`Aula desmarcada para o dia ${dataEscolhida}.`);
    console.log();
}
