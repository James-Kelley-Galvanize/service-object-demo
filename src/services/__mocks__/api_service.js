import { dittoData, generationOneData, cheriData } from "./mockData";

const mockApiService = {
  async getPokemon(pokemonName) {
    return dittoData;
  },
  async getGamesByGeneration(generationNumber) {
    return generationOneData;
  },
  async getBerries(berryName) {
    return cheriData;
  },
};
export default mockApiService;
