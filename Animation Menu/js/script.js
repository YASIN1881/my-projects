const $ = document
const animSart = $.querySelector('.start')
const links = $.querySelectorAll('a')
links.forEach( link => {
    link.addEventListener('mouseenter' , (e) => {
        animSart.style.width = `${e.target.offsetWidth}px`
        animSart.style.left = `${e.target.offsetLeft}px`
    })
})