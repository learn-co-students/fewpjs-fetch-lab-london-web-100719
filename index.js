function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books') // HTTP request to remote API, API responds with data requested
    .then(resp => resp.json()) // convert JSON into object 
    .then(json => renderBooks(json)) // call renderBooks() on this object 
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
