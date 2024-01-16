const xFactor = 4;
const yFactor = 4;
const zFactor = 100;

const getRandom255 = ()=>{return Math.floor(Math.random() * 255)}
const getRandomDir = ()=>{
    let test  = Math.random();
    let dir = "1";
    if(test >= 0.5) dir = "-1";
    return dir;
}
const getRandomRGB = () => {
    const r = getRandom255();
    const g = getRandom255();
    const b = getRandom255();
    return `rgb(${r}, ${g}, ${b})`;
}

const balls =[];
var loadedBalls = [];

const createBall = () => {
    const xVelocity = `${Math.floor(Math.random() * xFactor) + 1}`;
    const yVelocity = `${Math.floor(Math.random() * yFactor) + 1}`;
    const xDirection = `${getRandomDir()}`;
    const yDirection = "1";
    const xPosition = "49";
    const yPosition = "5";
    
    const zIndex = `${Math.floor(Math.random() * zFactor)}`;
    const color = getRandomRGB();
    const style = `background-color: ${color}; z-index: ${zIndex}; left: ${xPosition}%; top: ${yPosition}%;`; 


    const ball = document.createElement('div');
    ball.setAttribute('class', 'ball');
    ball.setAttribute('style', style);
    ball.setAttribute('data-xvelocity', xVelocity);
    ball.setAttribute('data-yvelocity', yVelocity);
    ball.setAttribute('data-xposition', xPosition);
    ball.setAttribute('data-yposition', yPosition);
    ball.setAttribute('data-ydirection', yDirection);
    ball.setAttribute('data-xdirection', xDirection);
    balls.push(ball);
}
const dropBall = () => {
    createBall();
    const container = document.getElementById('ballPit');
    balls.forEach((ball)=>{
        container.appendChild(ball);
        loadedBalls.push(ball);
    }); 
}

const removeBall = () => {
    var ball = balls.pop();
    const container = document.getElementById('ballPit');
    loadedBalls.pop();
    container.removeChild(ball);
}

const removeAll = () => {
    while (balls.length != 0) {
        var ball = balls.pop();
        const container = document.getElementById('ballPit');
        loadedBalls.pop();
        container.removeChild(ball);
    }
}
