function runActivity() {
    // prompt for the number count
    let count = Number(
        prompt(
            "Enter a number from 2 to 20."
        )
    );

    // validation process
    if (count >= 2 && count <= 20) {
         // counters
         let even_count = 0;
         let odd_count = 0;
         let positive_count = 0;
         let negative_count = 0;
         let integer_count = 0;
         let decimal_count = 0;

         // output
         console.log("Number count: " + count);
         console.log("Even numbers: " + even_count);
         console.log("Odd numbers: " + odd_count);
         console.log("Positive numbers: " + positive_count);
         console.log("Negative numbers: " + negative_count);
         console.log("Integers: " + integer_count);
         console.log("Decimal numbers: " + decimal_count);
 
     } else {
         console.log("Invalid input. Please enter a number between 2 and 20.");
     }


        // counters
        let even_count = 0;
        let odd_count = 0;
        let positive_count = 0;
        let negative_count = 0;
        let integer_count = 0;
        let decimal_count = 0;

        // prompt for each number
        for (let i = 0; i < count; i++) {
            let user_input = Number(
                prompt(
                    "Give me a number."
                )
            );

            // class process
            if (user_input == 0) {

            // 0 is an integer but not even, odd, positive, or negative
                integer_count++;
            } else if (user_input % 1 == 0) {
                // integer
                integer_count++;
                if (user_input % 2 == 0) {
                    even_count++;
                } else {
                    odd_count++;
                }
            } else {
                // decimal
                decimal_count++;
            }

            if (user_input > 0) {
                positive_count++;
            } else if (user_input < 0) {
                negative_count++;
            }
        }

        // output
        console.log("Number count: " + count);
        console.log("Even numbers: " + even_count);
        console.log("Odd numbers: " + odd_count);
        console.log("Positive numbers: " + positive_count);
        console.log("Negative numbers: " + negative_count);
        console.log("Integers: " + integer_count);
        console.log("Decimal numbers: " + decimal_count);

    } else {
        console.log("Invalid input. Please enter a number between 2 and 20.");
    }
}
