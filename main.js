

function outputFunction() {
    var input = document.querySelector('input').value;
    outputText = document.getElementById("outputInt");
    outputTextFloat = document.getElementById("outputFloat");
    outputTextString = document.getElementById("outputString");
    console.log("connected");
    console.log(input)
    //this is the integer output!!
    var nonDecimal = parseInt(input);
    outputText.innerHTML = ("I'm the integer output!" + nonDecimal);

    //this is the float output!!
    var decimal = parseFloat(input);
    outputTextFloat.innerHTML = ("I'm the float output!" + decimal);

    //this is the string output <- the input field is type text so it's always a string!!
    outputTextString.innerHTML = ("I'm the string output!" + input);
}