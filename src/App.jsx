import './App.css'
import Navigation from "./components/Navigation"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PocetnaStranica from './components/PocetnaStranica'
import Login from './components/Login'
function App() {
  return (<>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>
              <Navigation />
              <PocetnaStranica />
            </>}>
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
