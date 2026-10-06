console.log("Hello, World!");

const sal = "sal";
const arroz = "arroz";
const precoSal = 2;
const precoArroz = 12;

function calculateTotal(precoSal, precoArroz) {
    return precoSal + precoArroz;
}

const total = calculateTotal(precoSal, precoArroz);

console.log("Sal: " + sal);
console.log("Arroz: " + arroz);
console.log("Preço do Total: R$ " + total);
