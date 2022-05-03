let boardBottomY = 300;
let boardRightX = 500;
let begin = 1;

let paddleRight = {
    x: document.querySelector(".Rdroite").getBoundingClientRect().left,
    y: document.querySelector(".Rdroite").getBoundingClientRect().top
}

let paddleLeft = {
    x: document.querySelector(".Rgauche").getBoundingClientRect().left,
    y: document.querySelector(".Rgauche").getBoundingClientRect().top
}

function movePaddle(e)
{
    document.querySelector(".Rgauche").style.position = 'absolute';
    if (document.querySelector(".Rgauche").getBoundingClientRect().top > document.querySelector(".board").getBoundingClientRect().top + 5 &&
        e.code === "ArrowUp")
    {
        document.querySelector(".Rgauche").style.top = `${document.querySelector(".Rgauche").getBoundingClientRect().top - 15}px`
    }

    else if ( document.querySelector(".Rgauche").getBoundingClientRect().top < document.querySelector(".board").getBoundingClientRect().top + boardBottomY &&
        e.code === "ArrowDown")
    {
        document.querySelector(".Rgauche").style.top = `${document.querySelector(".Rgauche").getBoundingClientRect().top + 15}px`
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
    if (begin)
    {
        document.querySelector(".ball").style.top = `${document.querySelector(".ball").getBoundingClientRect().top + 1}px`;
        document.querySelector(".ball").style.left = `${document.querySelector(".ball").getBoundingClientRect().left + 1}px`;
        console.log("bonjour")
    }
    if (document.querySelector(".ball").getBoundingClientRect().top < document.querySelector(".board").getBoundingClientRect().top + 480)
    {
        begin = 0;
        document.querySelector(".ball").style.top = `${document.querySelector(".ball").getBoundingClientRect().top - 1}px`;
        document.querySelector(".ball").style.left = `${document.querySelector(".ball").getBoundingClientRect().left - 1}px`;
        console.log("aurevoir")
    }
    
}
let startBallMove = setInterval(() =>{moveBall(begin)}, Math.ceil(1000/60));