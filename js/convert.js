const myDetails = {
    name:'Tanvir',
    roll: 2343,
    age: 21,
}
const convert = JSON.stringify(myDetails);
console.log(convert);
const reves = JSON.parse(convert);
console.log(reves);