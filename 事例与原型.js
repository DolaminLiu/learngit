function Person(){

}
Person.prototype.name = 'haha'

var person = new Person()
person.name = 'hello'
console.log(person.name) //hello

delete person.name
console.log(person.name); //haha
