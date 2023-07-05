import Home from './Home';
import {Routes, Route, useLocation} from 'react-router-dom';


import {AnimatePresence } from "framer-motion";


const AnimeRoutes = () => {
  const location = useLocation();
    return (
      <AnimatePresence>
        
          <Routes location={location} key={location.pathname}>
            <Route path="/"  element={<Home/>}/>
          </Routes>
          
        
      </AnimatePresence>
    );
}

export default AnimeRoutes;
