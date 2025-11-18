import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import InformativePage from "./InformativePage";
import ConfigScreen from "./ConfiScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InformativePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
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
