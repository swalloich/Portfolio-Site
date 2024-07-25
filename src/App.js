import { useState } from "react";
import { NavLink } from 'react-router-dom';

// components
import AppRouter from "./components/AppRouter";
import Header from "./components/header";
import NavBar from './components/nav-bar'
import CloseNavLink from './components/close-nav-link';

// stylesheets
import "./styles/main.scss";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <AppRouter>
            <Header onHomeClicked={closeMenu}>
                <NavBar navBarId="main-nav" onMenuClick={toggleMenu} onMenuClose={closeMenu} isMenuOpen={isMenuOpen}>
                    <CloseNavLink onLinkClicked={closeMenu}>
                        <NavLink to='/' activeclassname="active">
                            Home
                        </NavLink>
                    </CloseNavLink>
                    <CloseNavLink onLinkClicked={closeMenu}>
                        <NavLink to='/projects' activeclassname="active">
                            Projects
                        </NavLink>
                    </CloseNavLink>
                    <CloseNavLink onLinkClicked={closeMenu}>
                        <NavLink to='/contact' activeclassname="active">
                            Contact
                        </NavLink>
                    </CloseNavLink>
                </NavBar>
            </Header>
        </AppRouter>
    );
}

export default App;
