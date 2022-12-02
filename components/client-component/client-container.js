import ClientCard from "./client-card";
import styled from "styled-components";

const ClientContainerWrapper=styled.div`
display:flex;
flex-wrap:wrap;
max-width: 900px;
margin: auto;
column-gap:30px;
row-gap: 40px;



@media (max-width:768px) {
  width: 600px;
  margin:auto;
  column-gap: 40px;
}

@media (max-width:550px) {
  width: 400px;
  margin:auto;
}

@media (max-width:479px) {
  width: auto;
  margin:auto;
}`





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
