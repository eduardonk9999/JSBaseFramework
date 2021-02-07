/**
 * A sintaxe de atribuição via desestruturação (destructuring assignment)
 * é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis
 * distintas.
 * 
 * OBS = o array nao vai ser alterado.
*/

// Array

let x = [1, 2, 3, 4, 5]

let [y, z] = x;

console.log(y, z)
console.log(x)

// Atribuindo o resto de um array para uma variável
let [a, ...b] = [1, 2, 3]


// Desestruturação de Objeto
let GuidetotheGalaxy = {
  answer: 42,
  character: 'Arthur Dent'
}

let {answer, character} = GuidetotheGalaxy

console.log(answer, character)

let o = {p: 42, q: true};
let {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true