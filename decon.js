let fName = "Hans", lName = "Sejesen";
console.log(`First: ${fName}, Last: ${lName}`);

[fName, lName] = [lName, fName];
console.log(`First: ${fName}, Last: ${lName}`);

function getPerson(){
    return {
      firstName: "Hans",
      lastName: "Sejesen",
      gender : "Male",
      email: "Hans@ersej.dk",
      phone: "88888",
    }
  }

  let {lastName, phone} = getPerson();  
  console.log(`Lastname: ${lastName}, Phone: ${phone}`);