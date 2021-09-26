let x = 10; //eslint-disable-line
x = 0b101010;
const y = 10;
//let a: 100 = 100; //eslint-disable-line
//a = 120;
let a = 100 as const; //eslint-disable-line

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
