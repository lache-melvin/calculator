/*
if you click an operator and then equals its bad
straight away equals?
cursor - move back and forward - 
calculator memory?
scientific mode - use my calc - q and ans on screen? - how it displays?
arrows and numbers as input?
syntax/math errors
if operator that wasn't the first operator, delete it
stretch material  - display answer as operators clicked */


var question = "";
var screen = document.getElementById('screen')
var questionScreen = document.getElementById('le-question')   

var buttonArray = document.getElementsByTagName('button')

for(var i = 0; i < buttonArray.length; i++){
    buttonArray[i].onclick = whichButton
}

function whichButton(event){
    var buttonClicked = event.target.innerHTML

    // if entering question
    if (buttonClicked !== 'AC' && buttonClicked !== 'DEL' && buttonClicked !== '=') {
        question += buttonClicked
        screen.innerHTML = ""
        questionScreen.innerHTML = question.substring(0,30)
    }
    // if clearing screen
    else if (buttonClicked === 'AC' ) {       
        question = "";
        questionScreen.innerHTML = ""
        screen.innerHTML = ""

    // if backspacing
    } else if (buttonClicked === 'DEL') {
            question = question.substr(0, question.length -1)
            questionScreen.innerHTML = question
    }

    // if clicks '='
    else {
        question = question.replace("x", "*")
        question = question.replace("÷", "/")
        var total = eval(question)

        // entries.push(tempNum)
        // var total = parseFloat(entries[0])
        // for (var i = 1; i < entries.length; i += 2) {
        //     var symbol = entries[i]
        //     var nextNum = parseFloat(entries[i+1])
        //     if (symbol === '+') {total += nextNum}
        //     else if (symbol === '-') {total -= nextNum}
        //     else if (symbol === 'x') {total *= nextNum}
        //     else if (symbol === '÷') {total /= nextNum}
        // }
        // if huge number make it x10^x
        if (total > 9999999999) {
            var power = total.toString().length - 1
            total *= Math.pow(10, power)
            total = total.toString()
            screen.innerHTML = total.substring(0,10) + "x10^" + power
        } 
        // if tiny number make it x10^-x
        else if (total < 0.000001) {
            var numArr = total.toString().split('')
            var negPower = 0;
            for (digit of numArr) {
                if (digit == 0) {
                    negPower--
                }
            }
            total = total.toString()
            screen.innerHTML = total.substring(0,10) + "x10^" + negPower 
        } 
        // if it will fit in the calculator just fine
        else {
            total = total.toString()
            screen.innerHTML = total.substring(0,10) 
        }
        question = ""
    }
}
           

