import styled from "styled-components"

import Image from "next/image"


const FounderCardStyles= styled.div`
display:flex;
flex-direction:column;
width: 45%;
margin-bottom: 150px;

& h1{
    font-size: 60px;
    line-height: 65px;
    font-family: Founders;
    font-weight: 200;
    margin: 0;
}

& img{
    width: 100%;
    height:auto;
}

& h4{
    font-family: Signifier;
    font-size: 22px;
    line-height: 33px;
    font-weight: 100;
    margin-bottom: 40px;
}

& p {
    font-family: Founders;
    font-size: 22px;
    line-height: 22px;
}

@media (max-width: 991px) {
    width:70%;
    margin: auto;

    & h1{
    font-size: 45px;}

    & p {
    font-family: Founders;
    font-size: 22px;
    line-height: 33px;
}



  }

`

function FounderCard({name, title, imageUrl, para}) {
  return (
    <FounderCardStyles>

        <h1>{name}</h1>
        <h4>{title}</h4>
        <div style={{position:'relative'}}>
        <Image alt='' src={imageUrl}/>
        </div>
        
        <p>{para}</p>

    </FounderCardStyles>
    
  )
}

export default FounderCard