const button = document.querySelector("#startBtn");

button.addEventListener("click", function(){

    document.querySelector("#features").scrollIntoView({

        behavior:"smooth"

    });

});
const stats=document.querySelectorAll(".stat");

stats.forEach(function(card){

card.addEventListener("mouseenter",function(){

card.style.transform="scale(1.05)";

});

card.addEventListener("mouseleave",function(){

card.style.transform="scale(1)";

});

});