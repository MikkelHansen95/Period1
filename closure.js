var Counter = function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {changeBy(1);},
      decrement: function() {changeBy(-1);},
      value: function() { return privateCounter;}
    }
  };
var counter1 = Counter();
var counter2 = Counter();

counter1.increment();
counter1.increment();
console.log("Counter 1 stiger to gange = "+counter1.value());

counter2.decrement();
counter2.decrement();
console.log("Counter 2 formindskes to gange = "+counter2.value());

var Person = function() {
    var person = {
        name: "", age:"",
    } 
    return {
        setAge: function(newAge) {
            person.age = newAge;
        },
        setName: function(newName) {
            person.name = newName;
        },
        getInfo: function() { 
            return person.name + ", " + person.age; 
        }
    }
  };
var testPerson = Person();
testPerson.setName("Johan");
testPerson.setAge(10);
console.log("testPerson = "+testPerson.getInfo());