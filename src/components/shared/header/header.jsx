import "./header.css"
import { Link } from "react-router-dom"


const Header = () =>{

    return(

        <>
            <header className="header" id="header">
                <h2>QubitX</h2>

                <nav className="nav">
                    <ul className="nav_list">
                        <li className="nav_link"><Link className="nav_link_item" to="/home">Home</Link></li>
                        <li className="nav_link"><Link className="nav_link_item" to="/product">Products</Link></li>
                        <li className="nav_link"><Link className="nav_link_item" to="/usecases">Use cases</Link></li>
                        <li className="nav_link"><a className="nav_link_item" href="http://">About us</a></li>
                        <li className="nav_link"><a className="nav_link_item" href="http://">Pricing</a></li>
                        <li className="nav_link"><a className="nav_link_item" href="http://">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header