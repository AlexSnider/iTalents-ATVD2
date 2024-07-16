const {
  isNumberAndPositive,
  isString,
  isInteger,
} = require("./check_functions/checkFunctions"); // Importando as funcionalidades criadas na pasta "check_functions".
const prompt = require("prompt-sync")({ sigint: true }); // Importando o pacote "prompt-sync" para capturar entradas do usuário.

const materiasCadastradas = []; // Criando um array para armazenar as matérias.
let qtdRegistroDeMaterias = 0; // Quantidade de registros de matérias.
let continuar = true; // Flag para controlar o loop infinito.

let nomeInput; // Nome do aluno.

while (true) {
  nomeInput = prompt(
    "Por favor, insira o nome do aluno a ser cadastrado (Ex: João): "
  );
  if (isString(nomeInput)) {
    break;
  }
  console.log("Por favor, insira um nome válido (Apenas letras e espaços)!");
} // Capturando o nome do aluno e verificando se é uma string.

while (continuar) {
  const materiaInput = prompt(
    `Por favor, insira a ${
      qtdRegistroDeMaterias + 1
    }° matéria (Ex: Matemática): `
  ); // Capturando a matéria.

  if (!isString(materiaInput)) {
    console.log(
      "Por favor, insira uma matéria válida (Apenas letras e espaços)!"
    );
    continue;
  } // Verificando se a matéria é uma string.

  const notas = []; // Criando um array para armazenar as notas.
  const notasNecessarias = 3; // Quantidade de notas mínimas para a matéria.
  let registroDeNotas = 0; // Quantidade de registros de notas.

  while (registroDeNotas < notasNecessarias) {
    const nota = prompt(
      `Por favor, insira a ${
        registroDeNotas + 1
      }° nota para a matéria ${materiaInput} no intervalo [0, 10]: `
    ); // Capturando a nota.

    if (!isNumberAndPositive(nota)) {
      console.log("Por favor, insira uma nota válida no intervalo [0, 10]!");
    } else {
      notas.push(Number(nota));
      registroDeNotas++;
    } // Verificando se a nota é um número e positivo no intervalo [0, 10].
  }

  const faltasInput = prompt(
    `Por favor, insira o total de faltas da matéria ${materiaInput} no intervalo [0, 10]: `
  ); // Capturando o total de faltas.
  console.log(
    "-----------------------------------------------------------------------"
  ); // Separando as respostas do usuário.

  if (!isInteger(faltasInput)) {
    console.log(
      "Por favor, insira um total de faltas válido no intervalo [0, 10]! Vamos recomeçar..."
    );
    continue;
  } // Verificando se o total de faltas é um número inteiro no intervalo [0, 10].

  materiasCadastradas.push({
    materia: materiaInput,
    faltas: Number(faltasInput),
    notas,
  }); // Adicionando a matéria ao array de matérias, com as notas e o total de faltas.
  qtdRegistroDeMaterias++; // Incrementando a quantidade de registros de matérias.

  const limiteMinimoMaterias = 3; // Quantidade mínima de matérias.

  if (qtdRegistroDeMaterias >= limiteMinimoMaterias) {
    let resposta = "";

    while (true) {
      resposta = prompt(
        "Deseja continuar inserindo matérias? (sim/não): "
      ).toLowerCase(); // Capturando a resposta do usuário e convertendo para minúsculo.

      console.log(
        "-----------------------------------------------------------------------"
      ); // Separando as respostas do usuário.

      if (!["sim", "nao"].includes(resposta)) {
        console.log("Por favor, insira uma resposta válida!");
      } else {
        break;
      } // Verificando se a resposta é uma das permitidas.
    }
    continuar = resposta === "sim"; // Atualizando a flag para controlar o loop infinito.
  }
}

function calcularMedia(materias) {
  materias.forEach((materia) => {
    let somaNotas = 0;
    for (let i = 0; i < materia.notas.length; i++) {
      somaNotas += materia.notas[i];
    }
    const media = somaNotas / materia.notas.length;
    materia.media = Number(media.toFixed(2));
  });
} // Calculando a média de cada matérias e arredondando para duas casas decimais.

function verificarStatus(materias) {
  const limiteFaltas = 5; // Limite de faltas
  const limiteMedia = 7; // Limite de média

  materias.forEach((materia) => {
    if (materia.faltas > limiteFaltas || materia.media < limiteMedia) {
      if (materia.faltas > limiteFaltas) {
        materia.status = "Reprovado por faltas (maior que 5)!"; // Verificando se o total de faltas ultrapassa o limite.
      } else if (materia.media < limiteMedia) {
        materia.status = "Reprovado por nota insuficiente (menor que 7.0)!"; // Verificando se a média ultrapassa o limite.
      }
    } else {
      materia.status = "Aprovado! Parabéns!"; // Verificando se o aluno foi aprovado.
    }
  }); // Verificando o status do aluno.
}

function imprimirRelatorio(aluno) {
  aluno.materias.forEach((materia) => {
    const relatorio = `O aluno ${aluno.nome}, matriculado na matéria, ${materia.materia}, obteve a média de: [${materia.media}], teve [${materia.faltas}] faltas e está: #${materia.status}#.`;
    console.log(relatorio);
  }); // Imprimindo o relatório do aluno.
}

calcularMedia(materiasCadastradas);
verificarStatus(materiasCadastradas);

const aluno = {
  nome: nomeInput,
  materias: materiasCadastradas,
}; // Criando um objeto com o nome e as matérias que também possuem notas, faltas e status.

imprimirRelatorio(aluno);

// A ideia de criar um objeto para cada aluno, com as matérias que ele possui, as notas, as faltas e o status, fez com que
// o código ficasse mais limpo e legivel, tendo suas propriedades acessiveis pelo nome em muitas partes do código permitindo
// reutilizar com melhor eficiência.
