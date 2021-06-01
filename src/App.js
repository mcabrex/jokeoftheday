import './App.css';
import {Intro,AboutUs,HowItWorks,NavBar,GetStarted} from './sections'

function App() {


  return (
    <div className="App">
      <NavBar />
      <Intro />
      <AboutUs />
      <HowItWorks />
      <GetStarted />
    </div>
  );
}

export default App;
