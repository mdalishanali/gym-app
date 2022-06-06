import logo from './logo.svg';
import './App.css';
import { Main } from './Components/Main/Main';
import { JoinUs } from './Components/JoinUs/JoinUs';
import { Features } from './Components/Features/Features';
import { BigOffer } from './Components/BigOffer/BigOffer';

function App() {
  return (
    <div className="App">
      <Main/>
      <JoinUs/>
      <Features/>
      <BigOffer/>
    </div>
  );
}

export default App;
