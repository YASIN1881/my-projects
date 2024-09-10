const $ = document

let surface = $.querySelector('.surface')
let car = $.querySelector('.car')
let carImg = $.querySelector('.car img')

let flag = true

const carImgs = ['images/Img_05.png', 'images/Img_06.png']

window.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        surface.classList.toggle('moveRight')
        car.classList.toggle('suspension')
    }
})

window.addEventListener('keypress', (e) => {
    console.log(e);
    if(e.keyCode === 119) {
        if (flag) {
            flag = false
            carImg.setAttribute('src', carImgs[0])
        } else {
            flag = true
            carImg.setAttribute('src', carImgs[1])
        }
    }
})