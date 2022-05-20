let arrCards = [];
arrCards.push("One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "TwentyOne", "TwentyTwo", "TwentyThree", "TwentyFour", "TwentyFive", "TwentySix", "TwentySeven", "TwentyEight")
let arrImages = [];
arrImages.push("images/1.webp", "images/2.webp", "images/3.webp", "images/4.webp", "images/5.webp", "images/6.webp", "images/7.webp", "images/8.webp", "images/9.webp", "images/10.webp", "images/11.webp", "images/12.webp", "images/13.webp", "images/14.webp");
// console.log(arrCards);
// console.log(arrCards[0]);
function turnOne(){
    console.log(turnCard(arrCards[0]));
}
function turnTwo(){
    console.log(turnCard(arrCards[1]));
}
function turnThree(){
    console.log(turnCard(arrCards[2]));
}
function turnFour(){
    console.log(turnCard(arrCards[3]));
}
function turnFive(){
    console.log(turnCard(arrCards[4]));
}
function turnSix(){
    console.log(turnCard(arrCards[5]));
}
function turnSeven(){
    console.log(turnCard(arrCards[6]));
}
function turnEight(){
    console.log(turnCard(arrCards[7]));
}
function turnNine(){
    console.log(turnCard(arrCards[8]));
}
function turnTen(){
    console.log(turnCard(arrCards[9]));
}
function turnEleven(){
    console.log(turnCard(arrCards[10]));
}
function turnTwelve(){
    console.log(turnCard(arrCards[11]));
}
function turnThirteen(){
    console.log(turnCard(arrCards[12]));
}
function turnFourteen(){
    console.log(turnCard(arrCards[13]));
}
function turnFifteen(){
    console.log(turnCard(arrCards[14]));
}
function turnSixteen(){
    console.log(turnCard(arrCards[15]));
}
function turnSeventeen(){
    console.log(turnCard(arrCards[16]));
}
function turnEighteen(){
    console.log(turnCard(arrCards[17]));
}
function turnNineteen(){
    console.log(turnCard(arrCards[18]));
}
function turnTwenty(){
    console.log(turnCard(arrCards[19]));
}
function turnTwentyOne(){
    console.log(turnCard(arrCards[20]));
}
function turnTwentyTwo(){
    console.log(turnCard(arrCards[21]));
}
function turnTwentyThree(){
    console.log(turnCard(arrCards[22]));
}
function turnTwentyFour(){
    console.log(turnCard(arrCards[23]));
}
function turnTwentyFive(){
    console.log(turnCard(arrCards[24]));
}
function turnTwentySix(){
    console.log(turnCard(arrCards[25]));
}
function turnTwentySeven(){
    console.log(turnCard(arrCards[26]));
}
function turnTwentyEight(){
    console.log(turnCard(arrCards[27]));
}

function turnCard(card){
/*
    Maybe some little explanation as what this does:
        it replaces the clicked card's source (SRC) with a random selected card from the images array

*/
    let randomInt = RandomInteger()
    document.getElementById(card).src = arrImages[randomInt];
    return randomInt;
}

function RandomInteger(){return Math.floor(Math.random() * arrImages.length)}
