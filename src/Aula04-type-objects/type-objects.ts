const objetoA = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};

objetoA.chaveA = 'outro valor';
//objetoA.chaveC = 'nova chave'; não funciona

const objetoB: {
  chaveA: string;
  readonly chaveB: string; // não pode ser mais alterada
  chaveC?: string;
  [key: string]: unknown; // não muito utilizado
} = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};

objetoB.chaveD = 'nova chave';

console.log(objetoB);
