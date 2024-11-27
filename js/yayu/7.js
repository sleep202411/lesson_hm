function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.sayHello = function() {
    console.log('你好，我是' + this.name);
  };
  


  Person.prototype = {
    sayHello: function() {
        console.log(`${this.name}爱吃饭`);
        
    }
}
const person = new Person('王五', 28);
person.sayHello();