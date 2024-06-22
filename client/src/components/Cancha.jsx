import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function Cancha({ cancha }) {

    //Hook para mostrar los valores 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='row bs mt-5'>
            <div className='col-md-4'>
                <img src={cancha.imgurls} className='smallimg' />
            </div>
            <div className='col-md-7'>
                <h1>Nombre: {cancha.nombre}</h1>
                <b>
                    <p>Caracteristicas: {cancha.caract}</p>
                    <p>Deporte: {cancha.deporte}</p>
                    <p>Precio: {cancha.precioHora}</p>
                    <p>Descripcion: {cancha.descripcion}</p>
                </b>
                <div style={{ float: "right" }}>
                    <Link to={`/cancha/${id}/turnos`}>
                    <button className='btn btn-primary m-2'>Reservar</button>
                    </Link>
                    <button className='btn btn-primary' onClick={handleShow}>Ver detalles</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{cancha.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {cancha.imgurls}
                    {cancha.descripcion}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Cancha;