// CALCULATOR :)

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