import React, {useState, useEffect} from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard";


export default function App () {
  //state
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  const changePokeName = event => {
    setPokeName(event.target.value)
  }

  //pegaLista
  const getPokeList = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => { 
        setPokeList(response.data.results)
        
      })
      .catch((erro) => {
        console.log(erro)
      })
  }

  useEffect(() => {
    getPokeList(pokeName)
   
  },[pokeName])


  return (<div className="App">
    <select onChange={changePokeName}>
      <option value={""}>Nenhum</option>
      {pokeList.map((pokemon) => {
        return (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        )
      })}
    </select>

    {pokeName && <PokeCard pokemon={pokeName}/>}
    
  </div> 

  )  
}

