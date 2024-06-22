import React from 'react'

function Navbar() {

    const user = JSON.parse(localStorage.getItem('currentUser'));

    function logout(){
        localStorage.removeItem('currenUser');
        window.location.href="/login";
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">DeporTurnos</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon" style={{color:'white'}}></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mr-5">
                            {user ? (<><div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa-regular fa-user"></i>
                                
                                {user.nombre}
                               
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Mis reservas</a>
                                    <a class="dropdown-item" href="#" onClick={logout}>Cerrar sesión</a>
                                </div>
                            </div></>)
                                : (<>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/register">Registrarse</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/login">Iniciar sesión</a>
                                    </li>

                                </>)}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar