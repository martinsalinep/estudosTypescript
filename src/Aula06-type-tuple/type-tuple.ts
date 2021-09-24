const dadosCliente1: [number, string] = [1, 'Aline'];
const dadosCliente2: readonly [number, string, string] = [
  1,
  'Aline',
  'Martins',
];
const dadosCliente3: [number, string, string?] = [1, 'Aline'];
const dadosCliente4: [number, string, ...string[]] = [
  1,
  'Aline',
  'Dora',
  'Bruno',
];
const dadosCliente5: ReadonlyArray<string> = ['Aline', 'Dora'];

//para adicionar ou remover itens utilizar os métodos de array, a não ser que seja readonly

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Dora';
console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);
console.log(dadosCliente5);
