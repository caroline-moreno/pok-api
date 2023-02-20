const url = "https://pokeapi.co/api/v2/pokemon?limit=120&offset=0"; // acessa o api interno

function fetchPokemon(url) {
  // função que recebe a url do pokemon
  return fetch(url) // acessa o api interno
    .then((data) => data.json()) // tranfere os dados para o .json
    .catch((err) => console.log(err)); // conferir os erros
}

async function showId(url) {
  // url da solicitação
  const data = await fetchPokemon(url);
  const pooke = data.results[cont].url;
  return fetch(pooke).then((data) => data.json());
}

let cont = 0;
async function pokeContador() {
  // contador para rodar todos os pokémons
  while (cont < 120) {
    const dawait = await showId(url);
    const pokeName = dawait.name;
    const pokeId = dawait.id;
    const pokeType = dawait.types;
    const pokeImg =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      pokeId +
      ".png";

    const card = document.getElementById("card-pokemon");
    const oqColocar = document.createElement("div");
    const favPoke = document.getElementById("checkbox-content");

    oqColocar.className = "aa";
    oqColocar.innerHTML = `
            <div class="title-id">
                <p class="numeropoke"><b>N°${pokeId}</b></p>
                <p class="nomepoke">${pokeName}</p>
                <div id="tipo${cont}">
                <div class="tipo-pokemon" id="${pokeType[0].type.name}"></div>
                </div>
            </div>
            <div class="image">

                <img class="pokezin" src="${pokeImg}" alt="">
            </div>
        `;
    card.appendChild(oqColocar);

    for (i in pokeType) {
      let pokeTypes = pokeType[i];
      const colocarTexto = document.getElementById("tipo" + cont);
      const criarParag = document.createElement("div");
      criarParag.className = "tipopoke";
      criarParag.innerHTML = `
                <p> ${pokeTypes.type.name} </p>
            `;

      if (pokeType[i].type.name == "poison") {
        criarParag.style.background = "#975ABC";
      }
      if (pokeType[i].type.name == "grass") {
        criarParag.style.background = "#63BC5A";
      }
      if (pokeType[i].type.name == "fire") {
        criarParag.style.background = "#FF9D55";
      }
      if (pokeType[i].type.name == "flying") {
        criarParag.style.background = "#AFDCE2";
      }
      if (pokeType[i].type.name == "water") {
        criarParag.style.background = "#5090D6";
      }
      if (pokeType[i].type.name == "bug") {
        criarParag.style.background = "#319452";
      }
      if (pokeType[i].type.name == "normal") {
        criarParag.style.background = "#BACADB";
      }
      if (pokeType[i].type.name == "ground") {
        criarParag.style.background = "#B97C59";
      }
      if (pokeType[i].type.name == "electric") {
        criarParag.style.background = "#FFEF5A";
      }
      if (pokeType[i].type.name == "psychic") {
        criarParag.style.background = "#FFD159";
      }
      if (pokeType[i].type.name == "fighting") {
        criarParag.style.background = "#F2904A";
      }
      if (pokeType[i].type.name == "rock") {
        criarParag.style.background = "#929292";
      }
      if (pokeType[i].type.name == "ghost") {
        criarParag.style.background = "#D35757";
      }
      if (pokeType[i].type.name == "ice") {
        criarParag.style.background = "#C7DBFB";
      }
      colocarTexto.appendChild(criarParag);
    }
    cont++;
  }
}

pokeContador();
