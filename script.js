let contents = [
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
];
let play = true;
let playTimes = 0;
function getNumbers() {
    randomNumber = Math.floor(Math.random() * 25);
    console.log(randomNumber);
    return randomNumber;
}
function setBombs() {
    function getBombs() {
        return getNumbers();
    }
    bombValue = document.querySelector(".bombsNumber").value;
    for (let i = 0; i < bombValue; i++) {
        let rno = getBombs();
        while (contents[rno] === "y") {
            rno = getBombs();
        }
        contents[rno] = "y";
    }

    console.log(contents);
}
function continuePlaying() {
    play = true;
    if(parseFloat(document.querySelector(".currentValue").textContent) && playTimes!=0){
        document.querySelector(".moneyInput").value = parseFloat(
            document.querySelector(".currentValue").textContent
        );
        document.querySelector(".currentValue").textContent = "";
        for (let i = 0; i < 25; i++) {
            innerBox = document.querySelector(`#box-${i}`);
            innerBox.style.backgroundImage = "none";
            innerBox.style.opacity = 0.56;
            outerBox = document.querySelector(".outerBox");
            outerBox.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        }
        contents = [
            "x",
            "x",
            "x",
            "x",
            "x",
            "x",
            "x",
            "x",
            "x",
            "x",
            "x",
            "x",
            "x",
            "x",
            "x",
            "x",
            "x",
            "x",
            "x",
            "x",
            "x",
            "x",
            "x",
            "x",
            "x",
        ];
    }
    else{
        alert("Please bet some money!");
    }
    
}

function reveal(currentBox) {
    if (play) {
        playTimes+=1;
        let betValue = parseFloat(document.querySelector(".moneyInput").value);
        let bombValue = parseFloat(document.querySelector(".bombsNumber").value);
        let currentValueElement = document.querySelector(".currentValue");
        if (betValue && betValue >= 0) {
            setBombs();
            const wonAudio = new Audio('audios/won.mp3');
            const loseAudio = new Audio('audios/lose.mp3');
            if (contents[currentBox] === "x") {
                wonAudio.play();
                currentValueElement.textContent = betValue * bombValue;
                document.querySelector(".outerBox").style.backgroundColor =
                    "rgba(0, 255, 0, 0.5)";
            } else {
                loseAudio.play();
                currentValueElement.textContent = betValue / bombValue;
                document.querySelector(".outerBox").style.backgroundColor =
                    "rgba(255, 0, 0, 0.5)";
            }
            for (let i = 0; i < 25; i++) {
                innerBox = document.querySelector(`#box-${i}`);
                if (contents[i] === "x") {
                    innerBox.style.backgroundImage = "url('images/diamond.png')";
                    innerBox.style.backgroundPosition = "center";
                    innerBox.style.backgroundSize = "80%";
                    innerBox.style.backgroundRepeat = "no-repeat";
                    innerBox.style.opacity = 1;
                } else {
                    innerBox.style.backgroundImage = "url('images/bomb.png')";
                    innerBox.style.backgroundPosition = "center";
                    innerBox.style.backgroundSize = "80%";
                    innerBox.style.backgroundRepeat = "no-repeat";
                    innerBox.style.opacity = 1;
                }
            }
        } else {
            alert("Please bet some money!");
        }
    }
    if(playTimes===0){
        play = false;
    }
}
