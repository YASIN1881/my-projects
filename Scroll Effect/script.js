const $ = document
const header = $.querySelector('header')
let lastScrollTop = 0

window.addEventListener("scroll", () => {
    let nowScrollTop = window.scrollY;
    if(nowScrollTop > lastScrollTop) {
        header.style.top = "-80px"
    }else{
        header.style.top = "0px"
    }
    lastScrollTop = nowScrollTop
})