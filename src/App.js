
import './App.css';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import Fullname from './Components/Profile/Fullname';
import Address from './Components/Profile/Address';

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <Fullname />
      <Address />
    </div>
  );
}

export default App;
