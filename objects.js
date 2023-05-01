var person= {
    firstName:"Houda",
    age: 25,
    isFemale: true,
    balance: 53,
    dob: new Date( 1997, 11,03).toJSON(),
    adress: {
        city:"paris",
        postCode: "95220"
    }

};
console.log(person)
console.log(person.firstName)
console.log(person.Date)
console.log(person.adress)
console.log(person.age)
console.log(person.city)
console.log(person.dob)
console.log(person.balance)
console.log(person.adress.city)
console.log(Object.values(person))
console.log(Object.keys(person))
console.log(JSON.stringify(person))
