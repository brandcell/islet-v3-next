import ClientCard from "./client-card";
import styled from "styled-components";

const ClientContainerWrapper=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
max-width:1140px;
min-width:900px;
margin:auto`




function ClientContainer({ clientlist }) {
  return (
    <ClientContainerWrapper>
      {clientlist.map((client) => 
        <ClientCard key={client.id} client={client} />
      )}
    </ClientContainerWrapper>
  );
}

export default ClientContainer;
