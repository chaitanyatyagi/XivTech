import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import Child from './components/Child';
import API from "./components/childContainerAPI"
import BrandExample from './components/BrandExample';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BrandExample />
        <Routes>
          <Route path='/' element={<Main />} />
          {
            API.map((el, key) => (
              < Route path={`/${key}`} element={<Child data={el} />} />
            ))
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
