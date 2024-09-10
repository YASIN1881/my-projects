const $ = document
const tagInput = $.querySelector('input');
const tagList = $.querySelector('ul');
const counter = $.querySelector('.details p span');
const removeAll = $.querySelector('button');

let tagArray = []

function creatTag (e) {
    if(e.keyCode === 13) {
        if(counter.innerHTML == 0){
            tagInput.value = ""
        }else{
            let tagName = e.target.value.split(",")
            tagName.forEach( (tag) => {
                tagArray.push(tag)
                tagList.insertAdjacentHTML('afterbegin',`<li>${tag} <i class="uit uit-multiply" onclick="removeTag(this,'${tag}')"></i></li>`)
            })
            tagInput.value = ""
            counterTag()
        }
    }
}

function removeTag (tag, tagName) {
    tag.parentElement.remove()
    let findIndex = tagArray.findIndex(tagItem => tagItem === tagName)
    tagArray.splice(findIndex,1)
    counterTag()
}

function counterTag () {
    let count = 10 - tagArray.length
    if(count < 0) {
        counter.innerHTML = 0
    }else{
        counter.innerHTML = count
    }
}

const removeTagAll = () => {
    $.querySelectorAll("li").forEach( li => li.remove())
    tagArray.length = 0
    counterTag()
}

tagInput.addEventListener('keypress', creatTag)
removeAll.addEventListener('click', removeTagAll)
