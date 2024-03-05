const estudante = "Caroline";
const docente = "Ana";

const cumrpimento = "nosso  lema é 'estudar bastante!'";

const citacao = `Ju diz: "nosso lema é 'estudar bastante!'"`;

console.log(cumrpimento);
console.log(citacao);

console.log("a estudante chama " + estudante);

//template string

console.log(`a estudante chama ${estudante} e a docente chama ${docente}`);
//priorizar usar esse tipo

const senha = "SenhaSegura123" + estudante.toUpperCase();

console.log(senha);
