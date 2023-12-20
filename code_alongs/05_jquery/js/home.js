$(document).ready(function () {
    $("#change_button").click(function () {
        let current_name = 
            $("#profile_name").text();
        alert("The current name is " + current_name);
        let new_name = 
            prompt("Change your name to?");
        $("#profile_name").text(new_name);
    });

    $("#add_item").click(function () {
        let current_table = 
            $("#order_history").html();
        let item_name = 
            prompt("What is the item name?");
        let order_placed = 
            prompt("Date the order was placed?");
        let new_entry = 
            "<tr><td>" + item_name + "</td><td>" + order_placed + "</td></tr>";
        $("#order_history").html(current_table + new_entry);
    });

    $("#required").hide();
    $("#form_address").blur(function (){
        if ($("#form_address").val() == ""){
            $("#required").show();
        } else {
            $("#required").hide();
        }
    });

    $("#password_nonmatch").hide();
    $("#password_match").hide();
    $("#form_password_confirm").change(function () {
        if ($("#form_password").val() == $("#form_password_confirm").val()) {
            $("#password_nonmatch").hide();
            $("#password_match").show();
        } else {
            $("#password_nonmatch").show();
            $("#password_match").hide();
        }
    });

    $(".wishlist_item").click(function () {
        // let item_name =
        //     $(this).text();
        // alert(item_name);
        $(this).toggleClass("bg-warning")
    });

    $("img.painting").mouseenter(function (){
        $(this).removeClass("painting-small");
        $(this).addClass("painting-large");
        let description =  $(this).prop("alt");
        $("#painting-caption").text(description);
    });

    $("img.painting").mouseleave(function (){
        $(this).removeClass("painting-large");
        $(this).addClass("painting-small");
        $("#painting-caption").text("");
    });

    $("img.bag-preview").mouseenter(function(){
        let source = $(this).prop("src");
        $("#bag-display").prop("src", source);
    });
});