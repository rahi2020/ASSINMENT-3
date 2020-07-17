// ASSINMENT -'feetToMile' START HERE.
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var firstAnswer = feetToMile(52800);
console.log(firstAnswer);
var secondAnswer = feetToMile(79200);
console.log(secondAnswer);
var thirdAnswer = feetToMile(105600);
console.log(thirdAnswer);
// ASSINMENT -'feetToMile' END HERE.



// ASSINMENT -'woodForChair' START HERE.
function woodCalculator(chair, table, bed){
    var woodForChair = chair * 1;
    var woodForTable = table * 3;
    var woodForBed = bed * 5;
    var totalWood = chair + table + bed;
    return totalWood;
}
var totalCubuicForCombo = woodCalculator(1, 3, 5)
console.log(totalCubuicForCombo);
// ASSINMENT -'woodForChair' END HERE.



// ASSINMENT -'brickCalculator' START HERE.
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
// ASSINMENT -'brickCalulator' END HERE.



// ASSINMENT -'tinyFriend' START HERE.
function tinyFriend(friend){
    var smallName = friend[0];
    for(var i = 0; i < friends.lenght; i++){
        var element = friends[i];
        if(element < smallName){
            smallName = element;
        }
    }
    return smallName;
};
var friends = ["pial", "rahim", "biplob", "akash", "rakibul", "abdullah"];
var results = tinyFriend(friends);
console.log(results);
// ASSINMENT -'tinyFriend' END HERE.
