import './App.css'
import Header from './components/Header'
import CharacterGallery from './components/CharacterGallery'
import characterResponse from './characters-response.json'
import { useState } from 'react'

function App() {
  const [characters,setCharacter] = useState([])
  const [search, setSearch] = useState('')

  const loadCharacters = () => {
    setCharacter(characterResponse.results)
  }

  const hideCharacters = () => {
    setCharacter([])
  }

  const filteredCharacter = characters.filter(character =>
    character.name.toLowerCase().includes(search.toLowerCase()))

  const handleSearch = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
  }

  return (
    <div>
      <Header title="Character Gallery" />
      <button onClick={loadCharacters}>Load Characters</button>
      <button onClick={hideCharacters}>Hide Characters</button>
      <input type="text" onChange={handleSearch} value={search}/>

      <CharacterGallery characters={filteredCharacter} />
    </div>
  )
}

export default App
