const mouseLight = document.querySelector(".mouse-light");

document.addEventListener("mousemove", (e)=>{

    mouseLight.style.left = e.clientX + "px";
    mouseLight.style.top = e.clientY + "px";

});


window.addEventListener("load", function(){

    setTimeout(function(){

        document.getElementById("loader").style.display="none";

    },3000);

});
