/*
روش ی که اول خودم حل کردم

const $ = document
const buttons = $.querySelectorAll('button')
const pElems = $.querySelectorAll('p')

buttons.forEach( button => {
    button.addEventListener('click', (e) => {
        buttons.forEach(button => button.classList.remove('active'))
        pElems.forEach( (p) => p.classList.remove('active'))
        button.classList.add('active')
        let buttonsActive = e.target.dataset.id
        document.querySelector(`#${buttonsActive}`).classList.add('active')
    })
})
 */


/*  روش استاد  */

const $ = document

const buttonWrapper = $.querySelector('.buttonWrapper')
const buttons = $.querySelectorAll('button')
const contents = $.querySelectorAll('.content')

buttonWrapper.addEventListener('click', (e) => {
    let contentId = e.target.dataset.id
    let mainContent = $.querySelector(`#${contentId}`)
    contents.forEach( content => content.classList.remove('active'))
    mainContent.classList.add('active')
    buttons.forEach( button => button.classList.remove('active'))
    e.target.classList.add('active')
})