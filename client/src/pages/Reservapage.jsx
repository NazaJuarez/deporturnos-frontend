import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Loader from "../components/Loader";

function Reservapage() {
  
  const [data, setData] = useState();
  const [loading, setloading] = useState(true);
  const [error, setError] = useState();
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const { data: response } = await axios.post("/api/canchas/getcanchabyid", {
          canchaid: id,
        });
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

  return (
    <div className="m-5">
      {loading ? (
        <Loader />
      ) : data ? 
       (
        <div>
          <div className="row justify-content-center mt-5 bs">
            <div className="col-md-6">
              <h1>{data.name}</h1>
              <img
                src={data.imageurls}
                alt="FirstImage"
                className="bigimg"
              />
            </div>
            <div className="col-md-6">
              <div style={{textAlign:'right'}}>
                <h1>Renting Details</h1>
                <hr />
                <b>
                  <p>Name: </p>
                  <p>From Date: </p>
                  <p>To Date: </p>
                  <p>Maximum people: </p>
                </b>
              </div>
              <div style={{textAlign:'right'}}>
                <b>
                  <h1>Amount</h1>
                  <hr />

                  <p>Total Months: </p>
                  <p>Per Month: {data.rentpermonth} </p>
                  <p>Total Amount: </p>
                </b>
              </div>
              <div style={{float:'right'}}>
                <button className="btn btn-primary">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      ): (error)}
    </div>
  );
}

export default Reservapage;

