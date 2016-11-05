var lastNumb;
var areaToogle = false;
var volumeToogle = false;
var func = "none";

function presets(func){
    switch (func){
        case "simpleCombination":
            return ["N:", "P:"];
            break;
        case "circle":
            return ["Ray:"];
            break;
        case "diamond":
            return ["Bigger Diagonal:", "Smaller Diagonal:", "Side AB:", "Side BC:", "Angle Cosine:"];
            break;
        case "rectangle":
            return ["Side A:", "Side B:"];
            break;
        case "triangle":
            return ["Side A:", "Side B:", "Side C:", "Height:", "Base:", "Base's Angle Sin:"];
            break;
        case "trapezium":
            return ["Bigger Base:", "Smaller Base:", "Height:"];
            break;
        case "cubeVolume":
            return ["Side A:", "Side B:","Height:"];
            break;
        case "triangularVolume":
            return ["Side A:", "Side B:","Base Height:", "Prism Height:"];
            break;
        case "cilinderVolume":
            return ["Ray:", "Height:"];
            break;
        case "coneVolume":
            return ["Ray:", "Height:"];
            break;
        case "pyramidVolume":
            return ["Base:", "Base Height:","Prism Height:"];
            break;
        case "twoSpotsDistance":
            return ["xA:", "yA:", "xB:", "yB:"];
            break;
        case "interest":
            return ["Capital:", "Tax:", "Time:"];
            break;
        case "pythagoras":
            return ["B:", "C:"];
            break;
        case "sct":
            return ["Opposite Cathetus:", "Adjacent Cathetus:", "Hypotenuse:"];
            break;
    }
}

function change(topic, numb){
    if(lastNumb != undefined){
        document.getElementsByClassName("option")[lastNumb].style.backgroundColor = "white";
        lastNumb = numb;
    }
    else{
        lastNumb = numb;
    }
    if(numb < 6){
        disappear();
    }
    document.getElementsByClassName("option")[numb].style.backgroundColor = "aquamarine";
    document.getElementById("example").style.opacity = "0.0";
    document.getElementById("inputDiv").style.opacity = "0.0";
    func = topic;
    reload();
    setTimeout(function(){fadeIn(topic)}, 300);
}

function fadeIn(topic){
    let preset = presets(topic);
    for(let i = 0; i < 6; i++){
        if(preset[i] != undefined){
            document.getElementsByClassName("input")[i].style.opacity = "1.0";
            document.getElementsByClassName("textInput")[i].innerHTML = preset[i];
        }
        else{
            document.getElementsByClassName("input")[i].style.opacity = "0.0";
            document.getElementsByClassName("textInput")[i].innerHTML = "";
        }
    }
    for(let i = 0; i < 6; i++){
        document.getElementsByClassName("input")[i].value = "";
    }
    document.getElementById("result").innerHTML = "Your Result Here!";
    document.getElementById("example").src = "images/" + topic + ".png"; 
    document.getElementById("example").style.opacity = "1.0";
    document.getElementById("inputDiv").style.opacity = "1.0";
    document.getElementById("inputDiv").style.display = "block";
}

function toogle(nav, numb){
    if(lastNumb != undefined){
        document.getElementsByClassName("option")[lastNumb].style.backgroundColor = "white";
    }
    areaToogle = false;
    volumeToogle = false;
    numb == 1? areaToogle = true : volumeToogle = true;
    disappear();
    document.getElementById(nav).style.display = "block";
    document.getElementsByClassName("option")[1].style.backgroundColor = "white";
    document.getElementsByClassName("option")[2].style.backgroundColor = "white";
    document.getElementsByClassName("option")[numb].style.backgroundColor = "aquamarine";
    setTimeout(function(){appear(nav)}, 300);
}
function appear(nav, numb){
    document.getElementById(nav).style.opacity = "1.0";
}

function disappear(){
    document.getElementById("areas").style.opacity = "0.0";
    document.getElementById("volumes").style.opacity = "0.0";
    document.getElementById("areas").style.display = "none";
    document.getElementById("volumes").style.display = "none";
    document.getElementsByClassName("option")[1].style.backgroundColor = "white";
    document.getElementsByClassName("option")[2].style.backgroundColor = "white";
}

function load(){
    let images = ["simpleCombination","nothing", "nothing", "twoSpotsDistance", "interest","pythagoras", "sct", "circle", "diamond", "rectangle", "triangle", "trapezium", "cubeVolume", "triangularVolume", "cilinderVolume", "coneVolume", "pyramidVolume"];
    
    
    document.getElementsByClassName("option")[0].addEventListener("click", function(){ change(images[0], 0)});
    document.getElementsByClassName("option")[1].addEventListener("click", function(){ toogle("areas", 1) });
    document.getElementsByClassName("option")[2].addEventListener("click", function(){ toogle("volumes", 2) });
    
    for(let i = 3; i < images.length; i++){
        document.getElementsByClassName("option")[i].addEventListener("click", function(){ change(images[i], i) });
    }
    
}

function reload(){ 
    for(let j = 0; j < 6; j++){
        document.getElementsByClassName("input")[j].addEventListener("keyup", function(){formulas[func](document.getElementsByClassName("input")[0].value*1, document.getElementsByClassName("input")[1].value*1, document.getElementsByClassName("input")[2].value*1, document.getElementsByClassName("input")[3].value*1, document.getElementsByClassName("input")[4].value*1, document.getElementsByClassName("input")[5].value*1)})
    }
}

window.onload = load();