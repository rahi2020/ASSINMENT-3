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
