import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Produtos from './views/Produtos';
import CriaProduto from './views/CriaProduto';
import Menu from './src/Menu';
function App() {
  return (
    <div className="App">
      <Menu> </Menu>
      <Routes>
        <Route path={"/produto"} element={<Produtos />}></Route>
        <Route path={"/criar"} element={<CriaProduto />}></Route>
      </Routes>
    </div>
  );
}

export default App;
