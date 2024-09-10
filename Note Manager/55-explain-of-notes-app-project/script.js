window.addEventListener('load', () => {
  if(localStorage.getItem("notes")){
    notes = JSON.parse(localStorage.getItem("notes"));
    generateNoteLi(notes)
  }
})

const $ = document;
const days = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday",];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December",];
//////////////////////////////////////////////////////////////////////////////////////////

let now = new Date();
let month = months[now.getMonth()];
let date = now.getDate();
let year = now.getFullYear();
let day = days[now.getDay()];
//////////////////////////////////////////////////////////////////////////////////////////

const addNewNote = $.querySelector(".add-box");
const popupBox = $.querySelector(".popup-box");
let popupHeader = $.querySelector(".content p");
const popupHeaderClose = $.querySelector(".uil-times");
const popupTitle = $.querySelector(".title input");
const popupDescription = $.querySelector(".description textarea");
let popupButton = $.querySelector("button");
const wrapper = $.querySelector(".wrapper");
//////////////////////////////////////////////////////////////////////////////////////////

let notes = []

function addNote() {
  popupBox.classList.add("show");
  let popupHeaderTitle = "Add New Note";
  let popupButtonTitle = "Add Note";
  generateNote(popupHeaderTitle, popupButtonTitle);
  popupHeaderClose.addEventListener("click", closePopup);
}

function closePopup() {
  popupBox.classList.remove("show");
}

function generateNote(headerTitle, buttonTitle) {
  popupHeader.innerHTML = headerTitle;
  popupButton.innerHTML = buttonTitle;

  popupButton.addEventListener("click", addNoteToDom);
}

function addNoteToDom() {
  let noteInfo = {
    id: notes.length+1,
    title: popupTitle.value,
    description: popupDescription.value,
    date: `${month} ${date},${year}(${day})`
  };
  notes.push(noteInfo)
  
  setNoteLocalStorage (notes)
  closePopup();
  let noteLocalStorage = getNoteLocalStorage();
  clearValue();
  generateNoteLi(noteLocalStorage);
}

function setNoteLocalStorage (notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function getNoteLocalStorage () {
  return JSON.parse(localStorage.getItem("notes"))
}

function clearValue() {
  popupTitle.value = "";
  popupDescription.value = "";
}

function generateNoteLi (notes) {
  $.querySelectorAll('.note').forEach( note => note.remove())
  notes.forEach( (note, index) => {
    wrapper.insertAdjacentHTML(
      "beforeend",
      `      
      <li class="note">
      <div class="details">
        <p>${note.title}</p>
        <span>${note.description}</span>
      </div>
      <div class="bottom-content">
        <span>${note.date}</span>
        <div class="settings" onclick=showMore(this)>
          <i class="uil uil-ellipsis-h"></i>
          <ul class="menu">
            <li onclick=editNote(${index})>
              <i class="uil uil-pen"></i>Edit
            </li>
            <li onclick=deleteNote(${index})>
              <i class="uil uil-trash"></i>Delete
            </li>
          </ul>
        </div>
      </div>
    </li>`
    );
  })
}

function showMore(elem) {
  elem.classList.add("show");
}

function editNote (noteId) {
  let newNotes = getNoteLocalStorage()[noteId]
  let newTitle = newNotes.title
  let newDescription = newNotes.description
  // let newDate = newNotes.date
  let newHeaderTitle = "Update Note"
  let newButtonTitle = "Update Note"
  generateNote(newHeaderTitle,newButtonTitle)
  $.querySelector(".title input").value = newTitle
  $.querySelector(".description textarea").value = newDescription
  popupBox.classList.add("show");
  $.querySelector("button").addEventListener('click', () => {

    newNotes.title = $.querySelector(".title input").value
    newNotes.description = $.querySelector(".description textarea").value
  })
  if(popupHeaderClose.click()){
    closePopup()
  }
}

function deleteNote (noteId) {
  let deleteNote = confirm("Are You Sure Want Delet Note?")
  if(deleteNote){
    let newNotes = getNoteLocalStorage()
    newNotes.splice(noteId,1)
    setNoteLocalStorage(newNotes)
    generateNoteLi(newNotes)
  }
}

addNewNote.addEventListener("click", addNote);
window.addEventListener("keyup", (e) => {
  if (e.keyCode === 27) {
    closePopup();
    $.querySelector(".settings").classList.remove("show");
  }
});