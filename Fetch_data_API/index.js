// fetch = function used for making http requests to fetch resouces.
//         (JSON style data. Image, Files)
//         Simplefies asynchronous data fetching in javascript and
//         used for intracting with APIs to retrieve and send 
//         data asynchronous over the web
//         fetch(url, {options})

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(respon => {
//         if(!respon.ok){
//             throw new Error("Not sourches");
//         }
//         return respon.json();
//     })
//     .then(value => console.log(value))
//     .catch(error => console.error(error));
fetchData();

async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const respon = await fetch(`https://pokeapi.co/api/v2/pokemon/mewtwo`);
        if(!respon.ok){
            throw new Error("could not fetch resource");
        }
        const data = await respon.json();
        console.log(data);
        const pokemonSprite = data.sprites.front_shiny;        ;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}