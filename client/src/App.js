import logo from './logo.svg';
import './App.css';
import AgeSearch from "./components/AgeSearch";
import ReportingArea from "./components/ReportingArea";
import NameSearch from "./components/NameSearch";

function App() {
  return (
    <div className="App">
  <NameSearch/>
  <AgeSearch/>
  <ReportingArea/>
    </div>
  );
}

export default App;
