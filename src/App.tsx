import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './Pages/Navigation';
import Home from './Pages/Home';
import APICall from './Pages/APICall';

function App() {
  return (
    <Router>  
      <Navigation /> 
      <Routes>  
          <Route path='/' element={< Home />}></Route>  
          <Route path='api-call' element={< APICall />}></Route> 
      </Routes>  
</Router>
  );
}

export default App;
