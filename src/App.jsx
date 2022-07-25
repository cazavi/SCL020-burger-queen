import { Routes, Route, Link} from "react-router-dom";
import Login from "./routes/Login";
import Options from "./routes/Options";
import Kitchen from "./routes/Kitchen";
import Order from "./routes/Order";
import Preparing from "./routes/Preparing";
import Tables from "./routes/Tables";
import Waiter from "./routes/Waiter";
import ProtectedRoutes from "./components/ProtectedRoutes";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/options" element={<ProtectedRoutes> <Options /> </ProtectedRoutes> } />
        <Route path="/kitchen" element={<ProtectedRoutes> <Kitchen /> </ProtectedRoutes> } />
        <Route path="/order" element={<ProtectedRoutes> <Order /> </ProtectedRoutes> } />
        <Route path="/preparing" element={<ProtectedRoutes> <Preparing /> </ProtectedRoutes> } />
        <Route path="/tables" element={<ProtectedRoutes> <Tables /> </ProtectedRoutes> } />
        <Route path="/waiter" element={<ProtectedRoutes> <Waiter /> </ProtectedRoutes> } />
      </Routes>
    </>
  );
};

export default App;
