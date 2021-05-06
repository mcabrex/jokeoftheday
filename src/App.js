import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="joke-container">
        <h1 id="name">JOKE GENERATOR</h1>
        <img id="clown-img" src="https://c8.alamy.com/comp/M4MCPC/funny-clown-with-a-gun-pistol-isolated-on-white-background-M4MCPC.jpg" />
        <div id="description">
          Jokes on you!
        </div>
        <button class="btn oauth">
          Sign in to Facebook
        </button>
        {/* fake loading spinner */}
        {/* text doc for generator*/}
        {/*ouath to facebook  */}
      </div>

    </div>
  );
}

export default App;
