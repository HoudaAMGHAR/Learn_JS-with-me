const getBrand= (brand)=>({
    
        brand: brand,
        website :`www.${brand.toLowerCase()}.com`
    }
)
getBrand("nike")
const brand= getBrand("NIke")
console.log(JSON.stringify(brand, null,1))


const add=(a,b)=>a+b;
/*function add(a,b){
    return a+b
}
console.log(add(3,4))*/
