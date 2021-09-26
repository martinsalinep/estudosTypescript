enum Cores {
  VERMELHO = 1, //por padrão seria 0
  AZUL = 'AZUL', //por padrão seria 1
  AMARELO = 0, //por padrão seria 2
}

console.log(Cores);
console.log(Cores[3]);
console.log(Cores['AZUL']);
console.log(Cores.VERMELHO); // retorna 0 se for o padrão

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(1234); //cuidar, pois enum permite colocar qualquer coisa sem que haja erro
