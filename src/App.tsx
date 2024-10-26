import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fishing from './pages/Fishing/Fishing'
import Home from './pages/Home/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/fishing" element={<Fishing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
