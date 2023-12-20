function runActivity() {
    const fruit_names = [];
    const fruit_prices = [];
  
    while (true) {
        let fruit_name = prompt("Give me a fruit name [0 to Stop]");
        if (fruit_name == '0') {
            break;
        }

        let fruit_price = Number(prompt("What is the price of 1 " + fruit_name + "?"));


        if (fruit_price >= 0) {
    
            fruit_names.push(fruit_name);
            fruit_prices.push(fruit_price);
        } else {
            console.log("Error: Invalid input for " + fruit_name + ". Please enter a non-negative price.");
        }
    }

    for (let i = 0; i < fruit_names.length; i++) {
        console.log(fruit_names[i] + " | PHP " + fruit_prices[i]);
    }
}

