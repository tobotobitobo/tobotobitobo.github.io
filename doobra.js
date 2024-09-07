var alltogether = document.getElementById("alltogether");
var container = document.getElementById("container");
var firstclick = true;
function colochange(e)
{
    e.style.backgroundColor = "grey";
    e.style.height = "14vh";
    e.style.width = "max(13vw, 80px)";
    fuck = document.querySelectorAll(".game");
    fuck.forEach(element => 
    {
        if(element != e)
        {
            element.style.backgroundColor = "orange";
            element.style.height = "11vh";
            element.style.width = "max(10vw, 70px)";
        }
    });
    alltogether.classList.remove("back");
    alltogether.classList.add("animation");

}
function match(e)
{
    
    if (document.getElementById("game1") == e)
    {
        clicked = document.getElementById("metal");
        num = 0;
    }
    else if (document.getElementById("game2") == e)
    {
        clicked = document.getElementById("niemetal");
        num = 2/7*100;
    }
    else if (document.getElementById("game3") == e)
    {
        clicked = document.getElementById("neklikat");
        num = 2/7*100*2;
    }
    else if (document.getElementById("game4") == e)
    {
        clicked = document.getElementById("la dispute");
        num = 2/7*100*3;
    }
    return [clicked,num];
}

function scroll(num)
{
    container.animate
    ({transform: `translate(${-num}%, 0%)`},
    {duration: 500, fill: "forwards"});
    
    container.style.transform = `translate(${-num}%, 0%)`;
}
function click1(e)
{
    if(firstclick == true)
    {
        container.style.display = "flex";
        container.classList.remove("incoming");
        container.classList.add("incoming");
        firstclick =    false;
    }
    colochange(e);
    [clicked, num] = match(e);
    scroll(num);
    translate = getTranslateX(container);
    console.log(translate/-3633.6 * 100)
}

function back()
{

    setTimeout (function(){
        alltogether.classList.add("back");
    }, 10);
    setTimeout (function(){
        alltogether.classList.add("back");
    }, 10);
    fuck = document.querySelectorAll(".game");
    fuck.forEach(element => 
    {
        element.style.backgroundColor = "orange";
        element.style.height = "11vh";
        element.style.width = "max(10vw, 70px)";
    });
    firstclick = true;
    container.style.display = "none";
    

}

function right(num)
{

}

function getTranslateX(element) {
    var style = window.getComputedStyle(element);
    var matrix = new WebKitCSSMatrix(style.transform);
    console.log('translateX: ', matrix.m41);

    return matrix.m41;
  }
