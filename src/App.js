import './App.css';
import {Intro,AboutUs,HowItWorks,NavBar} from './sections'

function App() {


  return (
    <div className="App">
      <NavBar />
      <Intro />
      <AboutUs />
      <HowItWorks />
    </div>
  );
}

export default App;
