const estaAprovado = true;

if (estaAprovado === true) {
  console.log("aprovado");
}

if ("0" == 0) {
  console.log("passou na comparação");
} else {
  console.log("não passou na comparação");
}

if ("0" === 0) {
  console.log("passou na comparação");
} else {
  console.log("não passou na comparação");
}

const idadeMinima = 18;
const idadeEstudante = 16;

if (idadeEstudante >= idadeMinima) {
  console.log("Não precisa de autorização dos pais");
} else {
  console.log("Precisa de autorização dos pais");
}
