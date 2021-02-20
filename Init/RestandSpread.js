// Rest
/**
 * Rest, nos permite representar um número indefinido de argumentos como um array
*/


//EX:
// um exemplo simples, de ir armazenando a quantitade de itens
function fun1(...theArgs){
  console.log(theArgs.length)
}
fun1() // 0
fun1(5) // 1
fun1(5, 6, 7) // 3


// Multiplicando o primeiro valor passado por parametro pelo o segundo
function multiply(multipler, ...args){
  return args.map(function(element){
    return multipler * element
  })
}

let arr = multiply(2, 2, 3, 5)
console.log(arr)


// Spread
/**
 * Permite que um objeto literável,como um array ou string,
 * seja expandida em locais onde zero ou mais argumentos
 * (para chamadas de função) ou elementos (para literais de array)
 * sejam esperados ou uma expressão de objeto seja expandida em locais
 * onde zero ou mais pares de chave-valor (para literais de objeto) são
 * esperados.
*/

// Ex
let partes = ['ombros', 'joelhos']
let corpo = ['cabeça', ...partes]

let arr1 = [0, 1, 2]
let arr2 = [3, 4, 5]

arr.push(...arr2)

