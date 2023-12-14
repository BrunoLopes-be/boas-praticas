# Projeto Onboarding Be :computer:

# Introdução

Projeto desenvolvido com base em boas práticas, padrões e dicas, voltado ao treinamento interno da Be.

# Programa piadas aleatorias Chuck Norris - Desafio I

O desafio consiste em criar um programa que exiba no console uma piada aleatória que vem da api https://api.chucknorris.io/ 

## Rodando o Desafio

```shell
# 1. Clone o projeto

    - git clone https://github.com/BrunoLopes-be/boas-praticas.git

# 2. Executando

    - Abra o temrinal no VScode e execute node BeBoasPraticas_01-03.js

# 3. Observação

    - Tenha o Node instalado na maquina
```
# Organização e estruturação de código - Desafio II

Este desafio de código consistiu em organizar e estruturar um codigo usando as boas praticas e alguns padrões recomendados. Confira o script BeBoasPraticas_02-03.js para ver o resultado.

### Antes

```javascript
function Calculadora(p, q) {
    let result = 0;
    for (let i = 0; i <= p; i++) {
        result += q[i];
    }
    retUrN ResULt;
}

function CALCULATE_TOTAL(p, q) {
    // CALCULA O TOTAL DE UM ARRAY
    let total = 0;
    for (let i = 0; i < p.length; i++) {
        total = total + q[i];
    }
    RETURN Total;
}

const APIKEY = 'YOUR_API_KEY';
const apiEndpoint = 'https://api.example.com';

function callAPI() {
    // FAÇA UMA CHAMADA À API AQUI
    fetch(`${apiEndpoint}/data?key=${APIKEY}`)
    .then(response => response.json())
    .then(data => console.log(Data));
}

if (false) {
    console.log('FALSE');
}

function calculateDiscount(price) {
    return price - 0.1 * price;
}
```
# Planejamento e desenvolvimento - Desafio III

A proposta deste desafio reside na importância de estabelecer uma organização eficaz e definir prioridades antes de iniciar o desenvolvimento do código final. Nesse contexto, iniciei o processo com uma fase inicial de planejamento e estimativa de esforço, dedicando-me à definição da lógica necessária e à gestão do tempo para alcançar o produto final desejado. Este estágio inicial visa assegurar uma abordagem estruturada e eficiente durante todo o desenvolvimento.

```shell
# 1. Rodando o projeto.

 - Navegue ate a pasta BeBoasPraticas03-05
 - Execute o aquivo ToDoList.js
 - Siga as instruções no temrinal

# 2. Objetivo

Criar um app (To-Do List) de linha de comando utilizando javascript e o readline do Node.js.

# 3. Resultado.

Gerenciamento tarefas através do terminal (prompt de comando).
```
# Agradadecimentos

Expresso minha sincera gratidão pelo enfrentamento desses desafios do Onboarding. Iniciar uma nova jornada é sempre um desafio significativo, e isso não teria sido possível sem dedicação e comprometimento. Agradeço sinceramente pela oportunidade de demonstrar um pouco do que sou capaz.