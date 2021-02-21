// Spread ... 

// Ex:
const numbers = [71, 97, 53]
console.log(
  Math.max(...numbers) // com o soread estamos espalhando os itens do array aqui, separadamente.
)



// Copiando mais itens
const myTopTwoSerires = ['Breaking Bad', 'True Detective']

const dramaSeries = [
  `The Handmaid's Tale`,
  ...myTopTwoSerires,

]

// Objetos
const person = { name; 'Roger Melo' }
const address = {
  city: 'Goiânia',
  state: 'Goiás'
}

const roger = {
  ...person,
  ...address,
  country: 'Brasil'
}

