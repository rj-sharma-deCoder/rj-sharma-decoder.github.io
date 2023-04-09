import { useState } from 'react'

import './App.css'


// Import Components
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
          <Navbar/>
          <Banner />
          <About />
          <Projects />
          <Contacts />
    </div>
  )
}

export default App
