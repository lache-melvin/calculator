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


var entries = [];
var screen = document.getElementById('screen')
var tempNum = "";   

var buttonArray = document.getElementsByTagName('button')

for(var i = 0; i < buttonArray.length; i++){
    buttonArray[i].onclick = whichButton
}

function whichButton(event){
    var buttonClicked = event.target.innerHTML

    // if entering number
    if (!isNaN(parseInt(buttonClicked)) || buttonClicked === '.') {
        tempNum += buttonClicked
        screen.innerHTML = tempNum.substring(0,10)
    }
    // if clearing screen
    else if (buttonClicked === 'AC' || buttonClicked === 'CE') {
        if (buttonClicked === 'AC') {
            entries = [];
        }
        tempNum = "";
        screen.innerHTML = ""
    }

    // if entering operator
    else if (buttonClicked === '+' || buttonClicked === '-' || buttonClicked === 'x' || buttonClicked === '÷') {
        entries.push(tempNum)
        entries.push(buttonClicked)
        tempNum = ""
        
    }

    // if clicks '='
    else {
        entries.push(tempNum)
        var total = parseFloat(entries[0])
        for (var i = 1; i < entries.length; i += 2) {
            var symbol = entries[i]
            var nextNum = parseFloat(entries[i+1])
            if (symbol === '+') {total += nextNum}
            else if (symbol === '-') {total -= nextNum}
            else if (symbol === 'x') {total *= nextNum}
            else if (symbol === '÷') {total /= nextNum}
        }
        
        screen.innerHTML = total
        entries = []
        tempNum = ""
    }
}


