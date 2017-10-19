var controlData = {
    lastNumb: undefined,
    areaToogle: false,
    volumeToogle: false,
    func: undefined,
    presets: {
        simpleCombination: ["N:", "P:"],
        circle: ["Ray:"],
        diamond: ["Bigger Diagonal:", "Smaller Diagonal:", "Side AB:", "Side BC:", "Angle Cosine:"],
        rectangle: ["Side A:", "Side B:"],
        triangle: ["Side A:", "Side B:", "Side C:", "Height:", "Base:", "Base's Angle Sin:"],
        trapezium: ["Bigger Base:", "Smaller Base:", "Height:"],
        cubeVolume: ["Side A:", "Side B:","Height:"],
        triangularVolume: ["Side A:", "Side B:","Base Height:", "Prism Height:"],
        cilinderVolume: ["Ray:", "Height:"],
        coneVolume: ["Ray:", "Height:"],
        pyramidVolume: ["Base:", "Base Height:","Prism Height:"],
        twoSpotsDistance: ["xA:", "yA:", "xB:", "yB:"],
        interest: ["Capital:", "Tax:", "Time:"],
        pythagoras: ["B:", "C:"],
        sct: ["Opposite Cathetus:", "Adjacent Cathetus:", "Hypotenuse:"],
    },
}

function change(topic, numb){
    if(controlData.lastNumb != undefined){
        document.getElementsByClassName("option")[controlData.lastNumb].style.backgroundColor = "white";
        controlData.lastNumb = numb;
    }
    else{
        controlData.lastNumb = numb;
    }
    if(numb < 6){
        disappear();
    }
    document.getElementsByClassName("option")[numb].style.backgroundColor = "aquamarine";
    document.getElementById("example").style.opacity = "0.0";
    document.getElementById("inputDiv").style.opacity = "0.0";
    controlData.func = topic;
    setTimeout(function(){fadeIn(topic)}, 300);
}

function fadeIn(topic){
    let preset = controlData.presets[topic];
    for(let i = 0; i < 6; i++){
        if(controlData.presets[topic][i] != undefined){
            document.getElementsByClassName("input")[i].style.opacity = "1.0";
            document.getElementsByClassName("textInput")[i].innerHTML = controlData.presets[topic][i];
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
    document.getElementById("example").src = "img/" + topic + ".png"; 
    document.getElementById("example").style.opacity = "1.0";
    document.getElementById("inputDiv").style.opacity = "1.0";
    document.getElementById("inputDiv").style.display = "block";
}

function toogle(nav, numb){
    if(controlData.lastNumb != undefined){
        document.getElementsByClassName("option")[controlData.lastNumb].style.backgroundColor = "white";
    }
    controlData.areaTogle = false;
    controlData.volumeToogle = false;
    numb == 1? controlData.areaTogle = true : controlData.volumeToogle = true;
    disappear();
    document.getElementById(nav).style.display = "block";
    document.getElementsByClassName("option")[1].style.backgroundColor = "white";
    document.getElementsByClassName("option")[2].style.backgroundColor = "white";
    document.getElementsByClassName("option")[numb].style.backgroundColor = "aquamarine";
    setTimeout(function(){appear(nav)}, 300);
}
function appear(nav){
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
    for(let j = 0; j < 6; j++){
        document.getElementsByClassName("input")[j].addEventListener("keyup", function(){call()});
    }
}

function call(){
    let result = formulas[controlData.func](document.getElementsByClassName("input")[0].value, document.getElementsByClassName("input")[1].value, document.getElementsByClassName("input")[2].value, document.getElementsByClassName("input")[3].value, document.getElementsByClassName("input")[4].value, document.getElementsByClassName("input")[5].value);
    if(isNaN(result)){
        document.getElementById("result").innerHTML = "Insufficient / Wrong data!";
    }
    else if(typeof result == 'number'){
        document.getElementById("result").innerHTML = result;
    }
}

window.onload = load();