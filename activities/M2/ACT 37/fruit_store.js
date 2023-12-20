function runActivity() {
    const fruit_names = [];
    const fruit_prices = [];

    // loop for name and price
    while (true) {
        let fruit_name = prompt("What is the name of the fruit? (0) Stop");

        if (fruit_name == 0) {
            break;
        }

        let fruit_price = Number(prompt("What is the price of the fruit?"));

        if (fruit_price >= 0) {
            fruit_names.push(fruit_name);
            fruit_prices.push(fruit_price);
        } else {
            console.error("ERROR: Cannot enter a negative price.");
        }
    }

    for (let i = 0; i < fruit_names.length; i++) {
        console.log(fruit_names[i] + " | PHP " + fruit_prices[i]);
    }

    // loop for purchase
    while (true) {
        let choice_name = prompt("What fruit would you like to buy? (0) Stop");

        if (choice_name == 0) {
            break;
        }

        let fruit_found = false;
        let total_price = 0;

        for (let i = 0; i < fruit_names.length; i++) {
            if (fruit_names[i] == choice_name) {
                fruit_found = true;

                // prompt for quantity
                let quantity = Number(prompt("How many " + choice_name + "s do you want to buy?"));

                if (quantity >= 0) {
                    // total price process
                    total_price = fruit_prices[i] * quantity;

                    // output
                    console.log("Total price: PHP " + total_price);
                } else {
                    console.error("ERROR: Cannot enter a negative quantity.");
                }

                break; 
            }
        }
        if (fruit_found == false) {
            console.error("ERROR: Fruit not found!");
        }
    }
}
