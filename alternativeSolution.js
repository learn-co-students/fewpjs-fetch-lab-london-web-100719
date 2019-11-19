function fetchBooks() {
 
  return fetch('https://anapioficeandfire.com/api/books')    // call api
    .then(resp => resp.json())                        // render response in json
    // .then(json => renderBooks(json));                 // hand over json to renderBooks function 
     // return fetch
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
  // retutrn fetch()
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

 fetchBooks().then(renderBooks)
