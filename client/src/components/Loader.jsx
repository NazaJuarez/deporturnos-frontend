import React, { useState } from 'react'
import RingLoader from "react-spinners/RingLoader";

function Loader() {
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#239B56"); // Color inicial del loader

    return (
        <div style={{marginTop:'150px'}}>
            <div className='sweet-loading text-center'>
                <RingLoader
                    color={color}
                    loading={loading}
                    css='' // Aplica los estilos CSS definidos en override
                    size={100} // Tamaño del loader
                />
            </div>
        </div>
    );
}

export default Loader;