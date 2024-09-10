

import Header from './components/Header/Header.jsx';
import './App.css';
import Footer from "./components/Footer/Footer.jsx";


function App() {
    return (
        <>
            <div className="app-background">
                <div className="app-container">
                    <Header />
                    <div className="main-content">

                        <h1 style={{color: 'yellowgreen'}}>introduccion a MOUNTAIN HEAT</h1>
                        <p style={{color: 'lightblue'}}>en este apartado conoceras sobre este sitio web dedicado al equipamiento cordillerano, encuntra lo que buscas aqui.</p>
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default App;