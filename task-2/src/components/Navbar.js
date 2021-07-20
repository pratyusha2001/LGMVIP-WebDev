import React, { useState } from 'react';
import "./comp.css"
import { Container, Navbar, Button } from "react-bootstrap";
import logo from './logo.jpg'
import Message from './Message';
import Loading from './Loading';
import Cards from './Cards';

const Nav = () => {
  const [card, setCard] = useState(false);
  const [loader, setLoader] = useState(false);
  const [msg,setMsg]=useState(false);

  const fetch = async () => {
    setLoader(true);
    setMsg(true);
    setTimeout(() => {
      setLoader(false);
      setCard(true);
    }, 2000)
  }
  return (
    <section>
      <Navbar className="nav">
        <Container>
          <Navbar.Brand>
            <img
              src={logo}
              width="30px"
              height="30px"
              className="d-inline-block align-top"
              alt="logo"
            />{' '}
            <p className="logo-name d-inline-block align-top">Photo Canvas</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Button className="bttn" onClick={fetch}>Get Users</Button>
      </Container>
      {msg? null : (<Message/>)}
      {loader ? (<Loading/>):null}
      {card ? (<Cards />) :null}
      </section>
  );
};

export default Nav;
