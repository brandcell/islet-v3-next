import Image from "next/image"
import Link from "next/link";

import styled from "styled-components";


const BlogCardWrapper = styled.div`
position: relative;
display:flex;
max-width:430px;
min-height: 416px;
max-height: 456px;
min-width:337px;
flex-direction:column;
margin-right:20px;

& h1{
    font-family: Founders;
    font-weight:100;
    font-size: 28px;
    line-height: 33px;}

& p{
    font-family: Founders;
    font-weight:100;
    font-size: 16px;
    line-height: 20px;}

& img{
    height:416px;
    width: 100%;
}

`

const ImgWrapper= styled.div`
position:relative;
height:230px;`

function BlogCard({blog}) {

  return (
    <Link href={`/case-studies/${blog.id}`}>
    <BlogCardWrapper>
    <ImgWrapper>
    <Image layout='fill' src={blog.attributes.displayimage.data[0].attributes.url}></Image>
    </ImgWrapper>
    <h1>{blog.attributes.title}</h1>
    <p>{blog.attributes.previewText}</p>
    </BlogCardWrapper>
    </Link>)
}

export default BlogCard;