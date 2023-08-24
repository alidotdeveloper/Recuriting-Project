import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
// import Home from "./components/Signup";
// import About from "./components/About";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="signup" element={<Signup />} />
        {/* <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} /> */}
      </Routes>
    </>
  );
}

export default App;
