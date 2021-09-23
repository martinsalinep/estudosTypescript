function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

semRetorno('Aline', 'Dora');

const pessoa = {
  nome: 'aline',
  sobrenome: 'martins',

  exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

export { pessoa };
