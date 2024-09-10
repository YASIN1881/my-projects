const massage = document.querySelector('span')
document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === "hidden") {
        document.title = "Inactive Tab"
    }else{
        document.title = "Active Tab"
    }
    massage.classList.add('faild')
    massage.innerText = "(FAILD)"
})