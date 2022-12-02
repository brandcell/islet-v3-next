import Navbar from '../Navbar/navBar';
import { motion } from 'framer-motion';

function BlackLayout({children}) {
  return (
    <motion.div
    style={{overflowX:'hidden'}}>
    
        <Navbar color='white'/>

        {children}

    </motion.div>
  )
}

export default BlackLayout;