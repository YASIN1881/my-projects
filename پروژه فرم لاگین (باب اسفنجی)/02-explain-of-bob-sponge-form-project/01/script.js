////////////////////// روش استاد  //////////////////////
let rightEye = document.querySelector(".righteye")
let leftEye = document.querySelector(".lefteye")
let userInput = document.querySelector("#userInput")
let passInput = document.querySelector("#passInput")

let leftEyeTop = 75
let leftEyeLeft = 110
let leftEyePaddingTop = 0
let leftEyePaddingLeft = 0

let rightEyeTop = 75
let rightEyeLeft = 175
let rightEyePaddingTop = 0
let rightEyePaddingLeft = 0

const userInputFocus = () => {
    console.log("userInputFocus");
    let eyePosition = setInterval(() =>{
        if(rightEyePaddingTop === 10){
            clearInterval(eyePosition)
        }

        leftEye.style.paddingTop = leftEyePaddingTop + "px"
        leftEye.style.left = leftEyeLeft + "px"

        rightEye.style.paddingTop = rightEyePaddingTop + "px"
        rightEye.style.left = rightEyeLeft + "px"

        leftEyePaddingTop++
        leftEyeLeft--
        
        rightEyePaddingTop++
        rightEyeLeft--
    },10)
}

const userInputBlur = () => {
    console.log("userInputBlur");
    let eyePosition = setInterval(() =>{
        if(rightEyePaddingTop === 0){
            clearInterval(eyePosition)
        }

        leftEye.style.paddingTop = leftEyePaddingTop + "px"
        leftEye.style.left = leftEyeLeft + "px"

        rightEye.style.paddingTop = rightEyePaddingTop + "px"
        rightEye.style.left = rightEyeLeft + "px"

        leftEyePaddingTop--
        leftEyeLeft++
        
        rightEyePaddingTop--
        rightEyeLeft++
    },10)
}

const userKeyHandler = (event) => {
    console.log("userKeyHandler",event);

    let {keyCode} = event

    if(leftEyePaddingLeft > 20) {
        return false
    }

    if(keyCode === 8) {
        leftEyePaddingLeft--
        rightEyePaddingLeft--
    }else{
        leftEyePaddingLeft++
        rightEyePaddingLeft++
    }

    leftEye.style.paddingLeft = leftEyePaddingLeft + "px"

    rightEye.style.paddingLeft = rightEyePaddingLeft + "px"

}

const passInputFocus = () => {
    console.log("passInputFocus");
    let eyePosition = setInterval(() => {
        if(leftEyeTop === 60){
            clearInterval(eyePosition)
        }

        leftEye.style.top = leftEyeTop + "px"
        leftEye.style.left = leftEyeLeft + "px"

        rightEye.style.top = rightEyeTop + "px"
        rightEye.style.left = rightEyeLeft + "px"

        leftEyeTop--
        leftEyeLeft++

        rightEyeTop--
        rightEyeLeft--

    },10)
}

const passInputBlur = () => {
    console.log("passInputBlur");
    let eyePosition = setInterval(() => {
        if(leftEyeTop === 75){
            clearInterval(eyePosition)
        }

        leftEye.style.top = leftEyeTop + "px"
        leftEye.style.left = leftEyeLeft + "px"

        rightEye.style.top = rightEyeTop + "px"
        rightEye.style.left = rightEyeLeft + "px"

        leftEyeTop++
        leftEyeLeft--

        rightEyeTop++
        rightEyeLeft++

    },25)
}

userInput.addEventListener("focus",userInputFocus)
userInput.addEventListener("blur",userInputBlur)
userInput.addEventListener("keydown",userKeyHandler)

passInput.addEventListener("focus",passInputFocus)
passInput.addEventListener("blur",passInputBlur)














////////////////////// روش خودم  //////////////////////
// let $ = document
// const userInput = $.querySelector("#userInput")
// const passInput = $.querySelector("#passInput")
// const leftEye = $.querySelector("#lefteye")
// const rightEye = $.querySelector("#righteye")


// /////// focus input ///////

// userInput.addEventListener("focus", event =>{
    
//     leftEye.style.left = "100px"
//     leftEye.style.top = "83px"
//     rightEye.style.left = "164px"
//     rightEye.style.top = "84px"

//     userInput.addEventListener("keydown", e => {
//         let {target} = e
//         let inputLength = target.value.length

//         leftEye.style.left = `calc(100px + ${inputLength}px)`
//         rightEye.style.left = `calc(164px + ${inputLength}px)`

//         if(inputLength >= 20) {
//             leftEye.style.left = "119px"
//             rightEye.style.left = "184px"
//         }
//     })

// })

// passInput.addEventListener("focus", e => {
//     leftEye.style.left = "126px"
//     leftEye.style.top = "65px"
//     rightEye.style.left = "160px"
//     rightEye.style.top = "64px"
// })

// /////// blur input ///////

// userInput.addEventListener("blur", e => {
//     leftEye.style.left = "110px"
//     leftEye.style.top = "75px"
//     rightEye.style.left = "174px"
//     rightEye.style.top = "75px"
// })

// passInput.addEventListener("blur", e => {
//     leftEye.style.left = "110px"
//     leftEye.style.top = "75px"
//     rightEye.style.left = "174px"
//     rightEye.style.top = "75px"
// })