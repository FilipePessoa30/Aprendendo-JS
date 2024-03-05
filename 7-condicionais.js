console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const acompanhada = true;
const temPassagemComprada = true;

console.log(`Destinos possíveis`);
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//   console.log("Comprador maior de idade");
//   listaDeDestinos.splice(1, 1); //removendo item
// } else if (acompanhada) {
//   console.log("Comprador menor de idade acompanhado");
//   listaDeDestinos.splice(1, 1); //removendo item
// } else {
//   console.log("Comprador menor de idade");
// }

if (idadeComprador >= 18 || acompanhada) {
  console.log("Boa Viagem!!");
  listaDeDestinos.splice(1, 1); //removendo item
} else {
  console.log("Comprador menor de idade");
}

console.log("Embarque: \n\n");
if (temPassagemComprada && idadeComprador >= 18) {
  console.log("Boa viagem!!");
} else {
  console.log("Você não pode embarcar");
}
