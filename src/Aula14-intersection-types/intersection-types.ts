type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // pode ser lido como AND

const pessoa: Pessoa = { idade: 20, nome: 'aline', sobrenome: 'martins' };
console.log(pessoa);

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Intersecao = AB & AC & AD;

export { pessoa, Intersecao };
