//variables globales
var pageInitial = 20;


window.addEventListener('load', () => {
    cargarPokemones();
});

function cargarPokemones(page = 20) {
    var urlBase = 'https://pokeapi.co/api/v2/pokemon/?offset=' + page +'&limit=20'; 
    console.log(urlBase);
    axios.get(urlBase, {
        responseType: 'json'
    }).then(function (res) {
        if (res.status == 200) {
            ordenarPokemones(res.data.results);
        }
    }).catch(function (err) {
        console.log(err);
    })
}

function ordenarPokemones(pokemones = []){
    pokemones.forEach(pokemon => {
        obtenerPokemon(pokemon.url)
    });
}

function obtenerPokemon(url){
    axios.get(url, {
        responseType: 'json'
    }).then(function (res){
        if(res.status == 200){
            var sectionPokemon = document.getElementById("pokemon_detail");
            let card = document.createElement("article");
            let header = document.createElement("div");
            let img = document.createElement("img");
            let title = document.createElement("h3");

            let body = document.createElement("div");
            
            title.textContent = res.data.name;
            img.src = res.data.sprites.other.home.front_default;

            card.classList.add("card_pokemon");
            header.classList.add("encabezado_pokemon");
            img.classList.add("img_pokemon");
            title.classList.add("titulo_pokemon");
            body.classList.add("body_card_pokemon");
            header.appendChild(img);
            header.appendChild(title);
            card.appendChild(header);
            card.appendChild(body);
            sectionPokemon.appendChild(card);


        }
    }).catch(function (err) {
        console.log(err)
    });
}

function nextPage (){
    pageInitial = pageInitial + 20;
    cargarPokemones(pageInitial);
}

function previousPage (){
    pageInitial = pageInitial - 20;
    cargarPokemones(pageInitial);
}