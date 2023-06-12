import './App.css';
import Header from './components/Header';
import MainRenderArea from './components/MainRenderArea';
import BottomNavBar from './components/BottomNavBar';

import { Routes, Route, } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';



function App() {
  return (
    <>
      <section className="App">
        <Header />
        <MainRenderArea />
        <BottomNavBar />
      </section>
      <div className='wrapper'>
        <h1>Application</h1>

{/* 
          <Routes>
            <Route path="/dashboard"> < Dashboard /></Route>
            <Route path="/preferences"> < Preferences /></Route>
          </Routes>
   */}
      </div>
    </>
  );
}
export default App;
