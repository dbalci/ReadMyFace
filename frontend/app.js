
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

let time = 0;
let timer = document.getElementById("timer");
timer.innerText = time + "s";

let start = document.getElementById('start');
start.onclick = function(){
    setInterval(function(){
        time += 0.1;
        timer.innerText = time.toFixed(1) + 's';
    },100)
    flip()
}

function flip() {
    $(".image-box").toggleClass("flipped");
}
