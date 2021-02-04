import './App.js';
import HomePage from './components/homepage.js';

function App() {
  const fname = 'Jovian'; 
  return (
    <HomePage firstName={fname}/>
  )
}

export default App;