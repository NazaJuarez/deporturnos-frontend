import React, { useEffect, useState } from 'react';
import Cancha from '../components/Cancha';
import Loader from '../components/Loader';
import api from '../services/api';
import { DatePicker, Space } from 'antd';
import { TimePicker } from 'antd';
import moment from 'moment';


const CanchasPage = () => {

  const [data, setData] = useState([]);

  //Variables. Cuando la api request empieza el loading es true
  const [loading, setloading] = useState();
  const [error, seterror] = useState();

  // Hook 
  const [date, setdate] = useState();
  const [time, settime] = useState();

  useEffect(() => {
    const fetchData = async () => {

      try {
        setloading(true);
        const { data: response } = await api.get('http://localhost:8080/api/canchas/disponibles');
        console.log(response)
        setData(response);
        setloading(false);

      } catch (error) {
        seterror(true);
        console.error(error.message);
        setloading(false);
      }

    }

    fetchData();
  }, []);

  function filterByDate(date) {
    console.log(moment(date).format('DD/MM/YYYY'));
    setdate(moment(date).format('DD/MM/YYYY'))
  }

  function filterByTime(time) {
    console.log(time.format('HH:mm'));
    settime(time.format('HH:mm'));
  }


  return (
    // <div>
    //   <h1>HOME PAGE</h1>
    // </div>
    <div className='container'>

      <div className='row mt-5'>
        <div className="col-md-3">
          <DatePicker format='DD/MM/YYYY' onChange={filterByDate} />
          <TimePicker format='HH/mm' onChange={filterByTime} />
        </div>

      </div>



      <div className='row justify-content'>
        {loading ? (<h1><Loader /></h1>) :
          error ? (<h1>Error</h1>) :
            (data.map(cancha => {
              return <div className='com-md-9 mt-2'>
                <Cancha cancha={cancha} />
              </div>
            }
            ))}
      </div>
    </div>



  );
};


export default CanchasPage