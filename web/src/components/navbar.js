import React, { useState } from "react"
import styled from 'styled-components'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.css'
import "./navbar.scss"

import Logo from "./logo"

const Navigation = styled.nav`
  margin-bottom: 10px;
  justify-content: space-between;
  display: flex;
`

export default function Menu () {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navigation>
      <NavbarBrand href="/">
        <Logo />
      </NavbarBrand>
      <Navbar 
        expand="md"
        className="links-right"
        color="light" 
        light
      >
        <NavbarToggler onClick={toggle} />
        <Collapse 
          isOpen={isOpen}
          navbar
        >
          <Nav
            className="justify-content-end"
            navbar
          >
            <NavItem>
              <NavLink href="/">home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/services">START NOW!</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="javascript:$zopim.livechat.window.show();">Contact Me</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Navigation>
  )
}