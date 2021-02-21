/**
 * Você quer obter um novo array com a mesma quantidade
 * de itens do array original mas, com cada intem transformado.
 * 
*/

const numbers = [1, 2, 3]
const squarsNumbers = numbers.map(item => item ** 2)

// mais exemplos
const tvShows = [
  { name: 'Breaking Bad', releaseYear: 2008 },
  { name: 'Mr. Robot', releaseYear: 2015 },
  { name: 'True Detective', releaseYear: 2014 },
  { name: 'Hannibal', releaseYear: 2013 },
  { name: 'The Handmid\'s Tale', releaseYear: 2017 },
  { name: 'House M.D.', releaseYear: 2004 },
  { name: 'Whatchmen', releaseYear: 2019 },
]

const showNames = tvShows.map(({ name }) => name)
console.table(showNames)