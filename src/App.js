import './App.css';
import Header from './components/Header';
import MainRenderArea from './components/MainRenderArea';
import BottomNavBar from './components/BottomNavBar';

function App() {
  return (
    <section className="App">
      <div>
        <Header />
        <MainRenderArea />
        <BottomNavBar />
      </div>
    </section>
  );
}

export default App;
