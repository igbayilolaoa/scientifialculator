function key(x){
    document.getElementById("secDisplay").innerHTML = document.getElementById("secDisplay").innerHTML += x;
}

function brac1(){
    document.getElementById("secDisplay").innerHTML = document.getElementById("secDisplay").innerHTML +=  document.getElementById("brak1").innerHTML;
}

function brac2(){
    document.getElementById("secDisplay").innerHTML = document.getElementById("secDisplay").innerHTML +=  document.getElementById("brak2").innerHTML;
}

function Sin(){
    var x = document.getElementById("secDisplay").innerHTML;
    document.getElementById("priDisplay").innerHTML = Math.sin(x);
}

function Tan(){
    var x = document.getElementById("secDisplay").innerHTML;
    document.getElementById("priDisplay").innerHTML = Math.tan(x);
}

function Cos(){
    var x = document.getElementById("secDisplay").innerHTML;
    document.getElementById("priDisplay").innerHTML = Math.cos(x);
}

function sqrt(){
    var x = document.getElementById("secDisplay").innerHTML;
    document.getElementById("priDisplay").innerHTML = Math.sqrt(x);
}

function log(){
    var x = document.getElementById("secDisplay").innerHTML;
    document.getElementById("priDisplay").innerHTML = Math.log(x);
}

function pi(){
    var x = document.getElementById("secDisplay").innerHTML;
    document.getElementById("priDisplay").innerHTML = Math.PI * x;
}

function calculate(){
    document.getElementById("priDisplay").innerHTML = document.getElementById("secDisplay").innerHTML;
    document.getElementById("secDisplay").innerHTML = eval(document.getElementById("secDisplay").innerHTML);
}

function Clear(){
    document.getElementById("priDisplay").innerHTML = "";
    document.getElementById("secDisplay").innerHTML = "";
}