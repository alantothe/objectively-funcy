// Your code here.
//1
function getFirstName(person){
  return person.firstName;
}

console.log (getFirstName({firstName : 'Colin', lastName: 'Jaffe'}))
console.log (getFirstName({firstName : 'Petra', lastName: 'Solano'}))
//2 
function getLastName(person){
  return person.lastName;
}

console.log(getLastName({firstName: 'Colin', lastName: 'Jaffe'})) // -> 'Jaffe'`
console.log(getLastName({firstName: 'Petra', lastName: 'Solano'})) // -> 'Petra'`
//3
function getFullName(person){
  return `${person.firstName} ${person.lastName}`
}

console.log (getFullName({firstName: 'Colin', lastName: 'Jaffe'})) // -> 'Colin Jaffe'`
console.log (getFullName({firstName: 'Petra', lastName: 'Solano'})) // -> 'Petra Solano'`

//4

function setFirstName(person, newFirstName){
  person.firstName = newFirstName;
 }

let person1 = {firstName: 'Colin', lastName: 'Jaffe'}
let person2 = {firstName: 'Petra', lastName: 'Solano'}

setFirstName(person1, 'Redacted');
setFirstName(person2, 'Redacted');

//5
function setAge(person, newAge){
  person.age = newAge

}
let person11 = {firstName: 'Colin', lastName: 'Jaffe', age: 39}
let person22 = {firstName: 'Petra', lastName: 'Solano', age: 29}

setAge({firstName: 'Colin', lastName: 'Jaffe', age: 39}, 45) // -> {firstName: 'Colin', lastName: 'Jaffe', age: 45}`
setAge({firstName: 'Petra', lastName: 'Solano', age: 29}, 35) // -> {firstName: 'Petra', lastName: 'Solano', age: 35}`

//6

function giveBirthday (person){
   if(person.age === undefined){ // undefined does not exist
  person.age = 1;}

   else {
  person.age = person.age + 1
 }
}

let person111 = giveBirthday({firstName: 'Colin', lastName: 'Jaffe', age: 39}) // -> {firstName: 'Colin', lastName: 'Jaffe', age: 40}`
let person222 = giveBirthday({firstName: 'Petra', lastName: 'Solano', age: 29}) // -> {firstName: 'Solano', lastName: 'Solano', age: 30}`
let person333 = giveBirthday({firstName: 'Baby', lastName: 'Jaffe'}) // -> {firstName: 'Baby', lastName: 'Jaffe', age: 1}

console.log(person111)
console.log(person222)
console.log(person333)
//7

function marry (person, person2){
  if (person.married === false && person2.married === false ){
    person.married = true
    person2.married = true
    person1111.spouseName = 'Petra Solano'
    person2222.spouseName = 'Colin Jaffe'
  }
  
}

let person1111 = {firstName: 'Colin', lastName: 'Jaffe', married: false}
let person2222 = {firstName: 'Petra', lastName: 'Solano', married: false}

marry(person1111, person2222)

console.log(person1111)
console.log(person2222)

//8

function divorce (person, person2) {

if (person.married === true && person2.married === true ){
  person.married = false
  person2.married = false

  delete person.spouseName;
  delete person2.spouseName;
}
}
divorce(person1111, person2222)

console.log(person1111)
console.log(person2222)







// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
