let message = document.querySelector("#message")

function addMovie (event) {
    event.preventDefault()
    let imputField = document.querySelector("input")
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = imputField.value
    movie.appendChild(movieTitle)
    document.querySelector('ul').appendChild(movie)

    movieTitle.addEventListener("click", crossOffMovie)

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X"
    movie.appendChild(deleteBtn)

    deleteBtn.addEventListener("click", deleteMovie)

    imputField.value = ""
}

document.querySelector('form').addEventListener("submit", addMovie)

function crossOffMovie (event) {
    event.target.classList.toggle("checked")
    if (event.target.classList.contains("checked")) {
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage()
}

function deleteMovie (event) {
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    revealMessage()
}

function revealMessage () {
    message.classList.remove("hide")
    setTimeout(() => {
        message.classList.add("hide")
    }, 1000)
}