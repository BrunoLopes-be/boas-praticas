# 1 - **Quais são os dados de entrada para resolver o problema?**

   > Os dados de entrada necessários são as operações escolhidas pelo usuário:

        - Adicionar tarefas;
        - Mover tarefas entre estados;
        - Exibir as listas de tarefas em cada estado.

   > Além disso, é preciso capturar os detalhes das tarefas a serem adicionadas ou movidas.

# 2 - **O que é preciso fazer com esses dados?**

   > **Adição de tarefas:** Capturar a descrição da tarefa e o estado inicial (todo).
   > **Movimentação das tarefas:** Identificar a tarefa a ser movida e o novo estado desejado.
   > **Exibição das tarefas por estado:** Mostrar as tarefas armazenadas em cada estado.

# 3 - **Quais são as restrições e/ou regras de negócios do problema?**

   > Os estados das tarefas são fixos: "todo", "doing" e "done".
   > As tarefas devem ser adicionadas a partir do estado "todo".
   > As tarefas podem ser movidas entre os estados seguindo a ordem "todo" -> "doing" -> "done".

# 4 - **Resultados Esperados?**

   > O aplicativo deve permitir a adição de tarefas.
   > O usuário deve conseguir mover as tarefas entre os estados.
   > O aplicativo deve exibir as tarefas armazenadas em cada estado.

# 5 - **Quais são os passos para alcançar esse objetivo?**

   > **Início do desenvolvimento:**

        - Configurar a base do projeto:

            - Instalação do Node.js;
            - Iniciar o projeto;
            - Instalação das dependências.
 
   > Implementação da lógica de adição de tarefas.
   > Implementação da lógica de movimentação de tarefas entre estados.
   > Implementação da lógica de exibição das tarefas por estados.