const $ = document
const usersWrapper = $.querySelector('.users-wrap')
const removeModal = $.querySelector('.remove-modal')
const uesrNameInput = $.querySelector('#username-input')
const firstNameInput = $.querySelector('#first-name-input')
const lastNameInput = $.querySelector('#last-name-input')
let mainUserID = null

window.addEventListener('load', getAllUsers)

function getAllUsers () {
    fetch('http://localhost:3000/api/users')
    .then(res => res.json())
    .then(data => {
        usersWrapper.innerHTML = ''

        data.forEach( user => {
            usersWrapper.insertAdjacentHTML("beforeend",`
            <div class="user-box">
                        <div class="user-box_left">
                            <img src="${user.profile}" class="user-profile-box" alt="">
                            <div class="user-detail">
                                <h1 class="user-id">
                                    <span>${user.userName} <!-- username --> </span>
                                    <span class="user-history"> ${user.created_AT} <!-- history --> </span>
                                </h1>
                                <h3 class="user-name">${user.firstName} ${user.lastName} <!-- user name (first name and last name) --> </h3>
                            </div>
                        </div>

                        <div class="user-btns-group">
                            <!-- ! ------------------------------ edit btn ------------------------------- ! -->
                            <button onclick=showEditModal('${user._id}') class="user-edit-btn">
                                edit
                            </button>
                            <!-- ! ----------------------------- remove btn ------------------------------ ! -->
                            <button onclick="showModal('${user._id}')" class="user-remove-btn">
                                remove
                            </button>
                        </div>
                    </div> 
            `)
        })
    })
}

//Remove Modal

function showModal (userID) {
    console.log(userID);
    mainUserID = userID
    removeModal.classList.add('visible')
}

function closeModal () {
    removeModal.classList.remove('visible')
}

function removeUser () {
    fetch(`http://localhost:3000/api/users/${mainUserID}`, {
        method: 'DELETE'
    }).then(res => {
        closeModal()
        getAllUsers()
    })
}

// Edit Modal

function showEditModal (userID) {
    removeModal.classList.add('visible')
    mainUserID = userID
}

function updateUser (event) {
    event.preventDefault()
    let newUserData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        userName: uesrNameInput.value,
        profile: 'content/img/profile/banana.png',
    }
    fetch(`http://localhost:3000/api/users/${mainUserID}`,{
        method: 'PUT',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(newUserData)
    }).then(res => {
        console.log(res);
        closeModal()
        clearInputs()
        getAllUsers()
    })
}

function clearInputs () {
    uesrNameInput.value = ""
    firstNameInput.value = ""
    lastNameInput.value = ""
}

window.addEventListener('keydown', e => {
    if(e.keyCode === 27) {
        closeModal()
    }
})