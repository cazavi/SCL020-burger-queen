import { Routes, Route, Link} from "react-router-dom";
import Login from "./routes/Login";
import Options from "./routes/Options";
import Kitchen from "./routes/Kitchen";
import Order from "./routes/Order";
import Preparing from "./routes/Preparing";
import Tables from "./routes/Tables";
import Waiter from "./routes/Waiter";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/options" element={<Options />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/order" element={<Order />} />
        <Route path="/preparing" element={<Preparing />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/waiter" element={<Waiter />} />
      </Routes>
    </>
  );
};

export default App;
