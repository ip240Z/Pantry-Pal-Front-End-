import './App.css';
import Header from './components/Header';
import MainRenderArea from './components/MainRenderArea';
import BottomNavBar from './components/BottomNavBar';
import { BrowserRouter } from 'react-router-dom';
import ShoppingListContext from './components/ShoppingListContext';

function App() {
  return (
    <ShoppingListContext.Provider>
      <div className="App">
        <Header />
        <MainRenderArea />
        <BottomNavBar />
        <ShoppingListContext />
      </div>
    </ShoppingListContext.Provider>
  );
}

export default App;
