import axios from "axios";
import { API_URL } from "../../utils/urls";
import styled from "styled-components";
import BlogCard from "../../components/blog-component/blog-card";
import { motion } from "framer-motion";

import { Page } from "../../styles/page.styles";
import { PageContainer } from "../../styles/page.styles";

import TitleContainer from "../../styles/title.styles";
import WhiteLayout from "../../components/layouts/white-layout.component";

export async function getStaticProps() {
  const blogRes = await axios.get(`${API_URL}/api/case-studies?populate=*`);

  // console.log(blogRes.data.data[0].attributes.displayimage.data[0].attributes.url);

  return {
    props: {
      blogs: blogRes.data.data,
    },
  };
}

const BlogCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1440px;
  width: 100%;
  margin: auto;
  flex-wrap: wrap;
  margin-bottom: 140px;
  column-gap: 30px;
  row-gap: 30px;
`;

function BlogHome({ blogs }) {
  return (
    <Page>
      <PageContainer>
        <div className="case-study-title-wrapper">
          <TitleContainer>
            <motion.h1 
             initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              type: "tween",
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            >
              Case 
            </motion.h1>

            <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.5,
              duration: 0.5,
              type: "tween",
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            Studies
          </motion.h1>



          </TitleContainer>
        </div>

        <BlogCardContainer>
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </BlogCardContainer>
      </PageContainer>
    </Page>
  );
}

export default BlogHome;

BlogHome.Layout = WhiteLayout;
