const { spawn } = require('child_process');

const commandsData = [
  {
    command: 'nom run dev',
    path: './apps/frontend'
  }
/*   {
    command: './apps/frontend',
    path: ''
  } */
];

const processes = commandsData.map((commandData) =>
  spawn(
    commandData.command.split(' ')[0],
    commandData.command.split(' ').slice(1),
    {
      cwd: commandData.path
    }
  )
);

console.log(processes);
