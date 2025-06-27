let timer =  document.getElementById("timer")
let strtbtn =  document.getElementById("start")
let stop = document.getElementById("stop")

let timerid = null;

strtbtn.addEventListener("click",()=>{
    let  elementcontent = Number(timer.innerHTML)

timerid = setInterval(()=>{
    elementcontent = elementcontent + 1
    timer.textContent = elementcontent
},1000)

stop.addEventListener('click',() => {
    clearInterval(timerid)
})


})
