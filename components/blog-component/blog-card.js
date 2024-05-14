import { buildTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import styled from "styled-components";

const BlogCardWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  width: 30%;
  min-width: 270px;
  flex-direction: column;
  margin-right: 20px;

  @media (max-width: 479px) {
    width: 100%;
  }

  & h3 {
    font-family: Signifier;
  }
  & h1 {
    font-family: Founders;
    font-weight: 100;
    font-size: 28px;
    line-height: 33px;
  }

  & p {
    font-family: Founders;
    font-weight: 100;
    font-size: 16px;
    line-height: 20px;
  }

  & img {
    height: 416px;
    width: 100%;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
`;

const FullBlogCardVariant = {
  initial: {},

  hover: {},
};

const ContentCardVariants = {
  initial: {
    opacity: 1,
  },

  hover: {
    opacity: 1,
    y: [0, -50],
  },
};

const FloatyTextVariants = {
  initial: {
    display: "none",
  },

  hover: {
    display: "block",
  },
};

function BlogCard({ blog }) {
  console.log(blog);
  return (
    <BlogCardWrapper
      variants={FullBlogCardVariant}
      initial="initial"
      whileHover="hover"
    >
      <Link href={`/case-studies/${blog.attributes.slug}`}>
        <ImgWrapper>
          <Image
            alt={blog.attributes.id}
            fill
            src={blog.attributes.displayImage.data[0].attributes.url}
          ></Image>
        </ImgWrapper>
        <motion.div
          style={{
            borderRadius: "1px",
            background: "white",
            paddingTop: "5px",
          }}
          variants={ContentCardVariants}
        >
          <motion.h3 variants={FloatyTextVariants}>
            {blog.attributes.contenttype}
          </motion.h3>
          <h1>{blog.attributes.title}</h1>
          <p>{blog.attributes.previewText}</p>
        </motion.div>
      </Link>
    </BlogCardWrapper>
  );
}

export default BlogCard;
