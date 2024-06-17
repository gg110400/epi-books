import { Container } from 'react-bootstrap';
import './App.css';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import AllTheBooks from './components/AllTheBooks';
import fantasy from './books/fantasy.json';
import history from './books/history.json';
import horror from './books/horror.json';
import { useState } from 'react';
import { ThemeContext, AuthContext } from './modules/Contexts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import BookDetail from './components/BookDetail';

function App() {
  // Ottieni la lunghezza dell'array fantasy
  const numeroLibriFantasy = fantasy.length;
  
  // Stampa la lunghezza dell'array nella console
  console.log('Numero di libri in fantasy:', numeroLibriFantasy);

  // Stati per la ricerca e il tema
  const [search, setSearch] = useState('');
  const handleSearch = (e) => setSearch(e.target.value);

  let [theme, setTheme] = useState('light');
  let [authUser, setAuthUser] = useState('Mario Rossi');

  return (
    <>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <AuthContext.Provider value={[authUser]}>
          <BrowserRouter>
            <MyNav search={search} handleSearch={handleSearch} /> 
            <Container className="my-3">
              <Routes>
                <Route index element={<AllTheBooks books={fantasy} searchQuery={search} />} />
                <Route path='/details/:asin' element={<BookDetail />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </Container>
            <MyFooter />
          </BrowserRouter>
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
