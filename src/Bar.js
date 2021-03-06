import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from 'reactstrap'

const Bar = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <Link to="/home">React</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/listado" className="link">
                [Listado]
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/contador" className="link">
                [Contador]
              </Link>
            </NavItem>
          </Nav>
          <NavbarText>Reactjs</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Bar
