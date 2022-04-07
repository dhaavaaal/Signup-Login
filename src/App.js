import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import { Route, Routes, useNavigate } from "react-router";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onSubmitData } from "./redux/actions";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.users.isLoggedIn);

  useEffect(() => {
    const refreshDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (refreshDetails) {
      dispatch(onSubmitData(refreshDetails));
      navigate("/home");
    }
  }, [dispatch, navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
