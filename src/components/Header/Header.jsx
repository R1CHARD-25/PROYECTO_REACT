import "./Header.css"
import "../Navbar/Navbar.css"
import logo_nav from "../Image/Logo.png";


let vacio = '';
function Header_componente() {
    const abrir_cerrar_menu = () =>{
        let menu_desplegable = document.getElementById('menu');
        let boton_cerrar = document.getElementById('x');
        menu_desplegable.classList.toggle('abrir_menu');
        boton_cerrar.classList.toggle('colocar_x');
    }
    return (

        <header>
            <div className="barras">
                <button onClick={abrir_cerrar_menu} className='boton_menu margen_boton' id='x'></button>
            </div>
            <nav id='menu' className="desplegable">
                <ul className="nav_lateral">

                    <a className="logo_barra" href="#">
                        <img id="logo" src={logo_nav} alt="..." width="65" height="65"/>

                    </a>

                    <li className="estilo_lista_vacio"><p className="estilo_bloque"
                                                          href={vacio}>MOUNTAIN HEAT</p></li>
                    <li className="estilo_lista_vacio"><a className="estilo_bloque hover padding_lateral"
                                                          href={vacio}>Inicio</a></li>

                    <li className="estilo_lista_vacio"><a className="estilo_bloque hover padding_lateral"
                                                          href={vacio}>Equipamiento</a></li>
                    <li className="estilo_lista_vacio"><a className="estilo_bloque hover padding_lateral"
                                                          href={vacio}>Calzado</a></li>
                    <li className="estilo_lista_vacio"><a className="estilo_bloque hover padding_lateral"
                                                          href={vacio}>Indumentaria</a></li>
                    <li className="estilo_lista_vacio"><a className="estilo_bloque hover padding_lateral"
                                                          href={vacio}>Ayuda</a></li>
                    <div>
                            <div className="navbar-search">
                                <input type="text" placeholder="BUSCAR..."/>
                                <button type="submit">🔍</button>
                            </div>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header_componente;
