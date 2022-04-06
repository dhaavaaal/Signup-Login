import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import { Route, Routes, useNavigate } from "react-router";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onSubmitData } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector((user) => user.isLoggedIn);
  useEffect(() => {
    const refreshDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (refreshDetails) {
      dispatch(onSubmitData(refreshDetails));
      navigate("/home");
    }
  }, [dispatch, navigate]);

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
