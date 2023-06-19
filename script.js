const form = document.getElementById('pokemonForm');
const pokemonNameInput = document.getElementById('pokemonName');
const pokemonInfoDiv = document.getElementById('pokemonInfo');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const pokemonName = pokemonNameInput.value.toLowerCase();
  const pokemonData = await fetchPokemonData(pokemonName);
  displayPokemonInfo(pokemonData);
});

const fetchPokemonData = async (pokemonName) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const data = await response.json();
  return data;
};

const displayPokemonInfo = (pokemonData) => {
  const pokemonCard = document.createElement('div');
  pokemonCard.classList.add('card');

  const pokemonImage = document.createElement('img');
  pokemonImage.src = pokemonData.sprites.front_default;
  pokemonImage.alt = pokemonData.name;

  const pokemonName = document.createElement('h2');
  pokemonName.textContent = pokemonData.name;

  pokemonCard.appendChild(pokemonImage);
  pokemonCard.appendChild(pokemonName);

  pokemonInfoDiv.innerHTML = '';
  pokemonInfoDiv.appendChild(pokemonCard);
};
