import axios from "axios";

import { API_URL } from "../../utils/urls";

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
    <>
      <div className={styles.portfolioGrid}>
        {portfolios.map((port) => (
          <PortfolioCard key={port.id} portfolio={port} />
        ))}
      </div>
    </>
  );
}

Portfolio.Layout = CategoryLayout;
