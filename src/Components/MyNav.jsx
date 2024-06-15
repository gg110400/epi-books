import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import SearchBook from './SearchBook';
import { AuthContext, ThemeContext } from '../modules/Contexts';
import { Link } from 'react-router-dom';

export default function MyNav({ search, handleSearch }) {
  const [themeCtx, setThemeCtx] = useContext(ThemeContext);
  const [authUserCtx] = useContext(AuthContext);

  return (
    <Navbar expand="lg" className={`navbar-${themeCtx} bg-${themeCtx}`} data-bs-theme={themeCtx}>
      <Container className="d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand">
          Giuls' Magic Library
        </Link>
        <div className="mx-auto" style={{ width: '40%' }}>
          <SearchBook search={search} handleSearch={handleSearch} />
        </div>
        <div className="d-flex align-items-center">
          <Navbar.Text className={`btn mx-3 ${themeCtx === 'light' ? 'btn-outline-dark' : 'btn-outline-light'}`}>
            Signed in as: <a href="/" className="text-decoration-none">{authUserCtx}</a>
          </Navbar.Text>
          <Button 
            variant={themeCtx === 'light' ? 'dark' : 'light'} 
            onClick={() => {
              setThemeCtx(themeCtx === 'light' ? 'dark' : 'light');
            }}
          >
            {themeCtx === 'light' ? 'Dark' : 'Light'} Theme
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

