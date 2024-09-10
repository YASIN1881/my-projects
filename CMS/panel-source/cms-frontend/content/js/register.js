const $ = document
const usernameInput = $.querySelector('#username-input')
const firstnameInput = $.querySelector('#firstname-input')
const lastnameInput = $.querySelector('#lastname-input')
const usernameMessage = $.querySelector('#username-message')
const firstnameMessage = $.querySelector('#firstname-message')
const lastnameMessage = $.querySelector('#lastname-message')
const submitBtn = $.querySelector('#submit-btn')

let usernameValid,firstnameValid,lastnameValid = null

usernameInput.addEventListener('keypress', e => {
    if(e.target.value.length < 8) {
        usernameMessage.innerHTML = "Username is not valid"
        usernameMessage.classList.remove('valid-message')
        usernameMessage.classList.add('invalid-message')
        usernameValid = false
    }else {
        usernameMessage.innerHTML = "Username is valid :))"
        usernameMessage.classList.remove('invalid-message')
        usernameMessage.classList.add('valid-message')
        usernameValid = true
    }
})

firstnameInput.addEventListener('keypress', e => {
    if(e.target.value.length < 3) {
        firstnameMessage.innerHTML = "Firstname is not valid"
        firstnameMessage.classList.remove('valid-message')
        firstnameMessage.classList.add('invalid-message')
        firstnameValid = false
    }else {
        firstnameMessage.innerHTML = "Firstname is valid :))"
        firstnameMessage.classList.remove('invalid-message')
        firstnameMessage.classList.add('valid-message')
        firstnameValid = true
    }
})

lastnameInput.addEventListener('keypress', e => {
    if(e.target.value.length < 3) {
        lastnameMessage.innerHTML = "Lastname is not valid"
        lastnameMessage.classList.remove('valid-message')
        lastnameMessage.classList.add('invalid-message')
        lastnameValid = false
    }else {
        lastnameMessage.innerHTML = "Lastname is valid :))"
        lastnameMessage.classList.remove('invalid-message')
        lastnameMessage.classList.add('valid-message')
        lastnameValid = true
    }
})

submitBtn.addEventListener('click', e => {
    e.preventDefault()
    
    if(usernameValid && firstnameValid && lastnameValid ) {
        let newUserData = {
            firstName: usernameInput.value,
            lastName: lastnameInput.value,
            userName: usernameInput.value,
            profile: 'content/img/profile/banana.png',
        }
        fetch('http://localhost:3000/api/users', {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(newUserData)
        }).then(res => {
            console.log(res)
            clearInputs()
        })
    }else {
        alert("please fill all of the inputs")
    }
})

function clearInputs () {
    usernameInput.value = ""
    firstnameInput.value = ""
    lastnameInput.value = ""

    usernameInput.focus()
}