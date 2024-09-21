import { NavLink } from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import Header from "./components/header";
import NavBar from './components/navigation/NavBar'
import CloseNavLink from './components/navigation/CloseNavLink';
import "./styles/main.scss";

const App = () => {
    return (
        <AppRouter>
            <Header>
                <NavBar>
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
