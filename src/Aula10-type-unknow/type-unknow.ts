//funciona como um any, mas mais seguro

let x: unknown;

x = 100;
x = 'aline';
x = 900;
x = '10';
const y = 800;

if (typeof x === 'number') console.log(x + y);
