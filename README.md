# iTalents - Desafio 2

## Cadastro de Alunos, Notas e Faltas

Este projeto contém um script para cadastrar alunos, suas matérias, notas e faltas, e determinar seu status de aprovação ou reprovação com base nas notas e faltas.

## Estrutura do Projeto

- `script.js`: Script JavaScript que contém a lógica de cadastro e cálculo das médias, faltas e status dos alunos.
- `check_functions.js`: Módulo com funções de validação utilizadas no script principal.

## Funcionalidades

### Receber o nome do aluno, matérias, notas e faltas como parâmetros

- Receber o nome do aluno, matérias, notas e faltas como parâmetros.
- Calcular a média das notas de cada matéria.
- Determinar o status do aluno em cada matéria de acordo com os seguintes critérios:
  - Reprovado por faltas: mais de 5 faltas.
  - Reprovado por nota insuficiente: média das notas menor que 7.
  - Aprovado: média das notas igual ou maior que 7 e até 5 faltas.
- Exibir o resultado das médias, faltas e status correspondente de cada matéria.

## Funções da aplicação

- Utiliza a função `prompt` para capturar as entradas do usuário.
- A função `isString` valida se o nome do aluno e as matérias são strings válidas (apenas letras e espaços).
- A função `isNumberAndPositive` valida se as notas são números positivos dentro do intervalo [0, 10] com casas decimais [0.5, 9.33].
- A função `isInteger` valida se o total de faltas é um número inteiro dentro do intervalo [0, 10].

### Calcular a média das notas de cada matéria
- A função `calcularMedia` percorre cada matéria, soma as notas e calcula a média, arredondando para duas casas decimais.

### Determinar o status do aluno em cada matéria
- A função `verificarStatus` determina se o aluno foi aprovado ou reprovado com base no número de faltas e na média das notas.
- Critérios:
  - Reprovado por faltas: mais de 5 faltas.
  - Reprovado por nota insuficiente: média das notas menor que 7.
  - Aprovado: média das notas igual ou maior que 7 e até 5 faltas.

### Exibir o resultado das médias, faltas e status correspondente de cada matéria
- A função `imprimirRelatorio` imprime o relatório do aluno, exibindo a média, o número de faltas e o status de cada matéria.

## Como Usar

### Executando com Node.js

1. **Instale o Node.js**:
   - [Baixe e instale o Node.js](https://nodejs.org/).

2. **Clone o repositório**:
   ```sh
   git clone https://github.com/AlexSnider/iTalents-ATVD2
   cd iTalents-ATVD2
   node script.js

## Licença
Esse projeto está sob lincença [MIT](https://github.com/AlexSnider/iTalents-ATVD2/blob/main/LICENSE).
