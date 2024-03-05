console.log(`Trabalhando com listas`);

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;
console.log(`Destinos possíveis`);
console.log(salvador,saoPaulo,rioDeJaneiro);

//Array é uma lista de dados

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
listaDeDestinos.push(`Curitiba`) //adicionar um elemento no array
console.log(`Destinos possíveis`);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);