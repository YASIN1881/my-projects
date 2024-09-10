const $ = document

const wrappers = $.querySelectorAll('.wrapper')
const contents = $.querySelectorAll('.content')
const buttons = $.querySelectorAll('.toggle')

wrappers.forEach(wrapper => {
    wrapper.addEventListener('click', () => {
        contents.forEach( content => {content.style.height = "0px"})
        buttons.forEach( button => { button.style.color = "rgb(17,17,48)";button.querySelector('i').classList.remove("fa-minus")
        ;button.querySelector('i').classList.add("fa-plus")})
        let height = wrapper.querySelector('.content').scrollHeight
        wrapper.querySelector('.content').style.height = height + "px"
        wrapper.querySelector('.toggle').style.color = "rgb(0,132,233)"
        wrapper.querySelector('i').classList.remove("fa-plus")
        wrapper.querySelector('i').classList.add("fa-minus")
    })
})