import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/elements/Header'
import Footer from './components/elements/Footer'

// Pages
import Accueil from './components/Accueil'
import Produit from './components/Produit'



function App() {
//1 - Global
  return (
    <BrowserRouter>
      <div>
        <div className='col-12'>
          <Header/>
        </div>
        <Routes>
          <Route path="/build" element={<Accueil/>}/>
          <Route path='/build/accueil' element={<Accueil/>}/>
          <Route path='/build/produit' element={<Produit/>}/>
        </Routes>
        <div className='col-12'>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;


//https://codeshare.io/wnvlEK