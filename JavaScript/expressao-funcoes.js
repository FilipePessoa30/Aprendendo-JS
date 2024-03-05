const estudanteReprovou = function estudanteReprovou(notaFinal, faltas) {
  if (notaFinal < 7 && faltas > 4) {
    return true;
  } else {
    return false;
  }
};

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));

//funções declaradas são chamadas de hoisting, e só podem ser declaradas depois da constante
//funções expressas são chamadas de function expression, e podem ser declaradas em qualquer lugar do código
