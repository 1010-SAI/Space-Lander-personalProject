
import '../css/Home.css';
import Nav from './Nav_bar';
import { motion } from "framer-motion";
import { BoxAnimation } from './BoxAnimation';
import { Explore } from './Explore';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MapIcon from '@mui/icons-material/Map';
import { Box } from '@mui/material';
import { Scale } from '@mui/icons-material';






const Home = () => {



    return (
      <motion.div
              /*initial={{width: 0}}
                animate={{ width: "100%" }}
                exit={{x: window.innerWidth, transition: { duration: 0.1}}}
            
              */
            >
        <header className='headerHome'>
          <Nav/>  
        </header>

          <div className='body_home'>
            <div className='left_body'>
              <div>
                <p>Your Travel Guide</p>
              </div>
              <div>
                <h1>
                  Explore<br/> must-see<br/> place
                </h1>
              </div>
              <div>
                Escape to Paradise: Unlock a World <br/>of Adventure and Wonder
              </div>
            </div>

            <div className='all_tools'>
              <div className='exploration'>
                <Explore/>
              </div>
              <div className='tools'>
                <BoxAnimation/>
                <BoxAnimation/>
              </div>
            </div>

            <div className='right_body'>
              <div>
                <motion.div
                  initial={{scale: 1}}
                  whileHover={{scale: 1.2, rotate:360}}
                 className='right_icon'>
                  <AutoFixHighIcon sx={{color:"grey",width:"50px"}}/>
                </motion.div>
                <Box sx={{color:"whitesmoke"}}>Feedback</Box>
              </div>

              <div>
                <motion.div
                  initial={{scale: 1}}
                  whileHover={{scale: 1.2, rotate:360}}
                  className='right_icon'>
                  <FavoriteIcon sx={{color:"grey",width:"50px"}}/>
                </motion.div>
                <Box sx={{color:"whitesmoke"}}>Saved</Box>
              </div>

              <div>
                <motion.div
                    initial={{scale: 1}}
                    whileHover={{scale: 1.2,rotate: 360}}
                    className='right_icon'>
                  <MapIcon sx={{color:"grey",width:"50px"}}/>
                </motion.div>
                <Box sx={{color:"whitesmoke", align:"center"}}>Map</Box>
              </div>
            </div>
            
          </div>
        
        
        


          
      </motion.div>
    );
}

export default Home;
