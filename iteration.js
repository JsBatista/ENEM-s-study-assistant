var lastNumb;
var func = "none";

function presets(func){
    switch (func){
        case "combination":
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
        case "distance":
            return ["xA:", "yA:", "xB:", "yB:"];
            break;
        case "interest":
            return ["Capital:", "Tax:", "Time:"];
            break;
        case "pythagoras":
            return ["B:", "C:"];
            break;
        case "trigonometric":
            return ["Opposite Cathetus:", "Adjacent Cathetus:", "Hypotenuse:"];
            break;
    }
}
function call(par1, par2, par3, par4, par5, par6){
    switch (func){
        case "combination":
            document.getElementById("result").innerHTML = simpleCombination(par1, par2, par3, par4, par5, par6);
            break;
        case "circle":
            document.getElementById("result").innerHTML = circle(par1, par2, par3, par4, par5, par6);
            break;
        case "diamond":
            document.getElementById("result").innerHTML = diamond(par1, par2, par3, par4, par5, par6);
            break;
        case "rectangle":
            document.getElementById("result").innerHTML = rectangle(par1, par2, par3, par4, par5, par6);
            break;
        case "triangle":
            document.getElementById("result").innerHTML = triangle(par1, par2, par3, par4, par5, par6);
            break;
        case "trapezium":
            document.getElementById("result").innerHTML = trapezium(par1, par2, par3, par4, par5, par6);
            break;
        case "cubeVolume":
            document.getElementById("result").innerHTML = cubeVolume(par1, par2, par3, par4, par5, par6);
            break;
        case "triangularVolume":
            document.getElementById("result").innerHTML = triangularVolume(par1, par2, par3, par4, par5, par6);
            break;
        case "cilinderVolume":
            document.getElementById("result").innerHTML = cilinderVolume(par1, par2, par3, par4, par5, par6);
            break;
        case "coneVolume":
            document.getElementById("result").innerHTML = coneVolume(par1, par2, par3, par4, par5, par6);
            break;
        case "pyramidVolume":
            document.getElementById("result").innerHTML = pyramidVolume(par1, par2, par3, par4, par5, par6);
            break;
        case "twoSposDistance":
            document.getElementById("result").innerHTML = twoSposDistance(par1, par2, par3, par4, par5, par);
            break;
        case "interest":
            document.getElementById("result").innerHTML = interest(par1, par2, par3, par4, par5, par6);
            break;
        case "pythagoras":
            document.getElementById("result").innerHTML = pythagoras(par1, par2, par3, par4, par5, par6);
            break;
        case "trigonometric":
            document.getElementById("result").innerHTML = sct(par1, par2, par3, par4, par5, par6);
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
    document.getElementsByClassName("option")[numb].style.backgroundColor = "aquamarine";
    document.getElementById("example").style.opacity = "0.0";
    document.getElementById("inputDiv").style.opacity = "0.0";
    func = topic;
    
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
    document.getElementById("areas").style.opacity = "0.0";
    document.getElementById("volumes").style.opacity = "0.0";
    document.getElementById("areas").style.display = "none";
    document.getElementById("volumes").style.display = "none";
    document.getElementById(nav).style.display = "block";
    document.getElementsByClassName("option")[1].style.backgroundColor = "white";
    document.getElementsByClassName("option")[2].style.backgroundColor = "white";
    document.getElementsByClassName("option")[numb].style.backgroundColor = "aquamarine";
    setTimeout(function(){appear(nav)}, 300);
}
function appear(nav, numb){
    document.getElementById(nav).style.opacity = "1.0";
}

function load(){
    let images = ["combination","nothing", "nothing", "distance", "interest","pythagoras", "trigonometric", "circle", "diamond", "rectangle", "triangle", "trapezium", "cubeVolume", "triangularVolume", "cilinderVolume", "coneVolume", "pyramidVolume"];
    
    document.getElementsByClassName("option")[0].addEventListener("click", function(){ change(images[0], 0)});
    document.getElementsByClassName("option")[1].addEventListener("click", function(){ toogle("areas", 1) });
    document.getElementsByClassName("option")[2].addEventListener("click", function(){ toogle("volumes", 2) });
    
    for(let i = 3; i < images.length; i++){
        document.getElementsByClassName("option")[i].addEventListener("click", function(){ change(images[i], i) });
    }
    for(let j = 0; j < 6; j++){
        document.getElementsByClassName("input")[j].addEventListener("keyup", function(){call(document.getElementsByClassName("input")[0].value, document.getElementsByClassName("input")[1].value, document.getElementsByClassName("input")[2].value, document.getElementsByClassName("input")[3].value, document.getElementsByClassName("input")[4].value, document.getElementsByClassName("input")[5].value)})
    }
}

window.onload = load();