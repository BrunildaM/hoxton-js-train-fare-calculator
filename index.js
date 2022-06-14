let myAge = prompt ('What is your age?')
let distance = prompt ('How far are you traveling?')
let price = distance * 0.21

if (myAge < 18) {
price = price * 0.8 
} else {
    if (myAge > 65) {
        price = price * 0.6
    }
}

console.log(price)