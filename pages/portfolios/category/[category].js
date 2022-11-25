import axios from "axios";
import Head from "next/head";
import CategoryLayout from "../../../components/layouts/category-layout.component";
import PortfolioCard from "../../../components/portfolio-card/portfolio-card";

import { motion } from "framer-motion";

import styles from "../../../styles/portfolio.module.css";

export async function getStaticPaths() {
  const res = await axios.get(
    "http://localhost:1337/api/categories?populate=*"
  );

  const categories = await res.data.data;

  console.log(categories);

  //generate list of paths
  const paths = categories.map((category) => ({
    params: { category: category.attributes.title },
  }));

  return {
    paths,
    fallback: false, // See the "fallback" section below
  };
}

//build out pages dynamically using the list of paths

export async function getStaticProps({ params }) {
  //request the data of the category using the id of the category with the path title
  //request the data

  //filter the data by the string of the title

  //return back the filtered data
  console.log(params);

  const res = await axios.get(
    `http://localhost:1337/api/categories?[filters][title][$eq]=${params.category}&populate[portfolios][populate][0]=fullvideo&populate[portfolios][populate][1]=display&populate[portfolios][populate][3]=snippetvideo`
  );

  const categoryData = await res.data.data;

  console.log(categoryData);

  return {
    props: {
      categoryData,
    },
  };
}

//animation variants

const CategoryAnimationVariants = {
  hidden: { opacity: 0, x: 0, y: -1000 },
  enter: { opacity: 1, x: 0, y: 0, transition:
  {staggerChildren: 0.25, delayChildren:0.25} }
 
};

const CategoryItemVariants ={
  hidden:{y: 1000, opacity:0},
  enter:{y:0, opacity:1},
}

export default function Category({ categoryData }) {
  return (
    <motion.div
      variants={CategoryAnimationVariants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit// Set the transition to linear
  
      className={styles.categoryGrid}
    >
      {/* <div>{categoryData[0].attributes.title}</div> */}

      {categoryData[0].attributes.portfolios.data.map((portfolio) => (
        <motion.div key={portfolio.id} variants={CategoryItemVariants}>
          <PortfolioCard  portfolio={portfolio} />
        </motion.div>
      ))}
    </motion.div>

    // <div>
    //   <Head>
    //     <title>{categoryData.attributes.title}</title>
    //   </Head>
    //   {categoryData.attributes.title}
    //   <br />
    //   {/* {categoryData.id} */}
    //   {/* <video autoPlay  muted controls width='100%' height={400} src={portfolioData.attributes.fullvideo.data.attributes.url}></video>
    // </div> */}
  );
}

Category.Layout = CategoryLayout;
