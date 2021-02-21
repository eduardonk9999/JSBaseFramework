/**
 * Reduce
 * Você quer reduzir o array à algum tipo de dado
 * 
 * Sempre vamos usar o reduce para quando querermos gerar um tipo de dado que 
 * não seje um array
 * 
*/
const numbers = [1, 2, 3]

const sum = numbers.reduce((accumulator, item) => accumulator + item, 0)


// mais exemplos
const cart = [
  { name: 'Dark Souls III', price: 95.03 },
  { name: 'Shadow of the Tomb Raider', price: 101.19 },
  { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
  { name: 'Resident Evil 2', price: 119.90 },
  { name: 'Death Stranding', price: 149.99 },
]

const productList = cart.reduce((accumulator, { name }) => `${accumulator} ${name}\n`, '')
console.log(productList)


// mais exemplos

const people = [
  { id: 5, name: 'Angelica', age: 18, federativeUnit: 'Pernambuco'},
  { id: 81, name: 'Thales', age: 19, federativeUnit: 'São Paulo'},
  { id: 47, name: 'Ana Carolina', age: 18, federativeUnit: 'Alagoas'},
  { id: 87, name: 'Felipe', age: 18, federativeUnit: 'Minas Gerais'},
  { id: 9, name: 'Gabriel', age: 20, federativeUnit: 'São Paulo'},
  { id: 73, name: 'Aline', age: 19, federativeUnit: 'Brasília'},
]

const agesFrequency = people.reduce((accumulator, { age }) => {
  accumulator[age] = 1

  return accumulator
}, {}) 

console.log(agesFrequency)