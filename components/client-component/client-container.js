import ClientCard from "./client-card";
import styled from "styled-components";

const ClientContainerWrapper=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
max-width:900px;
min-width: 260px;
margin:auto auto 280px auto;

@media (max-width:991px) {
  margin:0;
}
`


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
