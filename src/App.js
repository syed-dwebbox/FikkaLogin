import './App.css';
import FormOne from './components/FormOne';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormTwo from './components/FormTwo';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='login' element={<FormOne/>} />
    <Route path='formTwo'  element={<FormTwo/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
