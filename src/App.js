import { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import Header from "./components/header";
import NavBar from './components/navigation/NavBar'
import CloseNavLink from './components/navigation/CloseNavLink';
import "./styles/main.scss";

const App = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = useCallback(() => {
        setIsOpen(prevOpen => !prevOpen)
    }, [setIsOpen])

    const closeMenu = useCallback(() => {
        setIsOpen(false)
    }, [setIsOpen])

    return (
        <AppRouter>
            <Header logoClick={closeMenu}>
                <NavBar menuClick={toggleMenu} isOpen={isOpen}>
                    <CloseNavLink>
                        <NavLink to='/' activeclassname="active">
                            Home
                        </NavLink>
                    </CloseNavLink>
                    <CloseNavLink>
                        <NavLink to='/projects' activeclassname="active">
                            Projects
                        </NavLink>
                    </CloseNavLink>
                    <CloseNavLink>
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
