/**
 * Filter
 * Baseado em uma condição você quer obter um novo array com só
 * alguns itens do array original
*/

const randomNumbers = [36, 99, 37, 63]
const numbersGreaterThan37 = randomNumbers.filter(item => item > 37)
console.log(numbersGreaterThan37)

// Mais exemplos

const tarantinoMovies = [
  { name: 'Bastardos inglórios', release: 2009 },
  { name: 'Pulp Fiction', release: 1994 },
  { name: 'Kill Bill: Volume 2', release: 2004 },
  { name: 'Quatro Quartos', release: 1995 },
  { name: 'Sin City', release: 2005 },
  { name: 'Era uma Vez em... Hollywood', release: 2019 },
  { name: 'Django Livre', release: 2012 },
  { name: 'Cães de Aluguel', release: 1992 },
  { name: 'Kill Bill: Volume 1', release: 2003 },
]


const moviesBefore2000 = tarantinoMovies.filter(({ release }) => release < 2000)


// Mais exemplos
const firstTravelerCites = [
  'Sydney',
  'Berlin',
  'Lisboa',
  'Sófia',
  'Praga',
  'Bali',
  'Florianópolis'
]

const secondTravelerCities = ['Praga', 'Roma', 'Chiang Mai', 'Lisboa', 'Zagreb']


const commonCities = firstTravelerCites.filter(city => secondTravelerCities.includes(city))

console.log(commonCities)

