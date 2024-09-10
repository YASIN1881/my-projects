const $ = document

const password = $.querySelector('#password')
const warning = $.querySelector('#warning')

const massageAlert = (e) => {
    if(e.getModifierState('CapsLock')) {
        warning.style.display = 'block'
    }else{
        warning.style.display = 'none'
    }
}

password.addEventListener('keypress',massageAlert)