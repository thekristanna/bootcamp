function runActivity(){
    // // option 1: regular function declaration
    // function getSum(x, y){
    //     return x + y;
    // }
    // console.log(getSum(5, 6));

    // // option 2: function expression using const
    // const getSum = function (x, y) {
    //     return x + y;
    // };

    // console.log(getSum(5, 6));

    // // option 3: arrow function
    // const getSum = (x, y) => x + y;
    // console.log(getSum(5, 6));

    // //default parameters
    // function getProduct(x, y = 0){
    //     return x * y;
    // }
    // console.log(getProduct(5, 5));

    //
    // function getSum(...args) {
    //     let sum = 0;
    //     for (let i = 0; i < args.length; i ++) {
    //         sum += args[i];
    //     }
    //     return sum;
    // }
    // console.log(getSum(2, 5, 23, 67, 9, 3.2, 8));

    // //
    // console.log("daiben angelo sanchez".
    // startsWith("dai"));
    // console.log("daiben angelo sanchez".
    // endsWith("chez"));
    // console.log("DaiBen AnGeLo SanChez".toLowerCase().startsWith("dai"));

    // //
    // let x = confirm("Do you like Harry Potter?");
    // if (x) {
    //     alert("Hey! A fellow wizard!");
    // } else {
    //     alert("Muggle!")
    // }

    // //
    // let x = "AEIOU";
    // let y = Array.from(x);
    // console.log(y);

    //
    const x = [4, 9 ,16, 25, 100];
    let y  = x.find(checkNumbers);

    function checkNumbers(val){
        return val > 15;
    }
    console.log(y);

}