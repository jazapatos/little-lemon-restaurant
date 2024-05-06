import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="grid">
      <Header />
      <Main />
      <Footer />   
    </div>
    </Router>
  );
}

export default App;
