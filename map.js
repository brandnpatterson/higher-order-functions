var animals = [
  { name: 'Brandon', species: 'cat' },
  { name: 'Lauren', species: 'cat' },
  { name: 'Jared', species: 'dog' },
  { name: 'Zach', species: 'dog' },
  { name: 'David', species: 'dog' },
  { name: 'Zina', species: 'cat' }
]

let names = animals.map(a => a.name)
// let names = animals.map((animal) => {
//   return animal.name;
// })
// let names = animals.map(function (animal) {
//   return animal.name
// })
// let names = []
// for (var i = 0; i < animals.length; i++) {
//   names.push(animals[i].name)
// }
console.log(names)
