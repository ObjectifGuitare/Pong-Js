let ball = document.querySelector(".ball");
let paddleLeft = document.querySelector(".Rgauche");
let paddleRight = document.querySelector(".Rdroite");
let movePossible = {
    left : 0,
    right : 1,
    up : 1,
    down : 0
};

let boardBottomY = 300;
let boardRightX = 500;

function movePaddle(e)
{
    paddleLeft.style.position = 'absolute';
    if (paddleLeft.getBoundingClientRect().top > document.querySelector(".board").getBoundingClientRect().top + 5 &&
        e.code === "ArrowUp")
    {
        paddleLeft.style.top = `${paddleLeft.getBoundingClientRect().top - 15}px`
    }

    else if ( paddleLeft.getBoundingClientRect().top < document.querySelector(".board").getBoundingClientRect().top + boardBottomY &&
        e.code === "ArrowDown")
    {
        paddleLeft.style.top = `${paddleLeft.getBoundingClientRect().top + 15}px`
    }
    
}

//fluid way to move the paddle 60fps no scope 360
document.body.addEventListener("keydown", (e) =>{
    let startPaddleMove = setInterval(() => {movePaddle(e)}, Math.ceil(1000/60));
    document.body.addEventListener("keyup", () =>{clearInterval(startPaddleMove)});
    document.body.addEventListener("keydown", () =>{clearInterval(startPaddleMove)})

});

function moveBall()
{
    if (movePossible.down && movePossible.right){
        ball.style.top = `${ball.getBoundingClientRect().top + 1}px`;
        ball.style.left = `${ball.getBoundingClientRect().left + 1}px`;
    }
    if (movePossible.down && movePossible.left){
        ball.style.top = `${ball.getBoundingClientRect().top + 1}px`;
        ball.style.left = `${ball.getBoundingClientRect().left - 1}px`;
    }
    if (movePossible.up && movePossible.left){
        ball.style.top = `${ball.getBoundingClientRect().top - 1}px`;
        ball.style.left = `${ball.getBoundingClientRect().left - 1}px`;
    }
    if (movePossible.up && movePossible.right){
        ball.style.top = `${ball.getBoundingClientRect().top - 1}px`;
        ball.style.left = `${ball.getBoundingClientRect().left + 1}px`;
    }
    if (ball.getBoundingClientRect().top > document.querySelector(".board").getBoundingClientRect().top + 440)
    {
        movePossible.down = 0;
        movePossible.up = 1;

    }
    if (ball.getBoundingClientRect().top < document.querySelector(".board").getBoundingClientRect().top + 5)
    {
        movePossible.down = 1;
        movePossible.up = 0;
    }
    // if (ball.getBoundingClientRect().top)
    // {
    //     movePossible.right = 1;
    //     movePossible.left = 0;
    // }
    if (ball.getBoundingClientRect().left == paddleRight.getBoundingClientRect().left &&)
    {
        movePossible.right = 0;
        movePossible.left = 1;
    }
     // if ()
    // {
    //     movePossible.right = 0;
    //     movePossible.left = 0;
    //     movePossible.up = 0;
    //     movePossible.down = 0;
    // }
    // if ()
    // {
    //     movePossible.right = 0;
    //     movePossible.left = 0;
    //     movePossible.up = 0;
    //     movePossible.down = 0;

    // }
    
}



let startBallMove = setInterval(moveBall, Math.ceil(1000/60));