console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const acompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log(`\n Destinos possíveis`);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while (contador < 3) {
  console.log(listaDeDestinos[contador]);
  if (listaDeDestinos[contador] == destino) {
    destinoExiste = true;
    break;
  }
  contador++;
}

console.log(`Desistno existe: ${destinoExiste}`);

if (podeComprar && destinoExiste) {
  console.log("Boa viagem!!");
} else {
  console.log("Desculpe tivemos um erro!!");
}

// for (let contador = 0; cont < 3; contador += 1) {
//   if (listaDeDestinos[contador] == destino) {
//     destinoExiste = true;
//     break;
//   }
// }
