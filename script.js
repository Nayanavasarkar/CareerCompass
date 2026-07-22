const button = document.querySelector("#startBtn");

button.addEventListener("click", function(){

    document.querySelector("#features").scrollIntoView({

        behavior:"smooth"

    });

});