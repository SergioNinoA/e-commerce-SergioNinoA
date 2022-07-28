import './navbar.css'
import CartWidget from '../Cart/CartWidget'

const NavBar = () => {
    return (
        <nav className="nav">
            <container className="nav-bar navbar-expand-lg position-relative">
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <div className="container-fluid">
                    <div id="header__cont">
                        <h1 className="header__title">Nombre del comercio</h1>
                        <h2 className="header__subtitle">Lema del comercio</h2>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                        <ul
                            className="navbar-nav me-auto mb-2 mb-lg-0 position-relative bottom-0 start-50 translate-middle-x">
                            <li className="nav-item text-center"><a className="nav-link" href="">History</a></li>                            
                            <li className="nav-item text-center"><a className="nav-link" href="">Contact</a></li>
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0 position-relative bottom-0 end-0">
                            <li className="nav-item nav-link dropdown ">
                                <a className="dropdown-toggle header__language" href="#" id="navbarDropdownMenuLink" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark bg-black dropdown-menu-lg-end"
                                    aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li><a className="dropdown-item text-white text-center" href="">Español</a></li>
                                    <li><a className="dropdown-item text-white text-center" href="">Français</a></li>
                                </ul>
                                
                            </li>
                        </ul>
                    </div><CartWidget />
                </div>
            </nav>
        </container>
        </nav>
    )
}


export default NavBar;