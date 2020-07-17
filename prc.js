function brickCalculator(floor){
    if(floor <= 10){
        var totalFeetBrick = 1000;
        var totalFeet = 15;
        perFloorBrick = totalFeetBrick * totalFeet 
    }
    else if(floor >= 11 && floor <= 20){
        var totalFeetBrick = 1000;
        var totalFeet = 12;
        perFloorBrick = totalFeetBrick * totalFeet;
    }
    else{
        var totalFeetBrick = 1000;
        var totalFeet = 10;
        perFloorBrick = totalFeetBrick * totalFeet
    }
    return perFloorBrick;
}
var brick = brickCalculator(40);
console.log(brick);