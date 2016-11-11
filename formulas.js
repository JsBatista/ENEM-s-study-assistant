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
        return number == 0? 1 :number * this.factorial(number -1 );  
    },
    simpleCombination: function (n, p) {
         return this.factorial(n)/(this.factorial(p) * this.factorial(n - p));
    },

    circle: (ray) => parseFloat((Math.PI*(ray*ray)).toFixed(2)),

    diamond: function(biggerDiagonal, smallerDiagonal, sideA, sideB, cosAng){
        if(formulas.check(biggerDiagonal, smallerDiagonal)){
            return parseFloat(((biggerDiagonal * smallerDiagonal) / 2).toFixed(2));
        }
        if(formulas.check(cosAng, sideA, sideB, smallerDiagonal)){
            return parseFloat(diamond((Math.sqrt(sideA*sideA + sideB*sideB - (2 * sideA * sideB * cosAng))) , smallerDiagonal)).toFixed(2);
        }
        return "Insufficient / Wrong data!";
    },
    
    rectangle: (sideA, sideB) => parseFloat((sideA * sideB).toFixed(2)),

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
        return "Insufficient / Wrong data!";
    },
    
    trapezium: (bigBase, smallBase, height) => parseFloat(((height * (smallBase + bigBase))/2).toFixed(2)),

    cubeVolume: (sideA, sideB, prismHeight) => parseFloat(((sideA * sideB * prismHeight)).toFixed(2)),
    
    triangularVolume: (sideA, sideB, baseHeight, prismHeight) => parseFloat(((sideA*baseHeight/2)*prismHeight).toFixed(2)),

    cilinderVolume: (ray, height) => parseFloat((Math.PI*ray*ray*height).toFixed(2)),
   
    coneVolume: (ray, height) => parseFloat((Math.PI*ray*ray*height/3).toFixed(2)),

    pyramidVolume: (base, height, piramidHeight) => parseFloat(((base * height * piramidHeight)/6).toFixed(2)),

    twoSpotsDistance: (xA, yA, xB, yB) => parseFloat((Math.sqrt((xB - xA)*(xB - xA) + (yB - yA)*(yB - yA))).toFixed(2)),

    interest: (capital, tax, time) => parseFloat((capital*(Math.pow((1+(tax/100)), time)) - capital).toFixed(2)),

    pythagoras: (a, b) => parseFloat((Math.sqrt(a*a + b*b)).toFixed(2)),
    
    sct: (opposite, adjacent, hypotenuse) => "Sin: " + (parseFloat(((opposite/hypotenuse)).toFixed(2))) + "\nCosine: " + (parseFloat(((adjacent/hypotenuse)).toFixed(2))) + "\nTangent: " + (parseFloat(((opposite/adjacent)).toFixed(2))),
}