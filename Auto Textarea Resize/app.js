const $ = document
const textArea = $.querySelector('textarea')
textArea.addEventListener('input', (e) => {
    textArea.style.height = "auto"
    textArea.style.height = e.target.scrollHeight + "px"
})