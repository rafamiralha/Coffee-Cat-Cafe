import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';

//está é a função core do meu sistema, ela está armazenando as rotas e o conteúdo fixo da minha aplicação.
function App() {
  return (
    <div className='App'> 
      <BrowserRouter>
        <header className="App-header">
          <p>Meowcafe</p>

          <span>       
            <Link to="/contact">To Contact</Link>
            <Link to="/">To Home</Link>
          </span>
        </header>

        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/contact" element = {<Contact />}>Contato</Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
