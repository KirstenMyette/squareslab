var countMe = 1;
var timer = 0;
var delay = 200;
var prevent = false
var colors = ['blueviolet', 'darkmagenta', 'darkviolet', 'deeppink', 'indigo', 'mediumorchid', 'mediumpurple', 'mediumblue', 'orchid', 'plum', 'purple', 'rebeccapurple'];




document.addEventListener("DOMContentLoaded", function () {
    var button = document.createElement("button");
    button.innerText = "Add Squares";
    document.body.appendChild(button);


//Button does the things

    button.addEventListener("click", function () {
        var div = document.createElement("div");
        div.className = ("squares");
        div.id = countMe; countMe++;
        document.body.appendChild(div);

//Display the numbers
        div.addEventListener("mouseenter", function () {
            div.innerText = div.id;
        });
        div.addEventListener("mouseout", function () {
            div.innerText = " ";
        });

//Randomize the colors
    //SINGLE CLICK
        div.addEventListener("click", function () {
            function doClickAction() {
                div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];;
            }
            timer = setTimeout(function () {
                if (!prevent) {
                    doClickAction(
                    );
                }
                prevent = false;
            }, delay);
        });


    //DOUBLE CLICK
        div.addEventListener("dblclick", function() {
            clearTimeout(timer);
            prevent = true;
            if (div.previousSibling === button) {
                alert("No Sqare To Delete");
            }
            else if (countMe%2 !== 0) {
                div.previousSibling.remove();
            }

        
            else if (div.nextSibling === null) {
                alert("No Sqare To Delete");
            }
            
            else if (countMe%2 === 0) {
                div.nextSibling.remove();
            }

              });
          });
    });

    



