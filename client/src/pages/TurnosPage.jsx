/*import React, { useState, useEffect, useParams } from "react";
import api from '../services/api';



function TurnosPage() {

    let { id } = useParams();
    const [data, setData] = useState();
    const [loading, setloading] = useState(true);
    const [error, setError] = useState();


    useEffect(() => {
        const fetchData = async () => {
          try {
            setloading(true);
            const { data: response } = await api.get(`http://localhost:8080/api/turnos/disponibles/${id}/cancha`, {
              id: id,
            });
            console.log(response);
            setData(response);
            setloading(false);
          } catch (error) {
            setError(true);
            console.error(error);
            setloading(false);
          }
        };
    
        fetchData();
      }, [id]);

      return(
        <div>

        </div>
      );

}

export default TurnosPage;*/
