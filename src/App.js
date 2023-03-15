import React from "react"

import './App.css'
import Navbar from './components/navbar-component/navbar-component.js'
import Hero from './components/hero-component/hero-component.jsx'
import About from "./components/about-component/about-component"

const App = () => {

  return (
<div className="App">

     

<div className="content">

<Navbar />
      <Hero />
      
      </div>
      <About />

</div>
  );
}
 
export default App;
