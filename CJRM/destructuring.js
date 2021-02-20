// Arrays
const [numeroUm, numeroDois] = [1, 2]

// em parametros de functions
// o = 0  é para não termos returno em NaN

const sumFirstndThirdNumber = ([firstEventNumber, thirdEventNumber = 0]) => {
  return firstEventNumber + thirdEventNumber
}



// Objetos
const dogs = {
  name: 'Ellie',
  breed: 'Corgi',
  age: 4
}

const { name, breed } = dogs
console.log( name, breed)


// objetos com mais niveis

const cities = {
  paris: {
    country: 'France',
    language: 'French'
  },
  stockholm: {
    country: 'Sheden',
    language: 'Shedish'
  }
}

const { paris, stockholm: { country } } = cities;
console.log(country)
