import './App.css'
import Header from './components/Header'
import CharacterGallery from './components/CharacterGallery'
import characterResponse from './characters-response.json'
import { useState } from 'react'

function App() {
  const [characters,setCharacter] = useState([])

  const loadCharacters = () => {
    setCharacter(characterResponse.results)
  }

  const hideCharacters = () => {
    setCharacter([])
  }

  return (
    <div>
      <Header title="Character Gallery" />
      <button onClick={loadCharacters}>Load Characters</button>
      <button onClick={hideCharacters}>Hide Characters</button>
      <CharacterGallery characters={characters} />
    </div>
  )
}

export default App
