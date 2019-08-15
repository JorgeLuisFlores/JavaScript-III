/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global (Window Binding) - 'this' points to the main window, which displays all of Javascript.

* 2. Implicit Binding - When a method is used inside an object, 'this' will refer to the Object.this.keyName
     It will produce the value that is the Object.

* 3. New Binding - An Empty object is created and referenced by 'this'. Properties and methods are inherited as a prototype.
     Then a newly created object is referenced by the end.

* 4. Explicit Binding - Forcing a function call to refer 'this' to a particular object, without putting a property function reference on the object using call, apply, and bind.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);



// Principle 2
// code example for Implicit Binding
const myInfo = {
    name: "Jorge",
    age: 26,
    sayHello: function (){
        console.log("This is implicit binding so I can use this object later", this);
        return "Hi my name is ${this.name} and I am ${this.age}";

    }

};

myInfo.sayHello();



// Principle 3
// code example for New Binding

function morePeople(object){
    this.name = object.name;
    this.age = object.age;
    this.sayHello = function(){
        console.log("This creates a new binding using my old Object", this);
        return "Hi my name is ${this.name} and I am ${this.age}";

    }

};

const ana = new morePeople({ name: "Ana", age : 24 });
const jameson = new morePeople({ name: "Jameson", age: 2 });
ana.sayHello();
jameson.sayHello();





// Principle 4
// code example for Explicit Binding
ana.sayHello.call(jameson);
jameson.sayHello.apply(ana);
// Seems like these allow const to be called using another const?