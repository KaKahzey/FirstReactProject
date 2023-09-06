import Link from 'next/link';
import { useEffect, useState } from 'react'


export default function Api() {

  const [pokemonList, setPokemonList] = useState([])
  useEffect(() =>{

    async function fetchAllPokemon() {
      let nextUrl = 'https://pokeapi.co/api/v2/pokemon';
      let allPokemon = []

      while (nextUrl) {
        const response = await fetch(nextUrl);
        const data = await response.json();
        allPokemon.push(...data.results)
        nextUrl = data.next;
      }
    
      setPokemonList(allPokemon)

    }

    fetchAllPokemon()

  }, [])
  
  return (
    <div>
      <Link href="/">retour home</Link>
      <h1>Liste des pokemons</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  )
}