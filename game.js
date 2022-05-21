(() => {
    // document.getElementsByClassName("img-fluid").addEventListener("click", () => {
    let count = 0;
    let arrCards = [];
    arrCards.push("One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "TwentyOne", "TwentyTwo", "TwentyThree", "TwentyFour", "TwentyFive", "TwentySix", "TwentySeven", "TwentyEight");
    let myFirstCard = "";
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

        // if (arrRandomImagesRemoved.length >= 1) {
        //     // arrRandomImagesRemoved2.splice(arrImages[randomInt], 1);
        // } else {
        //     // arrRandomImagesRemoved2.splice(arrImages[randomInt], 1);
        // }
        arrHiddenCards.push([i, arrImages[randomInt]]);
        arrRandomImagesRemoved2.splice(arrImages[randomInt], 1);
        let randomIntX = RandomInteger2(arrRandomImagesRemoved2);
        console.log(arrRandomImagesRemoved)
        console.log(i + " " + arrHiddenCards[i] + " " + randomIntX + " from a maximum of " + arrRandomImagesRemoved2.length);
        eImg.src="images/cardback.jpg";
        eImg.title=`turn${arrCards[i]}`;
        eImg.id=arrCards[i];
        eImg.alt=arrImages[randomInt];
        // alert(i);
        switch (i){
            case 0:
                // alert(`One ${arrTurnCards[i]}`);
                eImg.onclick = function turnOne() {turnCard(arrCards[0])};
                break;
            case 1:
                eImg.onclick = function turnTwo() {turnCard(arrCards[1])};
                break;
            case 2:
                eImg.onclick = function turnThree() {turnCard(arrCards[2])};
                break;
            case 3:
                eImg.onclick = function turnFour() {turnCard(arrCards[3])};
                break;
            case 4:
                eImg.onclick = function turnFive() {turnCard(arrCards[4])};
                break;
            case 5:
                eImg.onclick = function turnSix() {turnCard(arrCards[5])};
                break;
            case 6:
                eImg.onclick = function turnSeven() {turnCard(arrCards[6])};
                break;
            case 7:
                eImg.onclick = function turnEight() {turnCard(arrCards[7])};
                break;
            case 8:
                eImg.onclick = function turnNine() {turnCard(arrCards[8])};
                break;
            case 9:
                eImg.onclick = function turnTen() {turnCard(arrCards[9])};
                break;
            case 10:
                eImg.onclick = function turnEleven() {turnCard(arrCards[10])};
                break;
            case 11:
                eImg.onclick = function turnTwelve() {turnCard(arrCards[11])};
                break;
            case 12:
                eImg.onclick = function turnThirteen() {turnCard(arrCards[12])};
                break;
            case 13:
                eImg.onclick = function turnFourteen() {turnCard(arrCards[13])};
                break;
            case 14:
                eImg.onclick = function turnFifteen() {turnCard(arrCards[14])};
                break;
            case 15:
                eImg.onclick = function turnSixteen() {turnCard(arrCards[15])};
                break;
            case 16:
                eImg.onclick = function turnSeventeen() {turnCard(arrCards[16])};
                break;
            case 17:
                eImg.onclick = function turnEighteen() {turnCard(arrCards[17])};
                break;
            case 18:
                eImg.onclick = function turnNineteen() {turnCard(arrCards[18])};
                break;
            case 19:
                eImg.onclick = function turnTwenty() {turnCard(arrCards[19])};
                break;
            case 20:
                eImg.onclick = function turnTwentyOne() {turnCard(arrCards[20])};
                break;
            case 21:
                eImg.onclick = function turnTwentyTwo() {turnCard(arrCards[21])};
                break;
            case 22:
                eImg.onclick = function turnTwentyThree() {turnCard(arrCards[22])};
                break;
            case 23:
                eImg.onclick = function turnTwentyFour() {turnCard(arrCards[23])};
                break;
            case 24:
                eImg.onclick = function turnTwentyFive() {turnCard(arrCards[24])};
                break;
            case 25:
                eImg.onclick = function turnTwentySix() {turnCard(arrCards[25])};
                break;
            case 26:
                eImg.onclick = function turnTwentySeven() {turnCard(arrCards[26])};
                break;
            case 27:
                eImg.onclick= function turnTwentyEight() {turnCard(arrCards[27])};
                break;
            default:
                // alert("bleh!");
                break;
        }
        if(i===7 || i===14 || i===21 || i===28){
            // br = document.createElement("br");
            document.getElementById("target").appendChild(document.createElement("br"));
        }
        document.getElementById("target").appendChild(bCloneNode);
    }

    function RandomInteger() {
        return Math.floor(Math.random() * arrImages.length)
    }
    function RandomInteger2(array){return Math.floor(Math.random() * array.length)}

    function turnCard(card){
        console.log("count = " + count);

        if(count===2){
            // alert("count is two now")
            count = 0;
        }

        if(count===1){
            console.log("my first card was " + myFirstCard);
            console.log("my first card was " + card);
            console.log(document.getElementById(myFirstCard).src);
            console.log(document.getElementById(card).src);
            document.getElementById(card).src = document.getElementById(card).alt;
            if(document.getElementById(myFirstCard).src===document.getElementById(card).src){
                //same
                console.log("card1 " + card + "=" + myFirstCard);
                console.log(document.getElementById(myFirstCard).src);
                console.log(document.getElementById(card).src);
            } else {
                //different
                console.log("card1 " + card + " is different from " + myFirstCard);
                console.log(document.getElementById(myFirstCard).src);
                console.log(document.getElementById(card).src);
                // count=0
                alert("flipping cards back around");
                document.getElementById(myFirstCard).src = "images/cardback.jpg"
                document.getElementById(card).src        = "images/cardback.jpg"
            }
            count++;
        }

        if(count===0){
            document.getElementById(card).src = document.getElementById(card).alt;
            myFirstCard = card;
            count++;
        }

    }


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