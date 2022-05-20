# memory-game
everyone knows it, everybody has played it

## Must-have features
[x] Clicking cards turns them around 
[x] Randomly position the cards
[x] Readme, but that shouldn't even have to be said
[ ] Explanation on the page itself

## Nice-to-have features
[ ] Make it playable by keyboard
[ ] Let a user define custom image urls
[ ] Make it pleasing to look at
[ ] Multiplayer (local)

[An interesting link](https://www.youtube.com/watch?v=dQw4w9WgXcQ) I found related to this exercise in case you want to further investigate

```javascript
function turnCard(card){
/*
    if
    once you click a card, cardOne becomes true.
    then it chooses a random number and logs it to my console
    then it updates the clicked card with a random selected image from my image array
    This should lock in the image behind the clicked card but it does not yet do so
    now it just removes the clicked image from the array to track which images have already been
    assigned to which card
    else
    here i need to check if card one source is the same as card2 source if so, stay turned around
    otherwise flip card back over. but i'm not there yet

*/
    if(!cardOne){
        //card one selected logic
        cardOne = true;
        let randomInt = RandomInteger()
        console.log("random nr is " + randomInt);
        document.getElementById(card).src = arrImages[randomInt];
        arrRandomImagesRemoved.splice(randomInt, 1);
        console.log(arrRandomImagesRemoved)
    } else {
        // card two selected logic
        let randomInt = RandomInteger()
        console.log("random nr is " + randomInt);
        document.getElementById(card).src = arrImages[randomInt];
        // arrRandomImages2Removed.splice(randomInt, 1);
        // console.log(arrRandomImagesRemoved)
    }
    return randomInt;
}

```

