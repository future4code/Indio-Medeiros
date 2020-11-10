import React, {useState, useEffect} from "react";
import axios from "axios";



export default function PokeCard (props) {
  //state
  const [pokemon, setPokemon] = useState({})

 const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        setPokemon(response.data)
        
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    pegaPokemon(props.pokemon)
    if (pokemon !== props.pokemon) {
      setPokemon(props.pokemon);
    }
  }, [props.pokemon])

  return (<div>
    <p>{pokemon.name}</p>
  <p>{pokemon.weight}Kg</p>
  {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
   
  </div>

  )

  
 
  }


