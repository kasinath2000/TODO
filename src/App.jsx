import { useState } from 'react'
import './App.css'

import AddToodo from './components/AddToodo'
import Toodos from './components/Todos'

function App() {

  return (
    <>
     <AddToodo/>
     <Toodos/>
    </>
  )
}

export default App
