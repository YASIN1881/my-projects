let $ = document

const counters = $.querySelectorAll(".num")
const benefitsCountainer = $.querySelector("#benefits")
let startCounter = false

window.addEventListener("scroll", ()=> {
    
    if(window.scrollY >= benefitsCountainer.offsetTop){
        if(!startCounter){
            counters.forEach(counter => setCounter(counter))
        }
        startCounter = true
    }
})


function setCounter (el) {

    let eleNumCount = el.dataset.count

    let counterInterval = setInterval(() => {
        if(el.textContent == eleNumCount){
            clearInterval(counterInterval)
        }
        el.textContent++
    }, 10);
    console.log(eleNumCount);
}