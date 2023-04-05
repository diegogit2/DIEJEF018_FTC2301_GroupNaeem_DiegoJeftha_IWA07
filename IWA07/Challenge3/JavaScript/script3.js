const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

// const owed = parseInt('R' + leoBalance + sarahBalance)
// const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"
// const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"
// const total = "Total amount owed: "
// const result = leo + sarah + divider + divider + total + owed + divider

const owed = (parseFloat(leoBalance) + parseFloat(sarahBalance)).toFixed(2);
const leo = `${leoName}  ${leoSurname}  (Owed:  R ${(leoBalance * - 1).toFixed(2)})\n `;
const sarah = `${sarahName}  ${sarahSurname}  (Owed: R ${(sarahBalance * - 1).toFixed(2)})\n \n`;
const total = `\nTotal amount owed: R ${(owed * - 1).toFixed(2)}\n`;
const result = leo + sarah + divider + total + divider;

console.log(result)



// Leo Musvaire (Owed: R 9394.00)
// Sarah Kleinhans (Owed: R 4582.20)

// ----------------------------------
//   Total amount owed: R 14 976.20
// ----------------------------------