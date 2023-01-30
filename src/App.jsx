import './App.css'
import Layout from './components/Layout';
import Navigation from "./components/Navigation"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PocetnaStranica from './components/PocetnaStranica'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Logout from './components/Logout'
import NeocekivanaGreska from './components/NeocekivanaGreska';
import HomePage from './components/HomePage';
import MyProfile from './components/MyProfile';
import EditProfile from './components/EditProfile';
import EditPassword from './components/EditPassword';

function App() {
  return (<>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<>
              <Navigation />
              <PocetnaStranica />
            </>} />
          <Route path="/log" element={<HomePage />}></Route>
          <Route path="/myprofile" element={<MyProfile />}></Route>
          <Route path="/editProfile" element={<EditProfile />}></Route>
          <Route path="/editPassword" element={<EditPassword />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/error" element={<NeocekivanaGreska />}></Route>
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

