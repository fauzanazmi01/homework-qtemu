import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Meetup from './components/Meetup/Meetup';

function App() {
  return (
    <div>
      <Navbar/>
        <Meetup/>
    </div>
  );
}

export default App;
