"use strict";

function check(){
    for(let i = 0; i < arguments.length; i++){
        if (arguments[i] == 0){
            return false;
        }
    }
    return true;
}


function factorial(number){
    return number == 0? 1 :number * factorial(number -1 );  
}

function simpleCombination(n, p){
    if(check(n, p)){
        return factorial(n)/(factorial(p) * factorial(n - p));
    }
    else{
        return "Insufficient data!";
    }
}

function circle(ray){
    if(check(ray)){
        return parseFloat((Math.PI*(ray*ray)).toFixed(2));
    }
    else{
        return "Insufficient data!";
    }
}

function diamond(biggerDiagonal, smallerDiagonal, sideA, sideB, cosAng){
    let temp;
    if(check(biggerDiagonal, smallerDiagonal)){
        return parseFloat(((biggerDiagonal * smallerDiagonal) / 2).toFixed(2));
    }
    if(check(cosAng, sideA, sideB, smallerDiagonal)){
        return parseFloat(diamond((Math.sqrt(sideA*sideA + sideB*sideB - (2 * sideA * sideB * cosAng))) , smallerDiagonal)).toFixed(2);
    }
    else{
        return "Insufficient data!";
    }
}

function rectangle(sideA, sideB){
    if(check(sideA, sideB)){
        return parseFloat((sideA * sideB).toFixed(2));
    }
    else{
        return "Insufficient / Wrong data!";
    }
}

function triangle(sideA, sideB, sideC, height, base, senAngBase){
    if(check(height, base)){
        return parseFloat(((height * base) / 2).toFixed(2));
    }
    if(check(side, sideB, sideC)){
        return parseFloat((Math.sqrt(((sideA + sideB + sideC) / 2)*(((sideA + sideB + sideC) / 2)-sideA)*(((sideA + sideB + sideC) / 2)-sideB)*(((sideA + sideB + sideC) / 2)-sideC))).toFixed(2));
    }
    if(check(sideA, sideB, senAngBase)){
        return parseFloat(((sideA*sideB*senAngBase) / 2).toFixed(2));
    }
    else{
        return "Insufficient / Wrong data!";
    }
}

function trapezium(bigBase, smallBase, height){
    if(check(bigBase, smallBase, height)){
        return parseFloat(((height * (smallBase + bigBase))/2).toFixed(2));
    }
    else{
        return "Insufficient / Wrong data!";
    }
}

function cubeVolume(sideA, sideB, prismHeight){
    if(check(sideA, sideB, prismHeight)){
        return parseFloat(((sideA * sideB * prismHeight)).toFixed(2));
    }
    else{
        return "Insufficient / Wrong data!";
    }
}
function triangularVolume(sideA, sideB, baseHeight, prismHeight){
    if(check(sideA, prismHeight, baseHeight)){
        return parseFloat(((sideA*baseHeight/2)*prismHeight).toFixed(2));
    }
    else{
        return "Insufficient / Wrong data!";
    }
}

function cilinderVolume(ray, height){
    if(check(ray, height)){
        return parseFloat((Math.PI*ray*ray*height).toFixed(2));
    }
    else{
        return "Insufficient / Wrong data!";
    }
}

function coneVolume(ray, height){
    if(check(ray, height)){
        return parseFloat((Math.PI*ray*ray*height/3).toFixed(2));
    }
    else{
        return "Insufficient / Wrong data!";
    }
    
}

function pyramidVolume(base, height, piramidHeight){
    if(check(base, height, piramidHeight) == true){
        return parseFloat(((base * height * piramidHeight)/6).toFixed(2));
    }
    else{
        return "Insufficient / Wrong data!";
    }
}


function twoSpotsDistance(xA, yA, xB, yB){
    if(typeof xA != 'number' && typeof yA != 'number' && typeof xB != 'number' && typeof yB != 'number'){
        return parseFloat((Math.sqrt((xB - xA)*(xB - xA) + (yB - yA)*(yB - yA))).toFixed(2));
    }
    else{
        return "Insufficient / Wrong data!";
    }
}

function interest(capital, tax, time){
    if(check(capital, tax, time)){
        return parseFloat((capital*(Math.pow((1+(tax/100)), time)) - capital).toFixed(2));
    }
    else{
        return "Insufficient / Wrong data!";
    }
}

function pythagoras(a, b){
    if(check(a, b)){
        return parseFloat((Math.sqrt(a*a + b*b)).toFixed(2));    
    }
    else{
        return "Insufficient / Wrong data!";
    }
}

function sct(opposite, adjacent, hypotenuse){
    if(check(opposite, adjacent, hypotenuse)){
        let sin = opposite/hypotenuse;
        let cos = adjacent/hypotenuse;
        let tan = sin/cos;
        return "Sin: " + (parseFloat((sin).toFixed(2))) + "\nCosine: " + (parseFloat((cos).toFixed(2))) + "\nTangent: " + (parseFloat((tan).toFixed(2)));
    }
    else{
        return "Insufficient / Wrong data!";
    }   
}

