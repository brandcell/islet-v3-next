import axios from "axios";
import Head from "next/head";
import CategoryLayout from "../../../components/layouts/category-layout.component";
import PortfolioCard from "../../../components/portfolio-card/portfolio-card";
import Head from "next/head";

import { API_URL } from "../../../utils/urls";

import { AnimatePresence, motion } from "framer-motion";

import styles from "../../../styles/portfolio.module.css";
import { Router, useRouter } from "next/router";

export async function getStaticPaths() {
  const res = await axios.get(`${API_URL}/api/categories?populate=*`);

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

  const res = await axios.get(
    `${API_URL}/api/categories?[filters][title][$eq]=${params.category}&populate[portfolios][populate][0]=fullvideo&populate[portfolios][populate][1]=display&populate[portfolios][populate][3]=snippetvideo`
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

export const CategoryAnimationVariants = {
  hidden: { opacity: 0, x: 2000 },
  enter: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", staggerChildren: 0.5, },
  },
  exit: { opacity: 0, x: 2000, transition: { type: "tween" } },
};

export const PortCardVariants = {
  hidden: {
    opacity: 0,
    y: 1000,
  },
  enter: {
    opacity: 1,
    y:0,
    transition:{type:'spring',stiffness:30,duration:1}
  },
  exit: {
    opacity: 1,
    y: 0,
  },
};

export default function Category({ categoryData }) {
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
    <Head>
    <title>`Islet Studio Video Production House - Categories - ${params.category}`</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
    </Head>
      <motion.div
        key={router.asPath}
        variants={CategoryAnimationVariants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit// Set the transition to linear
        className={styles.categoryGrid}
      >
        {categoryData[0].attributes.portfolios.data.map((portfolio, index) => (
          <motion.div key={index} variants={PortCardVariants}
          
          style={{ gridArea: `Area-${index + 1}`, aspectRatio: "16 / 9" }}>
            <PortfolioCard
              
              index={index}
              key={portfolio.id}
              portfolio={portfolio}
            />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>

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
