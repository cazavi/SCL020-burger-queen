import { Routes, Route} from "react-router-dom";
import Login from "./routes/Login";
import Options from "./routes/Options";
import Order from "./routes/Order";
import Preparing from "./routes/Preparing";
import Tables from "./routes/Tables";
import Iconography from "./routes/Iconography";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Provider from "./components/Provider";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/options" element={<ProtectedRoutes> <Options /> </ProtectedRoutes> } />
        <Route path="/order" element={<ProtectedRoutes> <Navbar /> <Provider> <Order /> </Provider> </ProtectedRoutes> } />
        <Route path="/preparing" element={<ProtectedRoutes> <Preparing /> </ProtectedRoutes> } />
        <Route path="/tables" element={<ProtectedRoutes> <Tables /> </ProtectedRoutes> } />
        <Route path="/iconography" element={<ProtectedRoutes> <Iconography /> </ProtectedRoutes> } />
      </Routes>
    </>
  );
};

export default App;
