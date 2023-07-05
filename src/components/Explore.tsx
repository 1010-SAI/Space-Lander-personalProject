import { motion } from "framer-motion";
import space from "../assets/image/space-lander.png";
import '../css/explore.css'

export const Explore = () => (
    <motion.div>
        <div className="explore">
            <p className="h1_explore">Welcone to a new vision</p>
            <motion.img src={space} 
                drag
                whileDrag={{rotate: -10, scale: 1.1,transition:{duration: 0.5}}}
                dragConstraints={{
                    left:100,
                    right:50,
                    bottom:100
                }} 
                className="space_lander"/>
        </div>
    </motion.div>
  );