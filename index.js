console.log("Hello this is a message from javascript. Showing in console!")

window.alert("This is a Alert. Do not overuse this method, as it prevents the user from accessing other parts of the page until the box is closed.");

document.write("<h2>Hello, this text is added at the bottom</h2>");

//------------------------------- Single Line Comment ------------------------------------------

/*
 multi-line comment
 */

var headline = document.getElementById("welcomeMessage");

// three ways, same result.
console.log(headline);
console.log(document.getElementsByTagName("h1").item(0));
console.log(document.getElementsByClassName("primary").item(0));

headline.innerHTML = "Hello World Wide Web!";
headline.style.color = "Pink";

//-------------------------------------------------------------------------

var ulElements = document.getElementsByTagName("ul");

console.log(ulElements);

console.log("This is a unordered List it has the Class names of: " + ulElements[0].className);

//-------------------------------------------------------------------------


var btn = document.getElementsByTagName("button").item(0);

btn.innerHTML = "Click Me!";

btn.addEventListener("click", changeUl)

function changeUl() {


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

}
//-------------------------------------------------------------------------

    function resetText(param){
        param.innerHTML = "Hover Me!";
    }


    // Connecting to the onmouseover on the button element.
    function textChange() {
        document.getElementById("textTrigger1").innerHTML = "You see, It works!";
    }

    document.getElementById("textTrigger2").onmouseover = function () {
        document.getElementById("textTrigger2").innerHTML = "You see, It works, Right?!";
    };

    document.getElementById("textTrigger3").addEventListener("mouseover", function () {
        document.getElementById("textTrigger3").innerHTML = "You see, It works Right?! I hope soo..";
    });
    document.getElementById("textTrigger3").addEventListener("mouseleave", function () {
        resetText(this)
        }
     );

    //-------------------------------------------------------------------------
    console.log("Adding A Element with JS");


    var node = document.createElement("h1");
    var textNode = document.createTextNode("This element is created with JS");

    var attribute = document.createAttribute("class");
    console.log(attribute);
    attribute.value = "primary";

    console.log(node);
    console.log(textNode);
    node.appendChild(textNode);
    document.getElementById("addStuff").appendChild(node);



