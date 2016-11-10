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
            return formulas.factorial(n)/(formulas.factorial(p) * formulas.factorial(n - p));
        }
        else{
            return "Insufficient / Wrong data!";
        }  
    },
    circle: function(ray){
        if(formulas.check(ray)){
            return parseFloat((Math.PI*(ray*ray)).toFixed(2));
        }
        else{
            return "Insufficient / Wrong data!";
        }
    },
    diamond: function(biggerDiagonal, smallerDiagonal, sideA, sideB, cosAng){
        if(formulas.check(biggerDiagonal, smallerDiagonal)){
            return parseFloat(((biggerDiagonal * smallerDiagonal) / 2).toFixed(2));
        }
        if(formulas.check(cosAng, sideA, sideB, smallerDiagonal)){
            return parseFloat(diamond((Math.sqrt(sideA*sideA + sideB*sideB - (2 * sideA * sideB * cosAng))) , smallerDiagonal)).toFixed(2);
        }
        else{
            return "Insufficient / Wrong data!";
        }
    },
    rectangle: function(sideA, sideB){
        if(formulas.check(sideA, sideB)){
            return parseFloat((sideA * sideB).toFixed(2));
        }
        else{
            return "Insufficient / Wrong data!";
        }
    },
    triangle: function(sideA, sideB, sideC, height, base, senAngBase){
        if(formulas.check(height, base)){
            return parseFloat(((height * base) / 2).toFixed(2));
        }
        if(formulas.check(sideA, sideB, sideC)){
            let p = (sideA+ sideB+sideC)/2;
            return parseFloat((Math.sqrt(p*(p-sideA)*(p-sideB)*(p-sideC))).toFixed(2));
        }
        if(formulas.check(sideA, sideB, senAngBase)){
            return parseFloat(((sideA*sideB*senAngBase) / 2).toFixed(2));
        }
        else{
            return "Insufficient / Wrong data!";
        }
    },
    
    trapezium: function(bigBase, smallBase, height){
        if(formulas.check(bigBase, smallBase, height)){
            return parseFloat(((height * (smallBase + bigBase))/2).toFixed(2));
        }
        else{
            return "Insufficient / Wrong data!";
        }
    },
    
    cubeVolume: function(sideA, sideB, prismHeight){
        if(formulas.check(sideA, sideB, prismHeight)){
            return parseFloat(((sideA * sideB * prismHeight)).toFixed(2));
        }
        else{
            return "Insufficient / Wrong data!";
        }
    },
    triangularVolume: function(sideA, sideB, baseHeight, prismHeight){
        if(formulas.check(sideA, prismHeight, baseHeight)){
            return parseFloat(((sideA*baseHeight/2)*prismHeight).toFixed(2));
        }
        else{
            return "Insufficient / Wrong data!";
        }
    },
    
    cilinderVolume: function(ray, height){
        if(formulas.check(ray, height)){
            return parseFloat((Math.PI*ray*ray*height).toFixed(2));
        }
        else{
            return "Insufficient / Wrong data!";
        }
    },
    
    coneVolume: function(ray, height){
        if(formulas.check(ray, height)){
            return parseFloat((Math.PI*ray*ray*height/3).toFixed(2));
        }
        else{
            return "Insufficient / Wrong data!";
        }
    },
    pyramidVolume: function (base, height, piramidHeight){
        if(formulas.check(base, height, piramidHeight) == true){
            return parseFloat(((base * height * piramidHeight)/6).toFixed(2));
        }
        else{
            return "Insufficient / Wrong data!";
        }
    },
    twoSpotsDistance: function(xA, yA, xB, yB){
        return parseFloat((Math.sqrt((xB - xA)*(xB - xA) + (yB - yA)*(yB - yA))).toFixed(2));
    },
    interest: function(capital, tax, time){
        if(formulas.check(capital, tax, time)){
            return parseFloat((capital*(Math.pow((1+(tax/100)), time)) - capital).toFixed(2));
        }
        else{
            return "Insufficient / Wrong data!";
        }
    },
    pythagoras: function(a, b){
        if(formulas.check(a, b)){
            return parseFloat((Math.sqrt(a*a + b*b)).toFixed(2));   
        }
        else{
            return "Insufficient / Wrong data!";
        }
    },   
    sct: function(opposite, adjacent, hypotenuse){
        if(formulas.check(opposite, adjacent, hypotenuse)){
            return "Sin: " + (parseFloat(((opposite/hypotenuse)).toFixed(2))) + "\nCosine: " + (parseFloat(((adjacent/hypotenuse)).toFixed(2))) + "\nTangent: " + (parseFloat(((opposite/adjacent)).toFixed(2)));
        }
        else{
            return "Insufficient / Wrong data!";
        }   
    }
    
}