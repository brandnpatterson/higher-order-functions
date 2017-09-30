var animals = [
  { name: 'Brandon', species: 'cat' },
  { name: 'Lauren', species: 'cat' },
  { name: 'Jared', species: 'dog' },
  { name: 'Zach', species: 'dog' },
  { name: 'David', species: 'dog' },
  { name: 'Zina', species: 'cat' }
]

// const dogs = animals.filter(a => a.species === 'dog')

// let dogs = animals.filter((animal) {
//   return animal.species === 'dog'
// })

var isDog = function(animal) {
  return animal.species === 'dog'
}

var dogs = animals.filter(isDog)
// var dogs = []
// for (var i = 0; i < animals.length; i++) {
//   if (animals[i].species === 'dog') {
//     dogs.push(animals[i])
//   }
// }

console.log(dogs)
