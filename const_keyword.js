//const
/*brand ="Amigoscode"
brand={}
brand=10;
brand= function(){
    return "hello"
}
console.log(brand())*/
//on peut ecraser la variable 
// si on aimerait pas que la variable secrase il faut la laisser en constante 
const brand ="Amigoscode";
const brandObject={}
brandObject["brand"]=brand
delete brandObject.brand
console.log(brand);
console.log(brandObject)