"use strict";

var formulas = {
    check: function(){
        for(let i = 0; i < arguments.length; i++){
            if (arguments[i] == 0){
              return false;
          }
        }
    return true;
    },
    factorial: function(number){
        return number == 0? 1 :number * formulas.factorial(number -1 );  
    },
    simpleCombination: function(n, p){
        if(formulas.check(n, p)){
            document.getElementById("result").innerHTML = formulas.factorial(n)/(formulas.factorial(p) * formulas.factorial(n - p));
        }
        else{
            document.getElementById("result").innerHTML = "Insufficient / Wrong data!";
        }  
    },
    circle: function(ray){
        if(formulas.check(ray)){
            document.getElementById("result").innerHTML = parseFloat((Math.PI*(ray*ray)).toFixed(2));
            return;
        }
        else{
            document.getElementById("result").innerHTML = "Insufficient / Wrong data!";
            return;
        }
    },
    diamond: function(biggerDiagonal, smallerDiagonal, sideA, sideB, cosAng){
        if(formulas.check(biggerDiagonal, smallerDiagonal)){
            document.getElementById("result").innerHTML = parseFloat(((biggerDiagonal * smallerDiagonal) / 2).toFixed(2));
            return;
        }
        if(formulas.check(cosAng, sideA, sideB, smallerDiagonal)){
            document.getElementById("result").innerHTML = parseFloat(diamond((Math.sqrt(sideA*sideA + sideB*sideB - (2 * sideA * sideB * cosAng))) , smallerDiagonal)).toFixed(2);
            return;
        }
        else{
            document.getElementById("result").innerHTML = "Insufficient / Wrong data!";
            return;
        }
    },
    rectangle: function(sideA, sideB){
        if(formulas.check(sideA, sideB)){
            document.getElementById("result").innerHTML = parseFloat((sideA * sideB).toFixed(2));
            return;
        }
        else{
            document.getElementById("result").innerHTML = "Insufficient / Wrong data!";
            return;
        }
    },
    triangle: function(sideA, sideB, sideC, height, base, senAngBase){
        if(formulas.check(height, base)){
            document.getElementById("result").innerHTML = parseFloat(((height * base) / 2).toFixed(2));
            return;
        }
        if(formulas.check(sideA, sideB, sideC)){
            let p = (sideA+ sideB+sideC)/2;
            document.getElementById("result").innerHTML = parseFloat((Math.sqrt(p*(p-sideA)*(p-sideB)*(p-sideC))).toFixed(2));
            return;
        }
        if(formulas.check(sideA, sideB, senAngBase)){
            document.getElementById("result").innerHTML = parseFloat(((sideA*sideB*senAngBase) / 2).toFixed(2));
            return;
        }
        else{
            document.getElementById("result").innerHTML = "Insufficient / Wrong data!";
            return;
        }
    },
    
    trapezium: function(bigBase, smallBase, height){
        if(formulas.check(bigBase, smallBase, height)){
            document.getElementById("result").innerHTML = parseFloat(((height * (smallBase + bigBase))/2).toFixed(2));
            return;
        }
        else{
            document.getElementById("result").innerHTML = "Insufficient / Wrong data!";
            return;
        }
    },
    
    cubeVolume: function(sideA, sideB, prismHeight){
        if(formulas.check(sideA, sideB, prismHeight)){
            document.getElementById("result").innerHTML = parseFloat(((sideA * sideB * prismHeight)).toFixed(2));
            return;
        }
        else{
            document.getElementById("result").innerHTML = "Insufficient / Wrong data!";
            return;
        }
    },
    triangularVolume: function(sideA, sideB, baseHeight, prismHeight){
        if(formulas.check(sideA, prismHeight, baseHeight)){
            document.getElementById("result").innerHTML = parseFloat(((sideA*baseHeight/2)*prismHeight).toFixed(2));
            return;
        }
        else{
            document.getElementById("result").innerHTML = "Insufficient / Wrong data!";
            return;
        }
    },
    
    cilinderVolume: function(ray, height){
        if(formulas.check(ray, height)){
            document.getElementById("result").innerHTML = parseFloat((Math.PI*ray*ray*height).toFixed(2));
            return;
        }
        else{
            document.getElementById("result").innerHTML = "Insufficient / Wrong data!";
            return;
        }
    },
    
    coneVolume: function(ray, height){
        if(formulas.check(ray, height)){
            document.getElementById("result").innerHTML = parseFloat((Math.PI*ray*ray*height/3).toFixed(2));
            return;
        }
        else{
            document.getElementById("result").innerHTML = "Insufficient / Wrong data!";
            return;
        }
    },
    pyramidVolume: function (base, height, piramidHeight){
        if(formulas.check(base, height, piramidHeight) == true){
            document.getElementById("result").innerHTML = parseFloat(((base * height * piramidHeight)/6).toFixed(2));
            return;
        }
        else{
            document.getElementById("result").innerHTML = "Insufficient / Wrong data!";
            return;
        }
    },
    twoSpotsDistance: function(xA, yA, xB, yB){
        document.getElementById("result").innerHTML = parseFloat((Math.sqrt((xB - xA)*(xB - xA) + (yB - yA)*(yB - yA))).toFixed(2));
    },
    interest: function(capital, tax, time){
        if(formulas.check(capital, tax, time)){
            document.getElementById("result").innerHTML = parseFloat((capital*(Math.pow((1+(tax/100)), time)) - capital).toFixed(2));
            return;
        }
        else{
            document.getElementById("result").innerHTML = "Insufficient / Wrong data!";
            return;
        }
    },
    pythagoras: function(a, b){
        if(formulas.check(a, b)){
            document.getElementById("result").innerHTML = parseFloat((Math.sqrt(a*a + b*b)).toFixed(2));   
            return;
        }
        else{
            document.getElementById("result").innerHTML = "Insufficient / Wrong data!";
            return;
        }
    },   
    sct: function(opposite, adjacent, hypotenuse){
        if(formulas.check(opposite, adjacent, hypotenuse)){
            document.getElementById("result").innerHTML = "Sin: " + (parseFloat(((opposite/hypotenuse)).toFixed(2))) + "\nCosine: " + (parseFloat(((adjacent/hypotenuse)).toFixed(2))) + "\nTangent: " + (parseFloat(((opposite/adjacent)).toFixed(2)));
            return;
        }
        else{
            document.getElementById("result").innerHTML = "Insufficient / Wrong data!";
            return;
        }   
    }
    
}