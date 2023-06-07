import './App.css';
import Header from './components/Header';
import MainRenderArea from './components/MainRenderArea';
import BottomNavBar from './components/BottomNavBar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header />
        <MainRenderArea />
        <BottomNavBar />
    </div>
  );
}

export default App;
