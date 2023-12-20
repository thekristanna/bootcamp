function runActivity() {
    const fruit_names = [];
    const fruit_prices = [];
    const fruit_stocks = [];
  
    // function: add item
    function addItem() {
        let fruit_name = prompt("What is the name of the fruit?");
        let fruit_price = Number(prompt("What is the price of the fruit?"));

        // process
        if (fruit_price >= 0) {
            fruit_names.push(fruit_name);
            fruit_prices.push(fruit_price);
            fruit_stocks.push(0); 
            // output
            console.log(fruit_name + " added as item for sale. Each " + fruit_name + " sells for " + fruit_price + ". Stock set to 0.");
        } else {
            console.error("ERROR: Invalid price! Enter a positive value.");
        }
    }

    // function: restock
    function restock() {
        let choice = prompt("What would you like to add stock to?");
        let fruit_found = false;

        //process
        for (let i = 0; i < fruit_names.length; i++) {
            if (fruit_names[i] == choice) {
                fruit_found = true;
                let additional_stock = Number(prompt("How may of " + choice + " would you like to add to stock?"));
                if (additional_stock >= 0) {
                    fruit_stocks[i] += additional_stock;
                    // ouput
                    console.log(additional_stock + " stock has been added to " + choice + ". New stock: " + fruit_stocks[i]);
                } else {
                    console.error("ERROR: Invalid stock amount! Enter a non-negative value.");
                }
            }
        }

        if (fruit_found == false) {
            console.error("ERROR: Fruit was not found.");
        }
    }

    // function: check price
    function checkPrice() {
        let choice = prompt("What item would you like to check the price of?");
        let fruit_found = false;

        // process
        for (let i = 0; i < fruit_names.length; i++) {
            if (fruit_names[i] == choice) {
                fruit_found = true;
                let amount_check = Number(prompt("How many " + choice + " would you like to check the price of?"));
                if (amount_check >= 0) {
                    let total_price = amount_check * fruit_prices[i];
                    // ouput
                    console.log(amount_check + " of " + choice + " is worth " + total_price);
                } else {
                    console.error("ERROR: Invalid amount! Enter a non-negative value.");
                }
            }
        }

        if (fruit_found == false) {
            console.error("ERROR: Fruit was not found.");
        }
    }

  
    // function: sell
    function sell() {
        let choice_name = prompt("What item would you like to sell?");
        let fruit_found = false;

        // process
        for (let i = 0; i < fruit_names.length; i++) {
            if (fruit_names[i] == choice_name) {
                fruit_found = true;
                let amount = Number(prompt("How many " + choice_name + " would you like to sell?"));
                if (amount >= 0 && amount <= fruit_stocks[i]) {
                    let total = amount * fruit_prices[i];
                    fruit_stocks[i] -= amount;
                    // output
                    console.log(amount + " of " + choice_name + " sold for " + total + ". New stock: " + fruit_stocks[i]);
                } else if (amount < 0) {
                    console.error("ERROR: Can not have a negative amount.");
                } else {
                    console.error("ERROR: Not enough stock of " + choice_name + "!");
                }
            }
        }
        if (fruit_found == false) {
        console.error("ERROR: Fruit was not found.");
        }
    }

    // alert
    alert("The Fruit Shoppe");
    let i = 0;
    while (i == 0) {
      let choice = Number(
        prompt("(1) Add new items (2) Restock (3) Check price (4) Sell (5) Stop")
      );
      switch (choice) {
        case 1:
          addItem();
          break;
        case 2:
          restock();
          break;
        case 3:
          checkPrice();
          break;
        case 4:
          sell();
          break;
        case 5:
          i = 1;
          break;
        default:
          console.error("ERROR: Enter one of the choices.");
      }
    }
  }