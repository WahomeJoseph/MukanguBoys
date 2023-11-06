//Next photo
const nextEl = document.querySelector(".next");

//Previous photo
const prevEl = document.querySelector(".prev");
//Targeting the image
const imageContainerEl = document.querySelector(".imagecontainer");
//To get number of images
const imgsEl = document.querySelectorAll("img");

let currentImg = 1;
 
let timeout;

//Attaching an event
nextEl.addEventListener("click", ()=>{
    currentImg++;
    clearTimeout(timeout)
    updateImg();
});

prevEl.addEventListener("click",()=>{
    currentImg--;
    clearTimeout(timeout)
    updateImg();
})

updateImg();

function updateImg()
{
    
    //At the eend
    if (currentImg > imgsEl.length)
    {
        currentImg = 1;
    }
    else if(currentImg < 1)
    {
        currentImg = imgsEl.length;
    }
    imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`
    timeout = setTimeout(()=>{
        currentImg++;
        updateImg();
    },5000)

}