const menuItem = document.querySelectorAll('a')

const toggleBtn = document.querySelector('button')
let toggle = false

toggleBtn.addEventListener('click', () => {

    if(toggle){
        toggleBtn.classList.remove('active')
        menuItem.forEach( (item) => {
            item.style.transform = "translate(0px,0px)"
        })
        toggle = false
    }else{
        toggleBtn.classList.add('active')
        menuItem[0].style.transform = "translate(150px,0px)"
        menuItem[1].style.transform = "translate(150px,90px)"
        menuItem[2].style.transform = "translate(90px,150px)"
        menuItem[3].style.transform = "translate(0px,150px)"
        toggle = true
    }
})


