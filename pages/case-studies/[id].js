import axios from "axios";
import Image from "next/image";
import WhiteLayout from "../../components/layouts/white-layout.component";
import { Page, PageContainer } from "../../styles/page.styles";
import Date from "../../components/date";

import { API_URL } from "../../utils/urls";

import { MetaWrapper } from "../portfolios/[id]";

import { TextWrapper } from "../portfolios/[id]";

export async function getStaticPaths() {
  const res = await axios.get(`${API_URL}/api/case-studies`);

  const data = res.data.data;

  const paths = data.map((path) => ({
    params: { id: path.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `${API_URL}/api/case-studies/${params.id}?populate=*`
  );

  const blogData = await res.data.data;

  return {
    props: {
      blogData,
    },
  };
}

function Blog({ blogData }) {
  return (
    <Page>
      <PageContainer>
        <div class="blog-content-wrapper">
          <p>{blogData.attributes.contenttype}</p>
          <h1>{blogData.attributes.title}</h1>
          <p>
            {`Written by ${blogData.attributes.author} / `}

            <Date dateString={blogData.attributes.publishedAt} />
          </p>

          <div
            style={{
              width: "100%",
              position: "relative",
              aspectRatio: "16/9",
              marginBottom: "50px",
            }}
          >
            <Image
              alt="blog-header-pic"
              fill
              objectFit="cover"
              src={blogData.attributes.displayimage.data[0].attributes.url}
            ></Image>
          </div>

          <MetaWrapper>
            <TextWrapper>
              <h1>Client</h1>
              <p>{blogData.attributes.client}</p>
            </TextWrapper>
            <TextWrapper>
              <h1>Type</h1>
              <p>{blogData.attributes.category.data.attributes.title}</p>
            </TextWrapper>
            <TextWrapper>
              <h1>Production Role</h1>
              <p>{blogData.attributes.role}</p>
            </TextWrapper>
          </MetaWrapper>

          <div
            dangerouslySetInnerHTML={{ __html: blogData.attributes.content }}
          ></div>
        </div>
      </PageContainer>
    </Page>
  );
}

export default Blog;

Blog.Layout = WhiteLayout;
