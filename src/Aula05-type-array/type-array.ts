// Array<T> - T[]

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaStrings(...args: string[]): string {
  return args.join(...args);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const resultConcatenaFn = concatenaStrings('aline', 'martins');
const resultMultiplicaFn = multiplicaArgs(1, 2, 3);
const resultToUpperCaseFn = toUpperCase('a', 'b', 'c');
console.log(resultMultiplicaFn);
console.log(resultConcatenaFn);
console.log(resultToUpperCaseFn);
