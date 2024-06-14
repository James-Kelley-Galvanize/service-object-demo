import "./App.css";
import pokeAPI from "./services/api_service";
import { useEffect, useState } from "react";

function App() {
  let [pokeData, setPokeData] = useState(false);

  useEffect(() => {
    pokeAPI.getPokemon("zapdos").then((data) => {
      setPokeData(data);
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    let searchTerm = document.querySelector("#poke-search").value;

    pokeAPI.getPokemon(searchTerm).then((data) => {
      setPokeData(data);
    });
  }

  return pokeData ? (
    <div className="App">
      <header className="App-header">
        <div>{pokeData.name}</div>
        <div>{pokeData.id}</div>
        <div>{pokeData.types[0].type.name}</div>
        <img src={pokeData.sprites.front_default} />
        <br />
        <form onSubmit={handleSubmit}>
          <input id="poke-search" type="text" />
          <input type="submit" />
        </form>
      </header>
    </div>
  ) : (
    <>Loading</>
  );
}

export default App;
