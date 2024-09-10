let bodyColors = [
  "#a8d530",
  "#42aaff",
  "#f3d55b",
  "#ff4f51",
  "#904ae8",
  "#ffa711",
];
let copyColor = [...bodyColors,"transparent"]

const $ = document
const faceBtn = $.querySelector('#face-btn')
const colorBtn = $.querySelector('#color-btn')
const hornsBtn = $.querySelector('#horns-btn')
const tailBtn = $.querySelector('#tail-btn')
const face = document.querySelector("#face")

let counter = 0

faceBtn.addEventListener('click', () => {
    counter++

    if(counter === 6) {
        counter = 0
    }

    face.src = `face-${counter}.png`

})

colorBtn.addEventListener('click', () => {
    counter++

    if(counter === 6) {
        counter = 0
    }
    document.documentElement.style.setProperty('--color-character',`${bodyColors[counter]}`)
})

const changCOlorTail_Horns = (color) => {
    counter++

    if(counter === 7) {
        counter = 0
    }
    document.documentElement.style.setProperty(`${color}`,`${bodyColors[counter]}`)

}

hornsBtn.addEventListener('click', function () {
    changCOlorTail_Horns("--color-horns")
})

tailBtn.addEventListener('click', function () {
    changCOlorTail_Horns("--color-tail")
})
