import axios from "axios";

import { API_URL } from "../../utils/urls";

import { getallPortfolios } from "../../utils/portfolio";

import { motion, AnimatePresence } from "framer-motion";

import Head from "next/head";

import {
  CategoryAnimationVariants,
  PortCardVariants,
} from "./category/[category]";

import PortfolioCard from "../../components/portfolio-card/portfolio-card";

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
  const portfolios = await getallPortfolios();

  return {
    props: {
      portfolios,
    },
  };
}

export default function Portfolio({ portfolios }) {
  return (
    <AnimatePresence>
      <Head>
        <title>Islet Studio - Video Production House - Portfolios </title>
        <meta
          name="description"
          content="Islet Studio, a video production company based in Malaysia. Specialising in commercials, short branded stories, corporate videos and product videos. Islet Studio aims to deliver impeccable storytelling through videos"
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>

      <motion.div
        variants={CategoryAnimationVariants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit"
        className="portfolioGrid"
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
