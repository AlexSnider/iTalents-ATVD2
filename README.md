# iTalents - Desafio 2

## Cadastro de Alunos, Notas e Faltas

Este projeto contém um script para cadastrar alunos, suas matérias, notas e faltas, e determinar seu status de aprovação ou reprovação com base nas notas e faltas.

## Estrutura do Projeto

- `script.js`: Script JavaScript que contém a lógica de cadastro e cálculo das médias, faltas e status dos alunos.
- `check_functions.js`: Módulo com funções de validação utilizadas no script principal.

## Funcionalidades

- Receber o nome do aluno, matérias, notas e faltas como parâmetros.
- Calcular a média das notas de cada matéria.
- Determinar o status do aluno em cada matéria de acordo com os seguintes critérios:
  - Reprovado por faltas: mais de 5 faltas.
  - Reprovado por nota insuficiente: média das notas menor que 7.
  - Aprovado: média das notas igual ou maior que 7 e até 5 faltas.
- Exibir o resultado das médias, faltas e status correspondente de cada matéria.

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
