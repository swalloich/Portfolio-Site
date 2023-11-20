import { Header } from "./components/header";
import AppRouter from "./scripts/AppRouter";
import "./styles/base.css";

function App() {
    return (
        <>
            <AppRouter>
                <Header />
            </AppRouter>
        </>
    );
}

export default App;
