import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import LandingPage from "./pages/landingPage/LandingPage";
import PreLoader from "./components/Preloader/Preloader";

function App() {
    return (
        <>
            <Routes>
                <Route
                    path="/home"
                    element={
                        <ProtectedRoutes>
                            <HomePage />
                        </ProtectedRoutes>
                    }
                />
                {/* <Route path="/" element={<LandingPage />} /> */}
                <Route
                    path="/"
                    element={
                        <div>
                            <PreLoader />
                            <LandingPage />
                        </div>
                    }
                />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}
export function ProtectedRoutes(props) {
    if (localStorage.getItem("user")) {
        return props.children;
    } else {
        return <Navigate to="/login" />;
    }
}

export default App;
