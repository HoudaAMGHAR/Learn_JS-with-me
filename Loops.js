//Louup

for(var i=1; i<=10; i++){

    console.log(i);
}

var names=["jamila",
            "houda",
            "Khaoula",
            "Samira"];


console.log()
for (var i=0; i<names.length; i++){
    console.log(names[i])
}


console.log()
for (const name of names) {
    console.log(name)
}


console.log()
names.forEach(name => {
    console.log(name)
});