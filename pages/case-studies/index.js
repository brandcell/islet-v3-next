import axios from "axios";

import styled from "styled-components";
import BlogCard from "../../components/blog-component/blog-card";

import TitleContainer from "../../styles/title.styles";

export async function getStaticProps() {
  const blogRes = await axios.get("http://localhost:1337/api/case-studies?populate=*");

  console.log(blogRes.data.data[0].attributes.displayimage.data[0].attributes.url);

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
    padding: 0px 150px;
    flex-wrap: wrap;
`;

function BlogHome({ blogs }) {
  return (
    <div className="blog-home">
      <TitleContainer>
        <h1>Case Studies</h1>
      </TitleContainer>

      <BlogCardContainer>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </BlogCardContainer>
    </div>
  );
}

export default BlogHome;
