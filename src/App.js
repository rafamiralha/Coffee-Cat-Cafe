import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';


//está é a função core do meu sistema, ela está armazenando as rotas e o conteúdo fixo da minha aplicação.
function App() {
  return (
    <div className='App'> 
      <BrowserRouter>
      <header className='App-header'> 
      <h1 className='Logo'>MeowCafe</h1>
      <nav>
        <ul className='Nav-list'>  
          <li><Link className='Link-nav' to="/contact">Contact</Link></li>
          <li><Link  className='Link-nav' to="/">Home</Link></li>
        </ul>
      </nav> 
      </header>
      <div className='Content-app'>
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/contact" element = {<Contact />}>Contato</Route>
        </Routes>
      </div>
        
      </BrowserRouter>
    </div>

  );
}

export default App;
