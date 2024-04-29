import profileImage from "./img/profile.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: J.A. Zapatos</h2>
      <img src={profileImage} alt="profile picture" height="300px"></img>
    </div>
  );
}

export default App;
