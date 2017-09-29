var countMe = 0;

document.addEventListener("DOMContentLoaded", function () {
    var button = document.createElement("button");
        button.innerText = "Add Squares";
       
        
    document.body.appendChild(button); 

        button.addEventListener("click", function (){    
            var div = document.createElement("div");
                div.className = ("squares");
                div.id = countMe;
                        countMe++;
                div.style.textAlign = "center";
                document.body.appendChild(div);
                div.addEventListener("mouseover", function () {
                div.innerHTML = div.id;
                
                   

                
                });
               
            
        });
     
    });
    



