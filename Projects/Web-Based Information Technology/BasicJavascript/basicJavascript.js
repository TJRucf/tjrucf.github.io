function tickUp(){
    let counter = document.getElementById("counter").innerHTML;
    counter = parseInt(counter);
    counter++;
    document.getElementById("counter").innerHTML = counter;
}

function tickDown(){
    let counter = document.getElementById("counter").innerHTML;
    counter = parseInt(counter);
    counter--;
    document.getElementById("counter").innerHTML = counter;
}

function runForLoop(){
    let forLoopOut = "";
    let counter = document.getElementById("counter").innerHTML;
    for(let i = 0; i <= counter; i++){
        forLoopOut += i + " ";
        document.getElementById("forLoopResult").innerHTML = forLoopOut;
    }
}

function showOddNumbers(){
    let showOdds = "";
    let counter = document.getElementById("counter").innerHTML;
    counter = parseInt(counter);
    for(let i = 0; i <= counter; i++){
        if(i % 2 !== 0){
            showOdds += i + " ";
            document.getElementById("oddNumberResult").innerHTML = showOdds;
        }
    }
}

function addMultiplesToArray(){
    let array = [];
    let counter = document.getElementById("counter").innerHTML;
    counter = parseInt(counter);
    for(let i = counter; i >= 0; i--) {
        if(i % 5 === 0){
            array.push(i);
        }
    }
    console.log(array);
}

function printCarObject(){
    let car = {
        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value
    }
    console.log(car);
}

function loadCar(num){
    if(num === 1){
        document.getElementById("carType").value = carObject1.cType;
        document.getElementById("carMPG").value = carObject1.cMPG;
        document.getElementById("carColor").value = carObject1.cColor;
    }
    if(num === 2){
        document.getElementById("carType").value = carObject2.cType;
        document.getElementById("carMPG").value = carObject2.cMPG;
        document.getElementById("carColor").value = carObject2.cColor;
    }
    if(num === 3){
        document.getElementById("carType").value = carObject3.cType;
        document.getElementById("carMPG").value = carObject3.cMPG;
        document.getElementById("carColor").value = carObject3.cColor;
    }
}

function changeColor(num){
    if(num === 1){
        document.getElementById("styleParagraph").style.color = "red";
    }
    if(num === 2){
        document.getElementById("styleParagraph").style.color = "green";
    }
    if(num === 3){
        document.getElementById("styleParagraph").style.color = "blue";
    }
}

