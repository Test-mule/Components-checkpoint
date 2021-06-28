import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
function App() {
  return (
    <div className="App">
      <div className='Introduction'>
        <h1><ProfilePhoto /></h1>
        <h1><FullName /></h1>
      </div>
     <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
     <footer><Address /></footer>
    </div>
  );
}

export default App;
