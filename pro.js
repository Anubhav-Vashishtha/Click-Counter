let show=document.getElementsByClassName("show")[0];
let reset=document.getElementsByClassName("reset")[0];
let count=document.getElementsByClassName("count")[0];
let z=0;

count.addEventListener("mousedown",()=>{
    z=z+1;
    show.innerHTML= `${z}`;
});

reset.addEventListener("mousedown",()=>{
    z=0;
    show.innerHTML= `${z}` ;
});