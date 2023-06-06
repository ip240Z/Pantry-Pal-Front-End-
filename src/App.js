import './App.css';
import Header from './components/Header';
import MainRenderArea from './components/MainRenderArea';
import BottomNavBar from './components/BottomNavBar';

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
