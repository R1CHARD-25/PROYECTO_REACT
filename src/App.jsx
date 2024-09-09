// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './components/Header/Header.jsx';
import './App.css';
import Footer from "./components/Footer/Footer.jsx";
function App() {
    return (
        <>
            <div className="app-background"> {<img src="./components/Image/F%20sitio.jpeg" alt=""/>}
                <div className="app-container">
                    <Header />
                    <div className="main-content">
                        <h2>Principal</h2>
                        <p>que</p>
                    </div>
                    <Footer /> {/* Footer siempre abajo */}
                </div>
                </div>
            </>
            )
            }

            export default App;