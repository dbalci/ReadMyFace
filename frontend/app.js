
// entry.onclick = function(){
//     console.log(this)
//     let choices = ['redText', 'blueText'];

//     let dice = Math.random();
//     if (dice > 0.5) {
//         console.log("what")
//         this.className = choices[0];
//     } else {
//         console.log("kucuk", dice)
//         this.className = choices[1];
//     }

//     let c = document.createElement('p');
//     c.innerText = "This is a body for a p";
//     this.appendChild(c)
// }

class Game {
    constructor() {
        this.time = 0;
        this.timer = document.getElementById("timer");
        this.timer.innerText = this.time + "s";
    }

    start() {
        // start timer
        let that = this;
        let interval = setInterval(function () {
            that.time += 0.1;
            that.timer.innerText = that.time.toFixed(1) + 's';
        }, 100)

        // flip cards open
        $('.front').fadeIn();
        $('.back').fadeOut();     
        
        // register click handlers for boxes
        let boxes = document.getElementsByClassName("front")
        for (let i=0; i<boxes.length; i++) {
            boxes[i].onclick = this.changeFon
        };

        function stopInterval() {
            clearInterval(interval);
        };

        // let faceCounter = 0;
        // for(let i=0; i<boxes.length; i++){
        //     if (box.innerText === "😊") {
        //         faceCounter += 1;
        //     };
        // };
    }

    changeFon(e) {
        let box = e.target;
        //check if it is  right face
        if (box.innerText === "😊"){
            $(box).css('background-color', 'green');
        } else {
            $(box).css('background-color', 'red');
        }
    }

    // result(){
    //     if(yesil background sayisi === faceCounter){
    //         timer background beyaz olsun
    //         timer dursun
            
    //     }
    // }
    // boxes arrayinda for each yapip aradigimiz yuzun sayisini bulabiliriz



}
 
let game = new Game()
document.getElementById('start').onclick = game.start.bind(game);


// tikladigin yuz gulen suratsa fonu yesile cevircek degilse kirmiziya cevircek
//yeni class ver rigth ve wrong olsun ustune yesil box kirmizi box versin
//changefon yaptikca ulasmamiz gereken sayiya ulasinca timer dursun ve timer fonu beyaz olsun
