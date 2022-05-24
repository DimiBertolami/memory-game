# memory-game
everyone knows it, everybody has played it
so the goal was to create a memory game and at first I started with 28 hardcoded cards. I deliberately chose that many because I knew in advance it that this decision would haunt me throughout the task. halfway I restarted and started using the template element to spawn my cards which seemed to do a better job in helping me write clean code. Still one small issue to solve is the one,two click.. with me it's now a one two three click system.. the third locks in the choice or flips the cards back around.


## Must-have features
[x] Clicking cards turns them around.

[x] Randomly position the cards.

[x] Readme, but that shouldn't even have to be said.

[x] Explanation on the page itself.


## Nice-to-have features
[ ] Make it playable by keyboard.

[ ] Let a user define custom image urls.

[ ] Make it pleasing to look at.

[ ] Multiplayer (local).


[My Memory Game made with Bootstrap]([https://www.youtube.com/watch?v=dQw4w9WgXcQ](https://dimibertolami.github.io/memory-game/))


currently trying to figure out why my second click doesn't flip the card.. 

```javascript
    function turnCard(card) {

        if (count === 2) {
            console.log("my first card was " + myFirstCard);
            console.log("my second card was " + card);
            count = 0;
        }

        if (count === 1) {
            document.getElementById(card).src = document.getElementById(card).alt;
            if (document.getElementById(myFirstCard).src === document.getElementById(card).src) {
                console.log("same");
                // document.getElementById(myFirstCard).disabled = true;
                document.getElementById(myFirstCard).error = true;
                // document.getElementById(card).disabled = true;
                document.getElementById(card).error = true;
            } else {
                console.log("card1 " + card + " is different from " + myFirstCard);
                document.getElementById(myFirstCard).src = "images/cardback.jpg";
                document.getElementById(card).src = "images/cardback.jpg";
            }
            count++;
        }

        if (count === 0) {
            count++;
            myFirstCard = card;
            document.getElementById(myFirstCard).src = document.getElementById(card).alt;
        }
    }

```

