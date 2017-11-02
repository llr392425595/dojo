let readline = require('readline');
let beersong = require('./lib/beersong');
let r1 = readline.createInterface(process.stdin, process.stdout);

r1.setPrompt('<----------输入不同的数字会出现不同的歌词---------->\n请输入一个数字:');
r1.prompt();
r1.on('line', (line) => {
  if (line === 'e') {
    r1.close();
  } else {
    console.log('歌词为: ' + beersong(line - 0) + '\n退出请按E,继续请输入数字: ');
  }
});

r1.on('close', function () {
  console.log('<-------欢迎下次再来!-------->');
  process.exit(0);
});

