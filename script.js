
window.addEventListener("scroll",function(){
    var bttn=document.getElementById("back");
    if(document.body.scrollTop>20|| document.documentElement.scrollTop>20){
        bttn.style.visibility="visible";
    }
    else{
        bttn.style.visibility="hidden";
    }
})
function backtoTop(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}

function enlarge(myimg){
    var modal=document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display="flex";
    modalImg.src=document.querySelector(myimg).src;
}
