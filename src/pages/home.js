import React from 'react';
import logo from "../assets/LOGO MAKKER.svg"
import './home.css';

export default function Home() {
    return (
        <header>
            <nav class="nav-bar home">
               <form>
                    <div ClassName="home-conteiner">
                        <img class="logo" src={logo} alt="Maker Mobile" />
                        <ul>
                            <li>
                                <a href='#'>Inicio</a>
                            </li>
                            <li>
                                <a href='#'>Planos</a>
                            </li>
                            <li>
                                <a href='#'>Ajuda</a>
                            </li>
                        </ul>
                       </div> 
                        
                        <div class= "nav-bar-direita">
                                <button type="submit ">Comece grátis</button>
                                    <li>
                                        <a href='#'>Log-in</a>
                                    </li>
                        </div>
                </form>
            </nav>
        </header>
    )
}