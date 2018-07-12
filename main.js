

function outputFunction() {
    //setting initial variables so i can change the html later on, plus i grab the value
    //that a user has entered in the input field.
    var input = document.querySelector('input').value;
    outputText = document.getElementById("outputInt");
    outputTextFloat = document.getElementById("outputFloat");
    outputTextString = document.getElementById("outputString");
    // below are some console.log statements to display in chrome. The connected one tells me that 
    //my javascript is linked properly. the input returns what the user enters so i know it's being
    //captured.
    console.log("connected");
    console.log(input)
    //this is the integer output!!
    var nonDecimal = parseInt(input);
    //parse int, this transforms the text input (remember input type is set to text), to an integer. 
    //as you can see, decimals are rounded. Text will return NaN because it's not a number.
    outputText.innerHTML = ("I'm the integer output!" + nonDecimal);

    //this is the float output!! floats use decimals e.g. 2.22 shows as 2.22
    var decimal = parseFloat(input);
    outputTextFloat.innerHTML = ("I'm the float output!" + decimal);

    //this is the string output <- the input field is type text so it's always a string!!
    outputTextString.innerHTML = ("I'm the string output!" + input);
}