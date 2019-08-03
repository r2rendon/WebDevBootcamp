// function colorChange()
// {
//     if(purple)
//     {
//         document.body.style.background = "white";
//     }
//     else
//     {
//         document.body.style.background = "purple";
//     }

//     purple = !purple;
// }

//HTML variables
var h1 = document.querySelector("h1");

var buttons = document.querySelectorAll("button");
var p1 = buttons[0];
var p2 = buttons[1];
var reset = buttons[2];

var spans = document.querySelectorAll("span");
var maxScore = parseInt(spans[2].textContent);
var spanP1 = spans[0], spanP2 = spans[1];

var hInput = document.querySelector("input");

//JS variables
var p1Score = 0, p2Score = 0;
var gameOver = false;

p1.addEventListener("click", function(){
    if (p1Score < maxScore && !gameOver){
        p1Score++;
        spanP1.textContent = p1Score;
        if(p1Score == maxScore)
        {
            spanP1.style.color = "green";
            gameOver = true;
        }

    }
});

p2.addEventListener("click", function()
{
    if (p2Score < maxScore && !gameOver){
        p2Score++;
        spanP2.textContent = p2Score;
        if(p2Score === maxScore)
        {  
            spanP2.style.color = "green";
            gameOver = true;
        }         

    }
});

function resetE()
{
    p1Score = 0;
    p2Score = 0;
    spanP1.style.color = "black";
    spanP2.style.color = "black";
    spanP1.textContent = p1Score;
    spanP2.textContent = p2Score;
    gameOver = false;
}

reset.addEventListener("click", function(){
    resetE();
});

hInput.addEventListener("change", function(){
    spans[2].textContent = hInput.value;
    maxScore = parseInt(spans[2].textContent);
    resetE();
});

h1.addEventListener("mouseover", function(){
    this.style.color = "teal";
});

h1.addEventListener("mouseout", function()
{
    this.style.color = "black";
});