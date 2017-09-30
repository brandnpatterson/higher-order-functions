var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]

// var totalAmounts = orders.reduce((sum, o) => sum + o.amount, 0)

// var totalAmounts = orders.reduce((sum, order) => {
//   return sum + order.amount
// }, 0)

var totalAmounts = 0
for (var i = 0; i < orders.length; i++) {
  totalAmounts += orders[i].amount
}
console.log(totalAmounts)
