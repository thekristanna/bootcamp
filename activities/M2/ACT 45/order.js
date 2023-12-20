$(document).ready(function () {
    // ordering system
    const menu_prices = {
        burger: 60,
        steak: 80,
        fries: 50,
        salad: 70,
        sprite: 25,
        icecream: 25,
    };
    const menu_names = {
        burger: "Burger",
        steak: "Steak",
        fries: "Fries",
        salad: "Salad",
        sprite: "Sprite",
        icecream: "Ice Cream",
    };
    let total_price = 0;

    // table update
    function update_table(item, amount, price) {

        const table_body = $("#food-table-list");
        const add_row = "<tr>" +
        "<td>" + menu_names[item] + "</td>" +
        "<td>" + amount + "</td>" +
        "<td>₱" + price + "</td>" +
        "</tr>";

        table_body.html(table_body.html() + add_row);
    }

    // price update
    function updated_price() {
        const total_price_element = $("#food-table-total");
        total_price_element.text(total_price);
    }

    // order
    $("#food-order").submit(function (x) {
        const selected_item = $("#food-select").val();
        const amount = +$("#food-amount").val();

        // process
        if (selected_item && amount > 0) {
            const price = menu_prices[selected_item] * amount;
            total_price += price;

            //output
            update_table(selected_item, amount, price);
            updated_price();
        }

    x.preventDefault();
    });

    // advanced checkbox
    $("#get_all").change(function () {
        $(".sauce").prop("checked", $(this).prop("checked"));
    });

    $(".sauce").change(function () {
        if (!$(this).prop("checked") && $("#get_all").prop("checked")) {
            $("#get_all").prop("checked", false);
        }
    });
});
