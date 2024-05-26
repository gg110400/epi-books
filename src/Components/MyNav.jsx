import Reacy from 'react'
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MyNav() {
  return (
    <Nav className='bg-dark py-3 shadow-sm'
    activeKey="/home"
    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
  >
    <Nav.Item>
      <Nav.Link href="/home" className='link-light'>Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1" className='link-light'>About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <NavDropdown
              id="nav-dropdown-dark-example"
              title="Browse"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
    </Nav.Item>
  </Nav>
  );
}


