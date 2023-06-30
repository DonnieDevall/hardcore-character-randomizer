import './App.css';
import CharacterOptions from './components/display/CharacterOptions';
import Footer from './components/display/Footer';

function App() {
  return (
    <div className="App">
      <h1 className='header'>Hardcore Character Randomizer</h1>
      <CharacterOptions />
      <Footer />
    </div>
  );
}

export default App;
