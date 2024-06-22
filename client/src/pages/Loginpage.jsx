import React, { useState } from 'react';
import Loader from "../components/Loader";
import Error from '../components/Error';
import axios from 'axios';

function Loginpage() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(false);

    async function login() {
        const user = { email, password };

        try {
            console.log(user);
            setloading(true);
            const response = await axios.post('http://localhost:8080/api/auth/login', user);
            const result = response.data;
            setloading(false);

            // Guardar el usuario en el localStorage
            localStorage.setItem('currentUser', JSON.stringify(result));
            localStorage.setItem('token', response.data.token);

            // Redireccionar a la página de inicio
            window.location.href = "/home";
        } catch (error) {
            console.error('Error during login:', error);
            seterror(true);
            setloading(false);
        }
    }

    return (
        <div>
            {loading && <Loader />}
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5">
                    {error && <Error message="Credenciales inválidas" />}
                    <div className='bs'>
                        <h2>Iniciar sesión</h2>
                        <input
                            type="text"
                            className='form-control'
                            placeholder='email'
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                        <input
                            type="password"
                            className='form-control'
                            placeholder='contraseña'
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />

                        <button className='btn btn-primary mt-3' onClick={login}>Iniciar sesión</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loginpage;
