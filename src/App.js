import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import Forgetpassword from "./components/Forgetpassword";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/forget-password" element={<Forgetpassword />} />
      </Routes>
    </>
  );
}

export default App;
