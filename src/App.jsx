import './App.css'
import Navigation from "./components/Navigation"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PocetnaStranica from './components/PocetnaStranica'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Logout from './components/Logout'
import NeocekivanaGreska from './components/NeocekivanaGreska';
import ResetPassword from './components/ResetPassword';
import ConfirmResetPassword from './components/ConfirmResetPassword'
import ConfirmRegistration from './components/ConfirmRegistration';
import HomePage from './components/HomePage';
function App() {
  return (<>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>
              <Navigation />
              <PocetnaStranica />
            </>}>
          </Route>
          <Route path="/log" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/error" element={<NeocekivanaGreska />}></Route>
          <Route path="/resetpassword" element={<ResetPassword />}></Route>
          <Route path="/confirmresetpassword" element={<ConfirmResetPassword />}></Route>
          <Route path="/confirmregistration" element={<ConfirmRegistration />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
