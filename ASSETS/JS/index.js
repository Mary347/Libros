const getBookData = () => {
  const url ='https://www.googleapis.com/books/v1/volumes?q=FRASE';
  return fetch(url, {method: 'Get'})
  .then((response) => {
    return response.json()
  })
  .catch((error) => console.log (error))
}
const render = (response) => {
  const container = document.getElementById("list-book")
  console.log(container)

  const card= response.items.map((item) => {
    console.log(item.volumeInfo.title)
    return `
<div class="card" style="width: 18rem;">
  <img src=${item.volumeInfo.imageLinks.thumbnail} class="card-img-top" alt="Portada">
  <div class="card-body">
    <h5 class="card-title">${item.volumeInfo.title}</h5>
    <p class="card-text">${item.volumeInfo.publisher}</p>
    <a href=${item.volumeInfo.previewLink} class="btn btn-primary">Ver libro</a>
  </div>
</div>
`;
  })

container.innerHTML = card;
}

getBookData()
.then(response => { 
  render(response)
})