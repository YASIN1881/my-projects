const $ = document

document.addEventListener('click', (e) => {
    let snowElem = document.createElement("span")
    snowElem.classList.add('snowflake')
    snowElem.style.top = e.clientY + "px"
    snowElem.style.left = e.clientX + "px"
    let snowDimensions = Math.floor(Math.random() * 100)
    snowElem.style.width = `${snowDimensions}px`
    snowElem.style.height = `${snowDimensions}px`
    $.body.append(snowElem)

    setTimeout( () => {
        snowElem.remove()
    },1000)

    // let removeSnow = setInterval( () => {
    //     $.querySelector('span').remove()
    //     clearInterval(removeSnow)
    // },2000)
})

