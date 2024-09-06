import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Meetup from './components/Meetup/Meetup';

function App() {
  return (
    <div>
      <Navbar/>
      <div className="p-3 container-xl">
        <Meetup/>
      </div>
    </div>
  );
}

export default App;
