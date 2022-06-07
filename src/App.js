import logo from './logo.svg';
import './App.css';
import { Main } from './Components/Main/Main';
import { JoinUs } from './Components/JoinUs/JoinUs';
import { Features } from './Components/Features/Features';
import { BigOffer } from './Components/BigOffer/BigOffer';
import { Pricing } from './Components/Pricing/Pricing';
import { Gallery } from './Components/Gallery/Gallery';
import { Trainers } from './Components/Trainers/Trainers';

function App() {
  return (
    <div className="App">
      <Main/>
      <JoinUs/>
      <Features/>
      <BigOffer/>
      <Pricing/>
      <Gallery/>
        <Trainers/>
    </div>  
  );
}

export default App;
