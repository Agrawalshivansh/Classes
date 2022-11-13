// creating a class
class Person {
  constructor(name) {
    this.name = name;
  }
}
const person1 = new Person("John");
const person2 = new Person("Jack");
console.log(person1.name); // John
console.log(person2.name); // Jack

//CONSTRUCTOR
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("Hello", this.name);
  }
}
let person = new Person("John");
console.log(person.name); // John
person.greet(); // Hello John

//STATIC
class User {
  static TYPE_ADMIN = "admin";
  static TYPE_REGULAR = "regular";
  name;
  type;
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}
const admin = new User("Site Admin", User.TYPE_ADMIN);
console.log(admin.type === User.TYPE_ADMIN); //true

//INHERITANCE
class Shape {
  constructor(a) {
    this.Area = a;
  }
}
class Circle extends Shape {
  disp() {
    console.log("Area of the circle:  " + this.Area);
  }
}
var obj = new Circle(25);
obj.disp();

//A class created with a class inheritance inherits all the methods from another class:
class Car {
  constructor(brand) {
    this.name = brand;
  }
  present() {
    return "I have a " + this.name;
  }
}
class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model1 = model;
  }
  show() {
    return this.present() + ", it is a " + this.model1;
  }
}
let myCar = new Model("Chevrolet", "Camaro");
console.log(myCar.show()); // I have a Chevrolet, it is a Camaro

//Hoisting
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
var person = new Person();
person.name = "Joseph";
person.age = 30;
console.log(person);

//GETTER and SETTER
class Company {
  constructor(brand) {
    this.Compname = brand;
  }
  get name() {
    return this.Compname;
  }
  set name(a) {
    this.Compname = a;
  }
}
let myName = new Company("DXC TECHNOLOGIES");
console.log(myName);

//Weakmap
class Person {
  constructor(name) {
    let weakmap = new WeakMap();
    weakmap.set(this, { name: name });
  }
}
let Person1 = new Person("Jane");
console.log(Person1); // Person {}
console.log(Person1.name); // Undefined

//Weakset
const obj1 = { name: "John" },
  obj2 = { name: "Pete" };

const weakset = new WeakSet([obj1]);
console.log(weakset.has(obj1)); //true
console.log(weakset.has(obj2)); //false

//POLYMORPHISM
class A {
  area(x, y) {
    console.log(x * y);
  }
}
class B extends A {
  area(a, b) {
    super.area(a, b);
    console.log("Class B");
  }
}
let y = new B();
let answer = y.area(10, 20);

//ENCAPSULATION
function squareArray() {
  let x = [2, 4, 5, 7];
  function square() {
    for (let i = 0; i < x.length; ++i) {
      x[i] = x[i] * 2;
    }
    return x;
  }
  return square;
}
let y = squareArray();
let z = y();
console.log(z);
