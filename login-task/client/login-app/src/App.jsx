import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./component/loginpage/LoginPage";
import Signup from "./component/signup/Signup";
import DashBoard from "./component/dashboard/DashBoard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        <Route path="signup" element={<Signup></Signup>}></Route>
        <Route path="dashboard" element={<DashBoard></DashBoard>}></Route>
      </Routes>
    </>
  );
}

export default App;
