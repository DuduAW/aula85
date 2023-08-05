canvas= document.getElementById('myCanvas')
ctx= canvas.getContext("2d");

roverWidth=100;
roverHeight=90;

backgroundImage = "mars.jpg";

roverImage = "rover.png";

roverX=10;
roverY=10;

function add() {
    backgroundimgTag = new Image();
    backgroundimgTag.onload = uploadBackground;
    backgroundimgTag.src = backgroundImage;

    roverimgTag = new Image();
    roverimgTag.onload = uploadrover;
    roverimgTag.src = roverImage;



}
function up()
{
    if(roverY >=0)
    {
        roverY=roverY - 10;
        console.log("quando a seta para cima e pressionada, x=" + roverX + " | y ="+roverY);
        uploadBackground();
        uploadrover();
    }
}


function down()
{
    if(roverY >=500)
    {
        roverY = + 10;
        console.log("quando a seta para baixo e pressionada, x=" + roverX + " | y ="+roverY);
        uploadBackground();
        uploadrover();
    }
}


function left()
{
    if(roverY >=0)
    {
        roverY = roverX - 10;
        console.log("quando a seta para esquerda e pressionada, x=" + roverX + " | y ="+roverY);
        uploadBackground();
        uploadrover();
    }
}

function right()
{
    if(roverX >=700)
    {
        roverX = roverX + 10;
        console.log("quando a seta para direita e pressionada, x=" + roverX + " | y ="+roverY);
        uploadBackground();
        uploadrover();
    }
}



window.addEventListener("keydown" , myKeyDown);
function mykeyDown(e)
{
    keyPressed= e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
            console.log("cima");
    }
            if(keyPressed =='40')
            {
                down();
                console.log("baixo");
            }
            if(keypressed == '37')
            {
                left();
                console.log("esquerda");
            }
           if(keypressed == '39')
           {
            right();
            console.log("direita");
           }
    }

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag,roverX,roverY, roverWidth, roverHeight);
}








