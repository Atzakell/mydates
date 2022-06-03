import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Greatings from './components/Greatings';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Greatings name="Ysaac"/>
      <h1>componente :D</h1>
    </div>
  );
}

export default App;
