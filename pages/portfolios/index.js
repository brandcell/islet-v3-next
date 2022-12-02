import axios from "axios";

import { API_URL } from "../../utils/urls";

import { motion, AnimatePresence } from "framer-motion";

import {
  CategoryAnimationVariants,
  PortCardVariants,
} from "./category/[category]";

import PortfolioCard from "../../components/portfolio-card/portfolio-card";

import styles from "../../styles/portfolio.module.css";
import CategoryLayout from "../../components/layouts/category-layout.component";

//if need to get props server side-- for things that need to generate every time client refreshes
// export async function getServerSideProps(){

//   const portfoliosRes= await axios.get('http://localhost:1337/api/portfolios');

//   console.log(portfoliosRes.data)

//   return{
//     props:{
//       posts: portfoliosRes.data.data

//     }
//   }

// }

//if need to generate statically
export async function getStaticProps() {
  const portfoliosRes = await axios.get(`${API_URL}/api/portfolios?populate=*`);

  return {
    props: {
      portfolios: portfoliosRes.data.data,
    },
  };
}

export default function Portfolio({ portfolios }) {
  return (
    <AnimatePresence>
      <motion.div
        variants={CategoryAnimationVariants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit"
        className={styles.portfolioGrid}
      >
        {portfolios.map((port, index) => (
          <motion.div
            style={{ gridArea: `Area-${index + 1}`, aspectRatio: "16 / 9" }}
            key={index}
            variants={PortCardVariants}
          >
            <PortfolioCard key={port.id} index={index} portfolio={port} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

Portfolio.Layout = CategoryLayout;
