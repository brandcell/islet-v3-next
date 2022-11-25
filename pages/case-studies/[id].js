import axios from "axios"
import Image from "next/image"

import { MetaWrapper } from "../portfolios/[id]"

import { TextWrapper } from "../portfolios/[id]"


export async function getStaticPaths(){
    const res= await axios.get('http://localhost:1337/api/case-studies')

    const data = res.data.data

    const paths = data.map((path)=>({
        params: {id:path.id.toString()}
    }))

    return {
        paths,
        fallback:false
    }

}

export async function getStaticProps({params}){

    const res= await axios.get(`http://localhost:1337/api/case-studies/${params.id}?populate=*`)

    const blogData = await res.data.data;

    return {
        props:{
            blogData
        }
    }



}

function Blog({blogData}) {
  return (
    <div className="page-container">
    <h1>{blogData.attributes.title}</h1>
    <p>{`Written by ${blogData.attributes.author}/${blogData.attributes.publishedAt}`}</p>

    <div style={{width:'100%' , position:'relative',height:'773px'}}>
    <Image fill src={blogData.attributes.displayimage.data[0].attributes.url}></Image>
    </div>


    <MetaWrapper>
        <TextWrapper><h1>Client</h1><p>{blogData.attributes.client}</p></TextWrapper>
        <TextWrapper><h1>Type</h1><p>{blogData.attributes.category.data.attributes.title}</p></TextWrapper>
        <TextWrapper>
        <h1>Production Role</h1><p>{blogData.attributes.category.data.attributes.title}</p>
        </TextWrapper>
    </MetaWrapper>

    
    
    </div>
  )
}

export default Blog