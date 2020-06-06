function diceChance() {
    //img 1
    var randomNumber1 = randomNum();
    var randomDiceImage = imageFormat(randomNumber1);
    //change src for image 1
    document.getElementsByClassName('img1')[0].setAttribute("src", randomDiceImage);

    //img 2
    var randomNumber2 = randomNum();
    var randomDiceImage2 = imageFormat(randomNumber2);
    document.getElementsByClassName('img2')[0].setAttribute("src", randomDiceImage2);

    //change h1 tag 
    if (randomNumber1 > randomNumber2) {
        document.getElementsByTagName("h1")[0].innerHTML = "&#128681 player 1 won";
    } else if (randomNumber1 < randomNumber2) {
        document.getElementsByTagName("h1")[0].innerHTML = "player 2 won &#128681";
    } else {
        document.getElementsByTagName("h1")[0].innerHTML = "drew";
    }
}
//calculate a random number between 1-6 
function randomNum() {
    return (Math.floor(Math.random() * 6) + 1)
}
//change format for image folder
function imageFormat(randomNumber) {
    return ("images/dice" + randomNumber + ".png")
}