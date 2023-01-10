/* 
Your task is to complete this Class, the Person class has been created. You must fill in 
the Constructor method to accept a name as string and an age as number, complete the get 
Info property and getInfo method/Info getter which should return johns age is 34
*/
// P: Takes in a string - name, and integer - age in its constructor
// R: Get info method returns a string
// E:
// let john = new Person("john", 34);
// john.info-- > "johns age is 34";
// P:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get info() {
    return `${this.name}s age is ${this.age}`;
  }
}

let john = new Person("john", 34);
console.log(john.info);
