import './App.css';
import Header from './components/Header';
import MainRenderArea from './components/MainRenderArea';
import BottomNavBar from './components/BottomNavBar';

function App() {
  return (
    <section className="App">
        <Header />
        <MainRenderArea />
        <BottomNavBar />
    </section>
  );
}

export default App;
