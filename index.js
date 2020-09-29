
document.write("Hello!");

document.getElementById("root").innerHTML = "Hello !!!";

console.log("Hello this is a message from javascript. Showing in console!")

window.alert("This is a Alert. Do not overuse this method, as it prevents the user from accessing other parts of the page until the box is closed.");

document.write("<h2>Hello this text is added at the bottom of the body.</h2>");

//------------------------------- Single Line Comment ------------------------------------------

/*
 multi-line comment
 */

var headline = document.getElementById("changeMe");

headline.innerHTML = "Hello World Wide Web!";
headline.style.color = "Pink";

//-------------------------------------------------------------------------

var ulElements = document.getElementsByTagName("ul");

console.log(ulElements);

console.log("This is a unordered List it has the Class names of: " + ulElements[0].className);

//-------------------------------------------------------------------------


var btn = document.getElementById("btnDont");

btn.innerHTML = "Click Me!";

btn.addEventListener("click", changeUl)

function changeUl() {
    //ulElements[0].style.backgroundColor = "Green";

    ulElements[0].innerHTML = "<li>Cat</li> <li>Dog</li> <li>Horse</li>";

    for (var index = 0; index < ulElements.length; index++){

        var element = ulElements[index];

        if( index % 2 === 0){
            element.classList.add("evenUl");
        }else{
            element.classList = "oddUl";
        }

    }

}

//-------------------------------------------------------------------------

//console.log(document.getElementById("secret"));

document.getElementById("secret").addEventListener("mouseover", function () {
    document.getElementsByTagName("h2")[0].innerHTML = "This is Reacting to a EventListener!"
});

document.getElementById("secret").addEventListener("mouseleave", function () {
    document.getElementsByTagName("h2")[0].innerHTML = "Secret Under This Text?"
});

//-------------------------------------------------------------------------


var ticTacBoard = document.getElementById("ticTacBoard");

ticTacBoard.style.width = "300px";
ticTacBoard.style.height = "300px";
ticTacBoard.style.backgroundColor = "grey";

console.log(ticTacBoard);


for (var index = 0; index < ticTacBoard.children.length; index++){

    var element = ticTacBoard.children[index];

    element.style.height = "100px";
    element.style.width = "100px";

    element.style.float = "left";

    if (index % 2 === 0){
        element.style.backgroundColor = "White";
    }else{
        element.style.backgroundColor = 'Black';
    }


//-------------------------------------------------------------------------

}
