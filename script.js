let boardBottomX = 300;

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

    else if ( document.querySelector(".Rgauche").getBoundingClientRect().top < document.querySelector(".board").getBoundingClientRect().top + boardBottomX &&
        e.code === "ArrowDown")
    {
        document.querySelector(".Rgauche").style.top = `${document.querySelector(".Rgauche").getBoundingClientRect().top + 15}px`
    }
    
}

function stopPaddle()
{

}

// document.body.addEventListener("keydown", movePaddle)

document.body.addEventListener("keydown", (e) =>{
    let interval = setInterval(() => {movePaddle(e)}, Math.ceil(1000/60));
    document.body.addEventListener("keyup", () =>{clearInterval(interval)});
    document.body.addEventListener("keydown", () =>{clearInterval(interval)})
});
