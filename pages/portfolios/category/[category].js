import axios from "axios";
import Head from "next/head";
import CategoryLayout from "../../../components/layouts/category-layout.component";
import PortfolioCard from "../../../components/portfolio-card/portfolio-card";
import { useEffect, useState } from "react";

import { useCategoryContext } from "../../../contexts/category.context";

import {
  getCategoryPaths,
  getPortfolioByCategory,
} from "../../../utils/category";

import { API_URL } from "../../../utils/urls";

import { AnimatePresence, motion } from "framer-motion";

import { Router, useRouter } from "next/router";

export async function getStaticPaths() {
  const categories = await getCategoryPaths();

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

  const categoryData = await getPortfolioByCategory(params.category);

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
    transition: { type: "tween", staggerChildren: 0.5 },
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
    y: 0,
    transition: { type: "spring", stiffness: 30, duration: 1 },
  },
  exit: {
    opacity: 1,
    y: 0,
  },
};

export default function Category({ categoryData }) {
  const router = useRouter();

  const [isSocial, setIsSocial] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url === "/portfolios/category/social-media") {
        setIsSocial(true);
        console.log(isSocial);
      } else {
        setIsSocial(false);
        console.log(isSocial);
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    handleRouteChange(router.asPath);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  // useEffect(() => {
  //   if (router.asPath === "/portfolios/category/social-media") {
  //     console.log(isSocial);
  //   }

  //   return () => {};
  // }, [isSocial]);

  // const { routeState } = useCategoryContext();

  return (
    <>
      <Head>
        <title>Islet Studio Video Production House</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <AnimatePresence mode="wait">
        <motion.div
          key={categoryData.title}
          variants={CategoryAnimationVariants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit// Set the transition to linear
          className={`category-grid ${isSocial ? "social-media" : ""} `}
        >
          {categoryData.portfolios.data.map((portfolio, index) => (
            <motion.div
              key={index}
              variants={PortCardVariants}
              style={
                isSocial
                  ? {
                      aspectRatio: "9 / 16",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }
                  : { gridArea: `Area-${index + 1}`, aspectRatio: "16 / 9" }
              }
            >
              <PortfolioCard
                isSocial={isSocial}
                index={index}
                key={portfolio.id}
                portfolio={portfolio}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </>

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
