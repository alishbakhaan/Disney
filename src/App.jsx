import { useState } from 'react'
import Header from './Components/Header/Header'
import Slider from './Components/Header/Slider'
import ProductionHouse from './Components/Header/ProductionHouse'
import GenreMovieList from './Components/Header/GenresList/GenreMovieList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Slider/>
    <ProductionHouse/>
    <GenreMovieList/>
    </>
  )
}

export default App
