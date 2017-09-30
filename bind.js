var myObj = {
  num: 1
}

var addToObjectValue = function (a, b, c) {
  return this.num + a + b + c;
}

// bind the new this paramter to an oject to be used later
// bind --- returns a new function that can be called
var bind = addToObjectValue.bind(myObj, 1, 1 ,9);

console.log(bind());

let dog = {
  sound: 'woof',
  talk: function () {
    console.log(this.sound)
  }
}

let cat = {
  sound: 'meow'
}

dog.talk()

let talkFunction = dog.talk

let boundFunction = talkFunction.bind(cat)

boundFunction()

// // passing "this" around
// // bind explicitely sets "this" to an object
// let talk = function () {
//   console.log(this.sound);
// }
//
// let boromir = {
//   sound: 'One does not simply walk into Mordor!'
// }
// boromir.blabber = talk.bind(boromir);
//
// let gollum = {
//   jabber: boromir.blabber,
//   sound: 'My precious!'
// }
//
// gollum.jabber();
//
// let blabber = boromir.blabber;
// blabber();
// talk();
