const pokemonDetailUrl = `https://pokeapi.co/api/v2/pokemon/`;
const gameGenerationUrl = `https://pokeapi.co/api/v2/generation/`;
const berryDataUrl = ` https://pokeapi.co/api/v2/berry/`;

let apiService = {
  async getPokemon(pokemonName) {
    if (typeof pokemonName === "string")
      pokemonName = pokemonName.toLowerCase();
    const res = await fetch(`${pokemonDetailUrl}${pokemonName}`);
    const json = await res.json();
    return json;
  },
  async getGamesByGeneration(generationNumber) {
    const res = await fetch(`${gameGenerationUrl}${generationNumber}`);
    const json = await res.json();
    return json;
  },
  async getBerries(berryName) {
    const res = await fetch(`${berryDataUrl}${berryName}`);
    const json = await res.json();
    return json;
  },
};

export default apiService;
// module.exports = apiService;
