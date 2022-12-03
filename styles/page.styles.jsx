import styled from "styled-components";


export const Page = styled.div`
background-color: white;
padding: 0px 60px;
overflow: hidden;

@media (max-width: 768px) {
     
     padding: 0px 30px;
    }

@media (max-width: 375px) {

     padding: 0px 30px ;
    }

`


export const PageContainer = styled.div`
max-width: 1140px;
height:auto;
margin:auto;


@media (max-width: 768px) {
     /* max-width: 714px; */
    }

@media (max-width: 375px) {
     /* max-width: 315px; */
    }
`