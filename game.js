(() => {
    let myFirstCard = "";
    let count = 0;
    let arrCards = [];
    let arrHiddenCards = [];
    let arrRandomImagesRemoved = [];
    const tElement = document.getElementById("tpl-card");
    arrCards.push("One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "TwentyOne", "TwentyTwo", "TwentyThree", "TwentyFour", "TwentyFive", "TwentySix", "TwentySeven", "TwentyEight");
    arrRandomImagesRemoved.push("images/1.webp", "images/2.webp", "images/3.webp", "images/4.webp", "images/5.webp", "images/6.webp", "images/7.webp", "images/8.webp", "images/9.webp", "images/10.webp", "images/11.webp", "images/12.webp", "images/13.webp", "images/14.webp", "images/1.webp", "images/2.webp", "images/3.webp", "images/4.webp", "images/5.webp", "images/6.webp", "images/7.webp", "images/8.webp", "images/9.webp", "images/10.webp", "images/11.webp", "images/12.webp", "images/13.webp", "images/14.webp");

    for (let i = 0; i < arrCards.length; i++) {
        const bCloneNode = tElement.content.cloneNode(true);
        const eImg = bCloneNode.querySelector(".img-fluid")
        let randomInt = Math.floor(Math.random() * arrRandomImagesRemoved.length);
        // let randomInt2 = RandomInteger3();
        eImg.id = arrCards[i];
        // eImg.src = "images/cardback.jpg";
        eImg.src = arrRandomImagesRemoved[randomInt];
        eImg.title = `turn${arrCards[i]}`;
        eImg.alt = arrRandomImagesRemoved[randomInt];
        // eImg.alt = "images/cardback.jpg";
        arrHiddenCards.push(arrRandomImagesRemoved[randomInt]);
        console.log(`${i}) removing ${arrRandomImagesRemoved[randomInt]} from  arrRandomImagesRemoved ( lenght: ${arrRandomImagesRemoved.length} )`)
        let index = arrRandomImagesRemoved.indexOf(arrRandomImagesRemoved[randomInt], 0);
        console.log("index " + index);
        arrRandomImagesRemoved.splice(index, 1);
        console.log("arrHiddenCards");
        console.log(arrHiddenCards);
        console.log("arrRandomImagesRemoved");
        console.log(arrRandomImagesRemoved);
        console.log("___________________________________________________________");
        // console.log(`${arrRandomImagesRemoved[randomInt]}`);
        switch (i) {
            case 0:
                // alert(`One ${arrTurnCards[i]}`);
                eImg.onclick = function turnOne() {
                    turnCard(arrCards[0])
                };
                break;
            case 1:
                eImg.onclick = function turnTwo() {
                    turnCard(arrCards[1])
                };
                break;
            case 2:
                eImg.onclick = function turnThree() {
                    turnCard(arrCards[2])
                };
                break;
            case 3:
                eImg.onclick = function turnFour() {
                    turnCard(arrCards[3])
                };
                break;
            case 4:
                eImg.onclick = function turnFive() {
                    turnCard(arrCards[4])
                };
                break;
            case 5:
                eImg.onclick = function turnSix() {
                    turnCard(arrCards[5])
                };
                break;
            case 6:
                eImg.onclick = function turnSeven() {
                    turnCard(arrCards[6])
                };
                break;
            case 7:
                eImg.onclick = function turnEight() {
                    turnCard(arrCards[7])
                };
                document.getElementById("target").appendChild(document.createElement("br"));
                break;
            case 8:
                eImg.onclick = function turnNine() {
                    turnCard(arrCards[8])
                };
                break;
            case 9:
                eImg.onclick = function turnTen() {
                    turnCard(arrCards[9])
                };
                break;
            case 10:
                eImg.onclick = function turnEleven() {
                    turnCard(arrCards[10])
                };
                break;
            case 11:
                eImg.onclick = function turnTwelve() {
                    turnCard(arrCards[11])
                };
                break;
            case 12:
                eImg.onclick = function turnThirteen() {
                    turnCard(arrCards[12])
                };
                break;
            case 13:
                eImg.onclick = function turnFourteen() {
                    turnCard(arrCards[13])
                };
                break;
            case 14:
                eImg.onclick = function turnFifteen() {
                    turnCard(arrCards[14])
                };
                document.getElementById("target").appendChild(document.createElement("br"));
                break;
            case 15:
                eImg.onclick = function turnSixteen() {
                    turnCard(arrCards[15])
                };
                break;
            case 16:
                eImg.onclick = function turnSeventeen() {
                    turnCard(arrCards[16])
                };
                break;
            case 17:
                eImg.onclick = function turnEighteen() {
                    turnCard(arrCards[17])
                };
                break;
            case 18:
                eImg.onclick = function turnNineteen() {
                    turnCard(arrCards[18])
                };
                break;
            case 19:
                eImg.onclick = function turnTwenty() {
                    turnCard(arrCards[19])
                };
                break;
            case 20:
                eImg.onclick = function turnTwentyOne() {
                    turnCard(arrCards[20])
                };
                break;
            case 21:
                eImg.onclick = function turnTwentyTwo() {
                    turnCard(arrCards[21])
                };
                document.getElementById("target").appendChild(document.createElement("br"));
                break;
            case 22:
                eImg.onclick = function turnTwentyThree() {
                    turnCard(arrCards[22])
                };
                break;
            case 23:
                eImg.onclick = function turnTwentyFour() {
                    turnCard(arrCards[23])
                };
                break;
            case 24:
                eImg.onclick = function turnTwentyFive() {
                    turnCard(arrCards[24])
                };
                break;
            case 25:
                eImg.onclick = function turnTwentySix() {
                    turnCard(arrCards[25])
                };
                break;
            case 26:
                eImg.onclick = function turnTwentySeven() {
                    turnCard(arrCards[26])
                };
                break;
            case 27:
                eImg.onclick = function turnTwentyEight() {
                    turnCard(arrCards[27])
                };
                // document.getElementById("target").appendChild(document.createElement("br"));
                break;
            default:
                alert("i = " + i);
                break;
        }
        document.getElementById("target").appendChild(bCloneNode);
    }
    sleep(2000);
    for (let i = 0; i < 27; i++) {
        const eImgNode = document.querySelectorAll(".img-fluid")
        eImgNode.forEach((img) => {
            img.src = "images/cardback.jpg";
        });

    }
    // console.log(arrHiddenCards);


    function turnCard(card) {

        if (count === 2) {
            console.log("my first card was " + myFirstCard);
            console.log("my second card was " + card);
            if (document.getElementById(myFirstCard).src === document.getElementById(card).src) {
                //same
                console.log("same");
            } else {
                //different
                console.log("card1 " + card + " is different from " + myFirstCard);
                document.getElementById(myFirstCard).src = "images/cardback.jpg";
                document.getElementById(card).src = "images/cardback.jpg";
            }
            count = -1;
        }

        if (count === 1) {
            document.getElementById(card).src = document.getElementById(card).alt;
            count++;
        }

        if (count === 0) {
            document.getElementById(card).src = document.getElementById(card).alt;
            count++;
            myFirstCard = card;
        }
        if (count===-1){
            count++;
            myFirstCard="";
        }
    }

    /**
     * Delay for a number of milliseconds
     */
    function sleep(delay) {
        let start = new Date().getTime();
        while (new Date().getTime() < start + delay){

        };
    }

})();