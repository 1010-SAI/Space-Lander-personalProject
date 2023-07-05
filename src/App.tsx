import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom';
import AnimeRoutes from './components/AnimeRoutes';



function App() {


  return (
    <>
    <Router>
      <AnimeRoutes /> 
    </Router>
    </>
  )
}

export default App
