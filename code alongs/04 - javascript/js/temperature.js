function runActivity() {
    function toCelsius(f) {
        let cel = ((f - 32) * 5) / 9;
        return cel;

    }

    let fah  =  Number(prompt("Give me a farenheit value"));
    console.log(fah + " in Celsius is " + toCelsius(fah));
}