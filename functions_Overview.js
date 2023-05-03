//functions
/*function getBrand(){
    console.log("Amigoscode")
}
getBrand()
*/
const getBrand= function (brand){
    //console.log(brand)
    return {
        brand: brand,
        website :`www.${brand}.com`
    }
}
getBrand("nike")
const brand= getBrand("NIke")
console.log(JSON.stringify(brand, null,1))