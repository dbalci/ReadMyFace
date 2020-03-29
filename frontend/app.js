
class Game {
    constructor() {
        this.time = 0;
        this.timer = document.getElementById("timer");
        this.timer.innerText = this.time + "s";
        this.faces = ["😊", "😎", "🙄", "😘", "😑", "🤔", "😉", "🥺", "🤨", "😢", "🤐", "😵"];
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

    getRandomFaces() {
        let newFace = this.shuffle(this.faces).splice(5);
        newFace.push('😊','😊');
        return this.shuffle(newFace);
    };

    setPanel(){
        let randomFaces = this.getRandomFaces();
        let boxes = document.querySelectorAll('.image');
        for(let i=0; i<boxes.length; i++){
            boxes[i].innerText = randomFaces[i];
        };
    };

    start() {
        // start timer
        this.setPanel();
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
            if (boxes[i].innerText === "😊") {
                this.faceCounter += 1;
            };
        };

        for(let i=0; i<boxes.length; i++){

        }
        
    };

    userClicked(e) {
        let box = e.target;

        //check if it is  right face
        if (box.innerText === "😊"){
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
 