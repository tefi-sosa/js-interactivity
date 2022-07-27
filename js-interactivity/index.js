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
        message.textContent = "Movie watched!"
    } else {
        message.textContent = "Movie added back!"
    }
}

function deleteMovie (event) {
    event.target.parentNode.remove()
    message.textContent = "Movie deleted!"
}

