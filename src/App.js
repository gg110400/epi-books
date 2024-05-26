import {Container} from 'react-bootstrap';
import './App.css';
import MyFooter from './Components/MyFooter';
import MyNav from './Components/MyNav';
import Welcome from './Components/Welcome';
import AllTheBooks from './Components/AllTheBooks';
import fantasy from './books/fantasy.json';
import horror from './books/horror.json';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import history from './books/history.json';
import romance from './books/romance.json';
import scifi from './books/scifi.json';


function App() {

  let [type, setType] = useState('fantasy');

  return (
  <>
  <MyNav></MyNav>
  <Container className='text-center'>
      <Welcome></Welcome>
      <Button variant="dark" className='me-3 mb-5 text-light' onClick={() => setType('fantasy')}>Fantasy</Button>{' '}
      <Button variant="dark" className='mb-5 me-3 text-light' onClick={() => setType('horror')}>Horror</Button>{' '}
      <Button variant="dark" className='mb-5 me-3 text-light' onClick={() => setType('history')}>History</Button>{' '}
      <Button variant="dark" className='mb-5 me-3 text-light' onClick={() => setType('romance')}>Romance</Button>{' '}
      <Button variant="dark" className='mb-5 text-light' onClick={() => setType('scifi')}>Sci-fi</Button>{' '}
      {type==='fantasy' && <AllTheBooks books={fantasy}></AllTheBooks>}
      {type==='horror' &&  <AllTheBooks books={horror}></AllTheBooks>}
      {type==='history' &&  <AllTheBooks books={history}></AllTheBooks>}
      {type==='romance' &&  <AllTheBooks books={romance}></AllTheBooks>}
      {type==='scifi' &&  <AllTheBooks books={scifi}></AllTheBooks>}
  </Container>

  <MyFooter></MyFooter>
  </>
  );
}

export default App;
