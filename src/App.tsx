import logo from './logo.svg';

import { Greet } from './components/greet/Greet';
import { Application } from './components/application/Application';

import './App.css';

const AppComponent = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export const App = () => (
  <>
    <AppComponent />
    <Greet />
    <Application />
  </>
);

export default App;
