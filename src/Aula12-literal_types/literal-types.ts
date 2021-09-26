/* eslint-disable @typescript-eslint/no-unused-vars */
let x = 10;
x = 0b101010;
const y = 10;
//let a: 100 = 100;
//a = 120;
//let a = 100 as const;

const person = {
  nome: 'aline' as const,
  sobrenome: 'martins',
};

//person.nome = 'dora'; // não pode ser atribuido

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

//console.log(escolhaCor('')); // erro
console.log(escolhaCor('Vermelho'));

//Module mode
export default 1;
