import styled from "styled-components"

import Image from "next/image"


const FounderCardStyles= styled.div`
display:flex;
flex-direction:column;
max-width:500px;
min-width: 325px;

& h1{
    font-size: 60px;
    line-height: 65px;
    font-family: Founders;
    font-weight: 200;
}

& img{
    width: auto;
}

& h4{
    font-family: Signifier;
    font-size: 22px;
    line-height: 33px;
    font-weight: 100;
}

& p {
    font-family: Founders;
    font-size: 22px;
    line-height: 22px;
}
`

function FounderCard({name, title, imageUrl, para}) {
  return (
    <FounderCardStyles>

        <h1>{name}</h1>
        <h4>{title}</h4>
        <Image src={imageUrl}/>
        <p>{para}</p>

    </FounderCardStyles>
    
  )
}

export default FounderCard