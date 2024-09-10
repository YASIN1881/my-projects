const $ = document;

const message = $.querySelector(".wrapper");
let connectionStatus = $.querySelector(".toast");
let messagetitle = $.querySelector("span");
let messageDescription = $.querySelector("p");
let iconWifi = $.querySelector('.icon')
const closeMessage = $.querySelector(".uil-times");


window.addEventListener('load', () => {
    function ajaxRequest () {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                if(res.status < 300 || res.status === 200){
                    online()
                }else{
                    offline()
                }
            })
    }

    function online () {
        connectionStatus.classList.remove('offline')
        messagetitle.innerHTML = "You're online now"
        messageDescription.innerHTML = "Hurray! Internet is connected."
        iconWifi.innerHTML = `<i class="uil uil-wifi"></i>`
        closeMessage.addEventListener('click', () => {
            message.classList.add('hide')
        })
        setTimeout(() => {
            message.classList.add('hide')
        }, 3000);
    }

    function offline () {
        connectionStatus.classList.add('offline')
        messagetitle.innerHTML = "You're offline now"
        messageDescription.innerHTML = "Oopos! Internet is disconnected."
        iconWifi.innerHTML = `<i class="uil uil-wifi-slash"></i>`
        closeMessage.addEventListener('click', () => {
            message.classList.add('hide')
        })
        setTimeout(() => {
            message.classList.add('hide')
        }, 3000);
    }
    setInterval( () => {
        ajaxRequest()
    },100)
})