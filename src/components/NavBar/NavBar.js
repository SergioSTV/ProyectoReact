import nav_logo from '../imagenes/descarga.png'
import { CartWidget } from './CartWidget.js';
import { Link } from "react-router-dom";

export const NavBar = () => {

    return (
        <nav>
            <div>
                <ul id="nav">
                    <Link to="/"><img src={nav_logo} alt="logo"/></Link>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/category/Importados">Importados</Link></li>
                    <li><Link to="/category/Nacionales">Nacionales</Link></li>
                    
                    <Link to="/Cart"><CartWidget /></Link>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;