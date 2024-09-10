const $ = document

const searchInput = $.querySelector('#inp-word')
const searchBtn = $.querySelector('button')
const result = $.querySelector('.result')
const audio = $.getElementById('sound')

const search = () => {
    let searchKey = searchInput.value 
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchKey}`)
    .then( dictionary => dictionary.json())
    .then( respons => {
        let responses = respons[0]
        result.innerHTML = `<div class="word">
        <h3>${responses.word}</h3>
        <button onclick='playSound()'>
          <i class="fas fa-volume-up"></i>
        </button>
      </div>
      <div class="details">
        <p>${responses.meanings[0].partOfSpeech}</p>
        <p>/${responses.phonetic}/</p>
      </div>
      <p class="word-meaning">
          ${responses.meanings[0].definitions[0].definition}
      </p>
      <p class="word-example">
          ${responses.meanings[0].definitions[0].example || "no word-example find for this word :("}
      </p>`
      audio.setAttribute("src",responses.phonetics[0].audio) 
    })
    .catch( () => {
      result.innerHTML = `<h3 class="error">could't find word </h3>`
    })
}

function playSound () {
  audio.play()
}

searchBtn.addEventListener('click', search)