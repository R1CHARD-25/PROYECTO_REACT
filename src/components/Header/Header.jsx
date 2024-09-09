import "./Header.css"
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
                        <img id="logo" src={logo_nav} alt="..." width="60" height="60"/>

                    </a>
                    <li className="estilo_lista_vacio"><p className="estilo_bloque"
                                                          href={vacio}>mountain ahead</p></li>
                    <li className="estilo_lista_vacio"><a className="estilo_bloque hover padding_lateral"
                                                          href={vacio}>Inicio</a></li>

                    <li className="estilo_lista_vacio"><a className="estilo_bloque hover padding_lateral"
                                                          href={vacio}>h</a></li>
                    <li className="estilo_lista_vacio"><a className="estilo_bloque hover padding_lateral"
                                                          href={vacio}>B</a></li>
                    <li className="estilo_lista_vacio"><a className="estilo_bloque hover padding_lateral"
                                                          href={vacio}>D</a></li>
                    <li className="estilo_lista_vacio"><a className="estilo_bloque hover padding_lateral"
                                                          href={vacio}>S</a></li>

                </ul>
            </nav>
        </header>
    )
}

export default Header_componente;
