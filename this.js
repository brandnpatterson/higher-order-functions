
myFunc = function () {
  console.log(this) // Window
}
myFunc()

const myObj = {
  speak () {
    console.log(this) // speak {}

    const local = () => {
      console.log(this) // speak {}
    }
    local()
    function global () {
      console.log(this) // Window {}
    }
    global()
  }
}
myObj.speak()



var name = 'Brandon';

function sayName () {
  console.log(name);
};
