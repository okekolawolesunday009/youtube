// import logo from './logo.svg';
import './App.css';
// import './index.css';
import Header from './Component/Header'; 
import SideBar from './Component/SideBar';
import Recommendations from './Component/Recommendations';

function App() {
  return (
    <div className="">
     <Header />
     <div className='App__page'>
      <SideBar />
      <Recommendations />
     </div>
    

    </div>
  );
}

export default App;
