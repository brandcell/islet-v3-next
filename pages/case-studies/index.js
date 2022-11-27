import axios from "axios";
import { API_URL } from "../../utils/urls";
import styled from "styled-components";
import BlogCard from "../../components/blog-component/blog-card";

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
  flex-wrap: wrap;
  margin-bottom: 140px;
`;

function BlogHome({ blogs }) {
  return (
    <Page>
      <PageContainer>
        <div className="case-study-title-wrapper">
          <TitleContainer>
            <h1>
              Case <br /> Studies
            </h1>
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
