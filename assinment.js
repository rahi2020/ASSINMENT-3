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
function brickCalculator(tala) {
    if (tala <= 10) {
        var Eit = (tala * 15 * 1000);
        return Eit;
    }
    else if (tala > 10 && tala < 20) {
        var Eit = (10 * 15 * 1000) + (tala - 10) * 12 * 1000;
    return Eit;
}
    else if (tala => 20) {
    var Eit = (10 * 15 * 1000) + (10 * 12 * 1000) + (tala - 20) * 10 * 1000;
return Eit;
    }
}
var result = brickCalculator(30)
console.log(result);
// ASSINMENT -'brickCalulator' END HERE.



// ASSINMENT -'tinyFriend' START HERE.
function tinyFriend(name){
    var smallName = name[0];
    for(var i = 0; i < name.length; i++){
        var element = name[i];
        if(element.length < smallName.length){
            smallName = element;
        }
    }
    return smallName;
}
var result = tinyFriend(['rahim', 'biplob', 'pial', 'akash', 'rakibul', 'abdullah']);
console.log(result);
// ASSINMENT -'tinyFriend' END HERE.867
