(() => {
    // document.getElementsByClassName("img-fluid").addEventListener("click", () => {
    let count = 0;
    let arrCards = [];
    arrCards.push("One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "TwentyOne", "TwentyTwo", "TwentyThree", "TwentyFour", "TwentyFive", "TwentySix", "TwentySeven", "TwentyEight");
    let arrTurnCards = [];
    arrTurnCards.push = ("TurnOne", "TurnTwo", "TurnThree", "TurnFour", "TurnFive", "TurnSix", "TurnSeven", "TurnEight", "TurnNine", "TurnTen", "TurnEleven", "TurnTwelve", "TurnThirteen", "TurnFourteen", "TurnFifteen", "TurnSixteen", "TurnSeventeen", "TurnEighteen", "TurnNineteen", "TurnTwenty", "TurnTwentyOne", "TurnTwentyTwo", "TurnTwentyThree", "TurnTwentyFour", "TurnTwentyFive", "TurnTwentySix", "TurnTwentySeven", "TurnTwentyEight");
    let arrImages = [];
    arrImages.push("images/1.webp", "images/2.webp", "images/3.webp", "images/4.webp", "images/5.webp", "images/6.webp", "images/7.webp", "images/8.webp", "images/9.webp", "images/10.webp", "images/11.webp", "images/12.webp", "images/13.webp", "images/14.webp");
    let arrHiddenCards = [];
    let arrRandomImagesRemoved = [];
    let arrRandomImagesRemoved2 = [];
    // two times to fill up all 28 images. these two arrays I will use to only hide each image once in the arrHiddenCards array and thus in my game
    arrRandomImagesRemoved.push(arrImages);
    arrRandomImagesRemoved2.push(arrImages);
    const tElement = document.getElementById("tpl-card");
    for (let i = 0; i < arrCards.length; i++) {
        const bCloneNode = tElement.content.cloneNode(true);
        const eImg = bCloneNode.querySelector(".img-fluid")
        // eImg.src = arrImages[RandomInteger()];
        let randomInt = RandomInteger()
        if (arrRandomImagesRemoved.length > 1) {
        } else {
            // arrRandomImagesRemoved2.splice(arrImages[randomInt], 1);
        }
        arrHiddenCards.push([i, arrImages[randomInt]]);
        eImg.src="images/cardback.jpg"
        eImg.title=`turn${arrCards[i]}`;
        eImg.id=arrCards[i];
        eImg.alt=arrImages[randomInt];
        // onclick="GameReset()"
        alert(`"turn${arrCards[i]}()"`);
        eImg.onclick= function() {console.log(`turn${arrCards[i]}()`)};
        console.log(arrTurnCards[i]);
        // count++;
        document.getElementById("target").appendChild(bCloneNode);
        console.log(`turn${arrCards[i]}`);
    }

    // });
    function RandomInteger() {
        return Math.floor(Math.random() * arrImages.length)
    }

    function turnCard(card){
        alert(document.getElementById(card).alt);
        document.getElementById(card).src = document.getElementById(card).alt;
    }

    function turnOne() {turnCard(arrCards[0])}
    function turnTwo() {turnCard(arrCards[1])}
    function turnThree() {turnCard(arrCards[2])}
    function turnFour() {turnCard(arrCards[3])}
    function turnFive() {turnCard(arrCards[4])}
    function turnSix() {turnCard(arrCards[5])}
    function turnSeven() {turnCard(arrCards[6])}
    function turnEight() {turnCard(arrCards[7])}
    function turnNine() {turnCard(arrCards[8])}
    function turnTen() {turnCard(arrCards[9])}
    function turnEleven() {turnCard(arrCards[10])}
    function turnTwelve() {turnCard(arrCards[11])}
    function turnThirteen() {turnCard(arrCards[12])}
    function turnFourteen() {turnCard(arrCards[13])}
    function turnFifteen() {turnCard(arrCards[14])}
    function turnSixteen() {turnCard(arrCards[15])}
    function turnSeventeen() {turnCard(arrCards[16])}
    function turnEighteen() {turnCard(arrCards[17])}
    function turnNineteen() {turnCard(arrCards[18])}
    function turnTwenty() {turnCard(arrCards[19])}
    function turnTwentyOne() {turnCard(arrCards[20])}
    function turnTwentyTwo() {turnCard(arrCards[21])}
    function turnTwentyThree() {turnCard(arrCards[22])}
    function turnTwentyFour() {turnCard(arrCards[23])}
    function turnTwentyFive() {turnCard(arrCards[24])}
    function turnTwentySix() {turnCard(arrCards[25])}
    function turnTwentySeven() {turnCard(arrCards[26])}
    function turnTwentyEight() {turnCard(arrCards[27])}
})();


// let bCardOne = false;
// let bCardTwo = false;
// let myFirstCard = "";
// let cardTwo = "";
// let randomInt;
// let randomInt2;
// let arrLocations = [];
// let arrCards = [];
// arrCards.push("One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "TwentyOne", "TwentyTwo", "TwentyThree", "TwentyFour", "TwentyFive", "TwentySix", "TwentySeven", "TwentyEight")
// let arrImages = [];
// arrImages.push("images/1.webp", "images/2.webp", "images/3.webp", "images/4.webp", "images/5.webp", "images/6.webp", "images/7.webp", "images/8.webp", "images/9.webp", "images/10.webp", "images/11.webp", "images/12.webp", "images/13.webp", "images/14.webp");
// let arrRandomImagesRemoved = [];
// arrRandomImagesRemoved.push(arrImages);
// let arrRandomImages2Removed = [];
// arrRandomImages2Removed.push(arrRandomImagesRemoved);
// console.log(arrRandomImagesRemoved)
// alert("hi");
// let arrRememberMIAUW = [];
// // console.log(arrCards);
// // console.log(arrCards[0]);
// function turnCard(card){
//
//     console.log(`card selected ${card}`);
//     // if card One is not true
//     if(!bCardOne){
//     // and if card Two is not true
//         if(cardTwo===""){
//             // generate randomInt
//             randomInt = RandomInteger();
//             console.log(`random nr(1) is ${randomInt}`);    // log randomint
//             document.getElementById(card).src = arrImages[randomInt];   // replace card source with random generated image
//             arrRememberMIAUW.push(arrImages[randomInt]);    // here i store the image to verify later
//             bCardOne = true;    //true means we clicked the first card
//             myFirstCard = card;
//             cardTwo = arrImages[randomInt]; // cycle one complete
//
//         } else {
//             // card two is not ""
//         }
//     } else {
//         //card one is true
//         // if card two is false
//         if(!bCardTwo) {
//             randomInt2 = RandomInteger(arrRandomImages2Removed)
//             bCardTwo = true;
//             console.log(`random nr(2) is ${randomInt2}`);
//             document.getElementById(card).src = arrImages[randomInt2];
//         } else {
//             //card one is true
//             //card two is true
//             if(randomInt===randomInt2){
//                 console.log("randomint1 and randomint2 are equal")
//                 arrRandomImagesRemoved.splice(randomInt, 1);
//                 randomInt = RandomInteger(arrRandomImagesRemoved)
//                 randomInt2 = RandomInteger(arrRandomImages2Removed)
//             } else {
//             // reset the two cards, but first store their values
//                 arrLocations = [[card, arrImages[randomInt]],[myFirstCard, arrImages[randomInt2]]]
//                 console.log(arrLocations);
//                 document.getElementById(myFirstCard).src = "images/cardback.jpg"
//                 document.getElementById(card).src        = "images/cardback.jpg"
//             }
//         }
//     }
//     // console.log("image 1 " +  arrImages[randomInt] + " image 2 " +  arrImages[randomInt2])
// }
//
// function RandomInteger(){return Math.floor(Math.random() * arrImages.length)}
// function RandomInteger2(array){return Math.floor(Math.random() * array.length)}
//
