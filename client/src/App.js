import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import PhoneVerify from "./components/PhoneVerify";
import Header from "./components/Header";
import Country from "./components/Country";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/head" element={<Header />} />
        <Route path="/country" element={<Country />} />
        <Route path="/phone/verify" element={<PhoneVerify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
