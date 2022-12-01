import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from '../../Components/Header/index';
import News from '../../Components/News/index';
import Welcome from '../../Components/welcome/index';
import './App.css';

function App() {
  return (
    <div className="App">

      

      <Router>
          <Header/>

<Routes>
      <Welcome/>
      <News/>
</Routes>
          
      </Router>
      
    </div>
  );
}

export default App;
