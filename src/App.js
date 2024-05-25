import {Container} from 'react-bootstrap';
import './App.css';
import MyFooter from './Components/MyFooter';
import MyNav from './Components/MyNav';
import Welcome from './Components/Welcome';
import AllTheBooks from './Components/AllTheBooks';
import fantasy from './books/fantasy.json';
import horror from './books/horror.json';


function App() {
  return (
  <>
  <MyNav></MyNav>
  <Container className='text-center'>
      <Welcome></Welcome>
      <AllTheBooks books={fantasy}></AllTheBooks>
      <AllTheBooks books={horror}></AllTheBooks>
  </Container>

  <MyFooter></MyFooter>
  </>
  );
}

export default App;
