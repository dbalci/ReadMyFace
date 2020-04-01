
class Game {
    constructor() {
        this.time = 0;
        this.timer = document.getElementById("timer");
        this.timer.innerText = this.time + "s";
        this.happyFaces = ['h1.png', 'h2.png', 'h3.png', 'h4.png', 'h5.png', 'h6.png', 'h7.png', 'h8.png', 'h9.png', 'h10.png', 'h11.png', 'h12.png', 'h13.png'];
        this.otherFaces = ['o1.png', 'o2.png', 'o3.png', 'o4.png', 'o5.png', 'o6.png', 'o7.png', 'o8.png', 'o9.png', 'o10.png', 'o11.png', 'o12.png', 'o13.png', 'o14.png', 'o15.png', 'o16.png', 'o17.png', 'o18.png', 'o19.png', 'o20.png', 'o21.png', 'o22.png', 'o23.png', 'o24.png', 'o26.png'];
    }

    shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let rnd = Math.floor(Math.random() * i);

            let temp = arr[i];
            arr[i] = arr[rnd];
            arr[rnd] = temp;
        }
        return arr;
    };

    getRandomFaces(){
        let arr = [2, 3, 4];
        let rnd = this.shuffle(arr)[0];
        let newHappy = this.shuffle(this.happyFaces).slice(0,rnd)
        let rest = document.querySelectorAll('.image').length - rnd;
        let newOther= this.shuffle(this.otherFaces).slice(0,rest)
        let newFaces = newHappy.concat(newOther);
        return this.shuffle(newFaces)
    }

    setPanel(){
        let randomFaces = this.getRandomFaces();
        let boxes = document.querySelectorAll('.image');
        for(let i=0; i<boxes.length; i++){
            let imgEl = document.createElement('img');
            imgEl.src = '/faces/' + randomFaces[i];
            boxes[i].innerHTML = '';
            boxes[i].style.backgroundColor = '#f8e4dd';
            boxes[i].appendChild(imgEl);
        };
    };

    start() {
        // start timer
        this.setPanel();
        this.time = 0;

        let that = this;
        this.interval = setInterval(function () {
            that.time += 0.1;
            that.timer.innerText = that.time.toFixed(1) + 's';
        }, 100)

        // flip cards open
        let boxes = document.querySelectorAll('.image')
        for(let i=0; i<boxes.length; i++){
            boxes[i].classList.add('show');
            boxes[i].classList.remove('hide')
        }

        // register click handlers for boxes
        for (let i=0; i<boxes.length; i++) {
            boxes[i].onclick = this.userClicked.bind(this);
        };

        this.faceCounter = 0;
        this.rightFace = 0;

        for(let i=0; i<boxes.length; i++){
            let imgName = boxes[i].querySelector('img').src.split('/').pop();

            if (this.happyFaces.includes(imgName)) {
                this.faceCounter += 1;
            };
        };        
    };

    userClicked(e) {
        let img = e.target;
        let box = img.parentElement;
        let imgName = img.src.split('/').pop();
        //check if it is  right face

        if (this.happyFaces.includes(imgName)){
            box.style.backgroundColor = 'rgb(80, 155, 97)';
            this.rightFace+=1
        } else {
            box.style.backgroundColor = 'rgb(206, 62, 51)';
        }
        if(this.rightFace === this.faceCounter){
            clearInterval(this.interval);
            document.getElementById('timer').style.color = 'white';
            document.getElementById('timer').style.fontSize = '200%';
        };
    };

}
 
let game = new Game()
document.getElementById('start').onclick = game.start.bind(game);
 