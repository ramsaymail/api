const apiData= {
    url: 'https://pokeapi.co/api/v2/', // call pokeman api
    type: 'pokemon',
    id: '31', // pokemon Number ID ...different characters
}

const {url, type, id} = apiData // constant variable
const apiUrl = `${url}${type}/${id}` // constant variable

// fetch and jasonify
fetch(apiUrl)
    .then( (data) => data.json())
    .then( (pokemon) => generateHtml(pokemon))

// grab api data
const generateHtml = (data) => {
    console.log(data)
    const html = `
        <div class="name">${data.name}</div>
        <img src=${data.sprites.front_default}>
        <div class = "details">
        <span>Height in feet: ${data.height}</span>
        <span>Weight in kilo's: ${data.weight}</span>
        </div>
    `
    // put into html pokemon class
    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
}