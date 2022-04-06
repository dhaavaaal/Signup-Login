import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import { Route, Routes } from "react-router";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { useSelector } from "react-redux";

function App() {
  const loggedIn = useSelector((user) => user.isLoggedIn);
  console.log(loggedIn);
  return (
    <>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        {/* {loggedIn && <Route path="/home" element={<HomePage />} />} */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
