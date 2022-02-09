import './less/index.less'

// Your code goes here!

//Load
window.onload = function (evt){
    const heading = document.querySelector("h1");
    heading.textContent = "READY TO GO!";
   

    //Copy
    window.addEventListener("copy", () => {
      navigator.clipboard.readText()
      .then(text => {
          heading.textContent += text 
           }); 
    });

//Click
document.body.addEventListener("click", evt => {
    evt.target.classList.toggle('mirror')
});

//dblclick
document.body.addEventListener("dblclick", evt => {
    evt.target.outerHTML = ""
});

//keydown
window.addEventListener("keydown", evt => {
  if(evt.key == 6) {
    document.body.innerHTML = '<h1>Ya Pressed 6</h1>'  
  }  
})

//mousemove
document.body.addEventListener("mousemove", evt => {
    const {clientX, clientY} = evt
    //console.log(`mouse is at ${clientX}, ${clientY}`) 
})

//mouseenter
//mouseleave
const destinations = document.querySelectorAll('.destination')
for (let destination of destinations) {
    destination.addEventListener('mouseenter', evt => {
        destination.style.fontWeight = "bold"

    })
    destination.addEventListener("mouseleave", evt => {
        destination.style.fontWeight = "initial"
    })
}


}

