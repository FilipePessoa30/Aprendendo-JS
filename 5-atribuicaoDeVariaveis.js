console.log("Trabalhando com atribuição de variáveis");


const idade = 29;
let nome = "Ricardo"; //let permite que a variável mude, já a const não muda
//Não é recomendado fica usando let, porque é ruim para debugar
//Recomendado usar const

const sobrenome = "Bugan";

console.log(nome,sobrenome);
console.log(nome+ " " + sobrenome);
console.log(`Meu nome é  ${nome} ${sobrenome} e tenho ${idade} anos.`);

//não fazer
//mes = "Janeiro";

let contador = 0;
contador = contador +1;

nome = nome + sobrenome;
//const nomeCompleto = nome + sobrenome;

console.log(nome);

let idadeR; //declarando variável
idadeR = 26; //atribuindo valor

idadeR = idadeR+1;
console.log(idadeR);