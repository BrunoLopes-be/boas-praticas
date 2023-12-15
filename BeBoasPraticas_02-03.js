const API_KEY = "YOUR_API_KEY";
const API_ENDPOINT = "https://api.example.com";

function callAPI() {
    fetch(`${API_ENDPOINT}/data?key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
callAPI();

function calculateTotal(p, q) {
    return p.reduce((total, p, index) => total + p * q[index], 0);
}

function calculate(p, q) {
    let result = 0;

    for (let i = 0; i <= p; i++) {
    result += q[i];

    }

    return result;
}

function calculateDiscount(price) {
    const PERCENTAGE_DISCOUNT = 0.1;
    
    return price - PERCENTAGE_DISCOUNT * price;
}
