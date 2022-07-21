import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
    <div>
        <NavLink to="/kitchen">Cocina</NavLink>
        <NavLink to="/tables">Mesas</NavLink>
        <NavLink to="/info">Iconografía</NavLink>
        <NavLink to="/">Cerrar Sesión</NavLink>
    </div>
    );
};

export default Navbar;
