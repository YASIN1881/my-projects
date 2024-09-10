let $ = document
const body = $.querySelector(':root')
const colorA = $.querySelector('#color-a')
const colorB = $.querySelector('#color-b')
const buttonDirection = $.querySelectorAll('.buttons button')
const generate = $.querySelector('#submit')
const codeOutPut = $.querySelector('#code')
const copy = $.querySelector('#copy')

let currentDirection = "to bottom"

const setDirection = (directionBtn, directionElem) => {

    for (let item of buttonDirection) {
        item.classList.remove('active')
    }

    if(directionBtn.tagName === "BUTTON") {
        directionElem.classList.add('active')
    }else {
        directionElem.parentElement.classList.add('active')
    }

    currentDirection = directionBtn

}


const generateCssCode = () => {
    let cssCode = `linear-gradient(${currentDirection}, ${colorA.value}, ${colorB.value})`

    body.style.background = cssCode
    codeOutPut.value = "background: " + cssCode
}

const copyCssText = () => {
    // let copy = codeOutPut.select()
    navigator.clipboard.writeText(codeOutPut.value)
}


buttonDirection.forEach( (direction) => {
    direction.addEventListener('click', (event) => {
        let directionBtn = direction.dataset.direction
        setDirection(directionBtn, event.target)
    })
})

generate.addEventListener("click", generateCssCode)
copy.addEventListener('click', copyCssText)

