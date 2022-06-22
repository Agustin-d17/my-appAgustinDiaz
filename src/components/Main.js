import './Main.css';
import { Link } from "react-router-dom";

function Main() {
    return <div className="welcome-screen">
                 <div class="welcome-title animate__animated animate__fadeInRight">
            <h1 class="h1">Bienvenido a 1up 3D</h1>
        </div>
        <div class="welcome-subtitle animate__animated animate__fadeInRight">
            <h2 class="h2">Todo lo que necesitas en impresión 3D</h2>
        </div>
        <div>
            <Link to="/products" class="welcome-button">
                <button class="cssbuttons-io-button"> Nuestros trabajos
                    <div class="icon">
                      <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                    </div>
                </button>
            </Link>
        </div>
           </div>
}

export default Main;