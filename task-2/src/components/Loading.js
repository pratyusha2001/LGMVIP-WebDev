import React from 'react';
import { Container} from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner'

const Loading=()=>{

    return(
        <div style={{background:"linear-gradient(315deg, #380036 0%, #0cbaba 74%)",paddingBottom:"90%"}}>
      <Container>
          <p className="msg">Loading...</p>
          <Spinner className="spinner" animation="border" /> 
      </Container>
      </div>
    )
    
}

export default Loading;