import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Display from './components/Display';

function App() {
  return (
    <>
    <Navbar/>
    <Form/>
    <div className="container">
      <Display/>
    </div>
    </>
  );
}

export default App;
