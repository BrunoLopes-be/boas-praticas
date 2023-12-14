const readline = require('readline');

const todoInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = {
  todo: [],
  doing: [],
  done: []
};

function displayTasks() {
  console.log('\n--- Tasks ---');
  console.log('To Do:', tasks.todo.join(', '));
  console.log('Doing:', tasks.doing.join(', '));
  console.log('Done:', tasks.done.join(', '));
  console.log('----------------\n');
}

function addTask(state, task) {
  tasks[state].push(task);
  console.log(`Task "${task} added to "${state}".`);
}

function moveTask(fromState, toState, task) {
  const index = tasks[fromState].indexOf(task);
  
  if (index !== -1) {
    tasks[fromState].splice(index, 1);
    tasks[toState].push(task);
    console.log(`Task "${task}" moved from "${fromState}" to "${toState}".`);
  } else {
    console.log(`Task "${task}" not found in "${fromState}".`);
  }
}

function mainLoop() {
  todoInterface.question('Command (add/move/display/exit): ', (command) => {
    if (command === 'exit') {
      return todoInterface.close();
    }

    if (command === 'display') {
      displayTasks();
      return mainLoop();
    }

    if (command === 'add') {
      return todoInterface.question('State (todo/doing/done): ', (state) => {
        todoInterface.question('Task: ', (task) => {
          addTask(state, task);
          mainLoop();
        });
      });
    }

    if (command === 'move') {
      return todoInterface.question('From state (todo/doing/done): ', (fromState) => {
        todoInterface.question('To state (todo/doing/done): ', (toState) => {
          todoInterface.question('Task: ', (task) => {
            moveTask(fromState, toState, task);
            mainLoop();
          });
        });
      });
    }

    console.log('Invalid command. Please try again.');
    mainLoop();
  });
}

console.log('Welcome to Task Manager!\n');
mainLoop();
