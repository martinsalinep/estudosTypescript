/* eslint-disable */

//Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'aline';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
//let big: bigint = 10n;

//Arrays
let arraysdeNumeros: Array<number> = [1, 2, 3];
let arraysdestrings: string[] = ['1', '2', '3'];

//Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 32,
  nome: 'Aline',
  adulto: true,
};

//Funções
function soma(x: number, y: number): number {
  return x + y;
}

const result = soma(2, 6);

const soma2: (x: number, y: number) => number = (x, y) => x + y;
