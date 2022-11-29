import Image from "next/image"

import styled from "styled-components";

export const StyledClientCard = styled.div`
width: 150px;
padding: 20px;
display: flex;
flex-direction: column;
margin-right: 30px;
margin-bottom:69px;
align-items: center;

@media (max-width:991px) {
  margin-right: 20px;
  margin-left: 20px;
  width:130px;

}

@media (max-width:479px) {
  width:80px;

}


;

& p{
    text-align: center;
    font-family: Founders;
    font-size: 14px;
    line-height: 20px;
}
`
const ImageWrapper = styled.div`
position:relative;
height:80px;
width:150px;

@media (max-width:991px) {
  width:130px;

  
}

@media (max-width:479px) {
  width:80px;

  
}
`

function ClientCard({client}) {
  return (
    <StyledClientCard>
        <ImageWrapper> <Image fill alt='' objectFit="contain" src={client.attributes.logo.data.attributes.url}></Image></ImageWrapper>
            
        <p>{client.attributes.name}</p>
    </StyledClientCard>
  )
}

export default ClientCard