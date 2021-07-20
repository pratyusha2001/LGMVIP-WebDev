import React from 'react';
import { Container } from "react-bootstrap";

const Message = () => {

  return (
    <div style={{ background: "linear-gradient(315deg, #380036 0%, #0cbaba 74%)", paddingBottom: "75%" }}>
      <Container>
        <p className="msg">CLICK GET USERS TO GET THE USER DATA</p>
      </Container>
    </div>
  )
  
}

export default Message;