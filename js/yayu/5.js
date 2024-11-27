// 原型？ cy
const cy = {
    playBasketball: function() {
        console.log('东里科比来了');
        
    }
}
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype = cy;

const wu = new Person('武',19);
wu.playBasketball();
console.log(wu.__proto__ === cy);
