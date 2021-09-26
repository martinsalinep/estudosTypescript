//nunca retorna nada
export function criaErro(): never {
  throw new Error('Erro');
}

criaErro();
