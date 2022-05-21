# memory-game
everyone knows it, everybody has played it

## Must-have features
[x] Clicking cards turns them around.

[x] Randomly position the cards.

[x] Readme, but that shouldn't even have to be said.

[ ] Explanation on the page itself.


## Nice-to-have features
[ ] Make it playable by keyboard.

[ ] Let a user define custom image urls.

[ ] Make it pleasing to look at.

[ ] Multiplayer (local).


[An interesting link](https://www.youtube.com/watch?v=dQw4w9WgXcQ) I found related to this exercise in case you want to further investigate


currently working on these 2 arrays
 arrRandomImagesRemoved
  arrRandomImagesRemoved2
  the first one is for the first round of hiding cards the second one for the matching cards.
  now they random select a number but that number needs to decrease each time a new image is formatted
  
```javascript
    let arrRandomImagesRemoved = [];
    let arrRandomImagesRemoved2 = [];
    function RandomInteger2(array){return Math.floor(Math.random() * array.length)}

```

