import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import SignupPage from "./components/SignupPage/SignupPage";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      {/* <h1>App</h1> */}
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
