import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import Forgetpassword from "./components/Forgetpassword";
import Newpassword from "./components/New-password";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/forget-password" element={<Forgetpassword />} />
        <Route
          exact
          path="/new-password/:userId/:token"
          element={<Newpassword />}
        />
      </Routes>
    </>
  );
}

export default App;
