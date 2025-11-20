import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import InformativePage from "./pages/InformativePage";
import ConfigScreen from "./pages/ConfiScreen";
import CultivoPage from "./pages/CultivoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InformativePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/cultivo' element={<CultivoPage />} />
      <Route path="/config" element={<ConfigScreen />} />


      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
