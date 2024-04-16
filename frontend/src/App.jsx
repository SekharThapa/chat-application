import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFoundPage from "./Pages/NoPageFound/Nopagefound";
import Signup from "./Pages/Signup/Signup";
import { Toaster } from "react-hot-toast";
import ProtectedRoutes from "./utilis/ProtecteRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
