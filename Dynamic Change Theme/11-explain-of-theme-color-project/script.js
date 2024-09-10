let $ = document
let buttonColors = $.querySelectorAll('.btn')

buttonColors.forEach( (color) => {
    color.addEventListener('click', (e) => {
        let currentColor = e.target.dataset.color

        document.documentElement.style.setProperty('--theme-color', currentColor);
    })
})