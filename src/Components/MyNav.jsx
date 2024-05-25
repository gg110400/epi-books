import Reacy from 'react'
import Nav from "react-bootstrap/Nav";

export default function MyNav() {
  return (
    <Nav className='bg-primary py-2'
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
      <Nav.Link eventKey="link-2" className='link-light'>Browse</Nav.Link>
    </Nav.Item>
  </Nav>
  );
}


