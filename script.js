let paddleRight = {
    x: document.querySelector(".Rdroite").getBoundingClientRect().left,
    y: document.querySelector(".Rdroite").getBoundingClientRect().top
}

let paddleLeft = {
    x: document.querySelector(".Rgauche").getBoundingClientRect().left,
    y: document.querySelector(".Rgauche").getBoundingClientRect().top
}

function startGame(e)
{

    document.querySelector(".Rgauche").style.position = 'absolute';
    if (document.querySelector(".Rgauche").getBoundingClientRect().top > document.querySelector(".board").getBoundingClientRect().top + 5 &&
        e.code === "ArrowUp")
    {
        document.querySelector(".Rgauche").style.top = `${document.querySelector(".Rgauche").getBoundingClientRect().top - 5}px`
    }

    if ( document.querySelector(".Rgauche").getBoundingClientRect().top > document.querySelector(".board").getBoundingClientRect().top - 11 &&
        e.code === "ArrowDown")
    {
        document.querySelector(".Rgauche").style.top = `${document.querySelector(".Rgauche").getBoundingClientRect().top + 5}px`
    }
    
}
document.body.addEventListener("keydown", startGame);