// import logo from './logo.svg';
import './App.css';
import './index.css';
import Allside from './Component/Allside';
import Header from './Component/Header'; 
import ResultSearch from './Component/ResultSearch'; 
import  { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="">
   <Router>
      <Header />
       
      <Routes>
            
            <Route path="/" element={<Allside/>}/>
            <Route path="/Search" element={<ResultSearch />}/>

      </Routes>
    </Router>
      </div>
  );
}

export default App;
