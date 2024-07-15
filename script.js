const {
  isNumberAndPositive,
  isString,
  isInteger,
} = require("./check_functions/checkFunctions");
const prompt = require("prompt-sync")({ sigint: true });

const materiasCadastradas = [];
let qtdRegistroDeMaterias = 0;
let continuar = true;

let nomeInput;

while (true) {
  nomeInput = prompt(
    "Por favor, insira o nome do aluno a ser cadastrado (Ex: João): "
  );
  if (isString(nomeInput)) {
    break;
  }
  console.log("Por favor, insira um nome válido (Apenas letras e espaços)!");
}

while (continuar) {
  const materiaInput = prompt(
    `Por favor, insira a ${
      qtdRegistroDeMaterias + 1
    }° matéria (Ex: Matemática): `
  );

  if (!isString(materiaInput)) {
    console.log(
      "Por favor, insira uma matéria válida (Apenas letras e espaços)!"
    );
    continue;
  }

  const notas = [];
  const notasNecessarias = 3;
  let registroDeNotas = 0;

  while (registroDeNotas < notasNecessarias) {
    const nota = prompt(
      `Por favor, insira a ${
        registroDeNotas + 1
      }° nota para a materia ${materiaInput} no intervalo [0, 10]: `
    );

    if (!isNumberAndPositive(nota)) {
      console.log("Por favor, insira uma nota válida no intervalo [0, 10]!");
    } else {
      notas.push(Number(nota));
      registroDeNotas++;
    }
  }

  const faltasInput = prompt(
    `Por favor, insira o total de faltas da matéria ${materiaInput} no intervalo [0, 10]: `
  );
  console.log(
    "-----------------------------------------------------------------------"
  );

  if (!isInteger(faltasInput)) {
    console.log(
      "Por favor, insira um total de faltas válido no intervalo [0, 10]! Vamos recomeçar..."
    );
    continue;
  }

  materiasCadastradas.push({
    materia: materiaInput,
    faltas: Number(faltasInput),
    notas,
  });
  qtdRegistroDeMaterias++;

  const limiteMinimoMaterias = 3;

  if (qtdRegistroDeMaterias >= limiteMinimoMaterias) {
    let resposta = "";

    while (true) {
      resposta = prompt(
        "Deseja continuar inserindo matérias? (sim/não): "
      ).toLowerCase();

      console.log(
        "-----------------------------------------------------------------------"
      );

      if (!["sim", "nao"].includes(resposta)) {
        console.log("Por favor, insira uma resposta válida!");
      } else {
        break;
      }
    }
    continuar = resposta === "sim";
  }
}

materiasCadastradas.forEach((materia) => {
  const media = (materia.notas[0] + materia.notas[1] + materia.notas[2]) / 3;
  materia.media = media.toFixed(2);
});

materiasCadastradas.forEach((materia) => {
  const limiteFaltas = 5;
  const limiteMedia = 7;

  if (materia.faltas > limiteFaltas || materia.media < limiteMedia) {
    if (materia.faltas > limiteFaltas) {
      materia.status = "Reprovado por faltas (maior que 5)!";
    } else if (materia.media < limiteMedia) {
      materia.status = "Reprovado por nota insuficiente (menor que 7.0)!";
    }
  } else {
    materia.status = "Aprovado! Parabéns!";
  }
});

const aluno = {
  nome: nomeInput,
  materias: materiasCadastradas,
};

materiasCadastradas.forEach((materia) => {
  const relatorio = `O aluno ${aluno.nome}, matriculado na matéria, ${materia.materia}, obteve a média de: [${materia.media}], teve [${materia.faltas}] faltas e está: #${materia.status}#.`;
  console.log(relatorio);
});
