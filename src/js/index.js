const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.height = 200;

const playerImage = new Image();
playerImage.src = "../src/assets/shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 3;
let gameFrame = 0;
const staggerFrames = 5;
let x=0;
let y=0;
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.drawImage(playerImage,0,0,575,523,0,130,80,80);
    ctx.drawImage(playerImage,frameX  * spriteWidth, frameY * spriteHeight,spriteWidth, spriteHeight, x, y+130, 80, 80);
    if(gameFrame % staggerFrames == 0){
        if(frameX < 5)
            frameX++;
        else
            frameX = 0;
    }
    gameFrame++;
    x++;
    
    requestAnimationFrame(animate);
}
animate();