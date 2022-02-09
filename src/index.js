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

//



}

