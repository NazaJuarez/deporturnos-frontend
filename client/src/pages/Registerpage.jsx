import axios from 'axios';
import React, { useState } from 'react';
import Loader from "../components/Loader";
import Error from '../components/Error';
import Success from '../components/Success';

function Registerpage() {

  // Hook
  const [nombre, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [telefono, setTelefono] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  async function register() {
    if (password !== cpassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (!nombre || !email || !password) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const user = {
      nombre,
      email,
      password,
      telefono
    };
    
    try {
      console.log("Sending user:", user);
      setLoading(true);
      const result = await axios.post('http://localhost:8080/api/auth/register', user);
      console.log(result);
      setLoading(false);
      setSuccess(true);

      // Clear form fields after successful registration
      setName('');
      setEmail('');
      setPassword('');
      setCpassword('');
      setTelefono('');

    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.response ? error.response.data.message : 'Error de registro');
    }
  }

  return (
    <div>
      {loading && <Loader />}
      {error && <Error message={error} />}
      {success && <Success message='Registro exitoso' />}

      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
          <div className='bs'>
            <h2>Registro</h2>
            <input
              type="text"
              className='form-control'
              placeholder='Nombre'
              value={nombre}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className='form-control'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className='form-control'
              placeholder='Contraseña'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              className='form-control'
              placeholder='Confirmar Contraseña'
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
            />

            <button className='btn btn-primary mt-3' onClick={register}>Registrarse</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerpage;













// import axios from 'axios';
// import React, { useState, useEffect } from 'react'
// import Loader from "../components/Loader";
// import Error from '../components/Error';
// import Success from '../components/Success';


// function Registerpage() {

//   //Hook
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [cpassword, setCpassword] = useState('');

//   const [loading, setLoading] = useState(false);
//   const [error, setError]= useState();
//   const [success, setSuccess]= useState();

//   async function register() {
//     if (password === cpassword) {
//       const user = {
//         name,
//         email,
//         password
//       }
      
//       try {
//         setLoading(true);
//         const result = (await axios.post(`http://localhost:8080/api/auth/register`, user)).data
//         setLoading(false);
//         setSuccess(true);

//         // setName('')
//         // setEmail('')
//         // setPassword ('')
//         // setCpassword('')

//       } catch (error) {
//         console.log(error);
//         setLoading(false);
//         setError(true);
//       };

//     } else {
//       alert('Las contraseñas no coinciden');
//     }
//   }

//   return (
//     <div>

//       {loading && (<Loader/>)}
//       {error && (<Error/>)}
      
//       <div className="row justify-content-center mt-5">
//         <div className="col-md-5 mt-5">
//         {success && (<Success message='Registro exitoso'/>)}
//           <div className='bs'>
//             <h2>Registro</h2>
//             <input type="text" className='form-control' placeholder='nombre'
//               value={name} onChange={(e) => { setName(e.target.value) }} />
//             <input type="text" className='form-control' placeholder='email'
//               value={email} onChange={(e) => { setEmail(e.target.value) }} />
//             <input type="text" className='form-control' placeholder='contraseña'
//               value={password} onChange={(e) => { setPassword(e.target.value) }} />
//             <input type="text" className='form-control' placeholder='confirmar contraseña'
//               value={cpassword} onChange={(e) => { setCpassword(e.target.value) }} />

//             <button className='btn btn-primary mt-3' onClick={register}>Registrarse</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Registerpage