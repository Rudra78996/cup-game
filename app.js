let btn = document.querySelector("#start");
let cup_1 = document.querySelector(".one");
let cup_2 = document.querySelector(".two");
let cup_3 = document.querySelector(".three");
cup_1.style.transition="2s";
cup_2.style.transition="2s";
cup_3.style.transition="2s"
let middle = document.querySelector("._2")
let _1 = document.querySelector("._1")
let _3 = document.querySelector("._3")
middle.classList.add("show")
btn.addEventListener("click", shuffle)
function shuffle(){
    let cup = document.querySelectorAll('img');
    for(let i=0;i<cup.length;i++){
        cup[i].addEventListener("click", ()=>{
            cup[i].classList.add("show")
        })
    }
    middle.classList.remove("show");
    btn.remove();
    setTimeout(()=>{
        cup_1.style.transform="translate(194px)";
        cup_2.style.transform="translate(-194px)";
    },500)
    setTimeout(()=>{
        cup_3.style.transform="translate(-194px)";
        cup_1.style.transform="translate(388px)";
    },2500)
    setTimeout(()=>{
        document.querySelector(".result").innerHTML="Guess The Cup!!"
    },4000)
    middle.addEventListener("click",()=>{
        document.querySelector(".result").innerHTML="You Win!! &#127881;"
    })
    _1.addEventListener("click",()=>{
        document.querySelector(".result").innerHTML="Try Again &#128542;"
    })
    _3.addEventListener("click",()=>{
        document.querySelector(".result").innerHTML="Try Again &#128542;"
    })
}