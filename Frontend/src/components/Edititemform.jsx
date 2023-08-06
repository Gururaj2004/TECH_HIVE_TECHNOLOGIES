import React, { useState, useEffect } from 'react';
import pakka from '../assets/pakka.jpg';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function  Edititemform () {
  const { id } = useParams();
  const navigate = useNavigate();
  //const [change, setChange] = useState(false);
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/edititemform/${id}`)
      .then((res) => {
        setInputs(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id]);

  function handleEdit(event) {
    event.preventDefault();
    axios
      .put(`http://localhost:8080/edit`, { newdata: inputs, _id: id })
      .then(response => {
        alert("Data Edited Successfully");
        navigate('/');
      })
      .catch(error => {
        console.error(error);
      });
  }
  return (
    <div className='w-full h-screen flex'>
      <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-green-300 sm:max-w-[900px]'>
        <div className='w-full h-[550px] hidden md:block'>
          <img className='w-full h-full' src={pakka} alt="/" />
        </div>
        <div className='p-4 flex flex-col justify-around'>
          <form onSubmit={handleEdit}>
            <h2 className='text-4xl font-bold text-center mb-9 text-gray-600'>Traino!</h2>
            <div>
              <input className='border p-2 mr-2 mb-4 w-80 ml-2' type="text" placeholder='Train name' id='Train_name' name='Train_name' value={inputs.Train_name||''} onChange={(event) => setInputs({ ...inputs,Train_name: event.target.value})} />
            </div>
            <div>
              <input className='border p-2 mb-4 w-80 ml-2' type="text" placeholder='Description' value={inputs.Description || ''} onChange={(event) => setInputs({...inputs, Description: event.target.value})} />
            </div>
            <div>
              <input className='border p-2 mb-4 w-80 ml-2' type="number" placeholder='Train number' value={inputs.Train_no || ''} onChange={(event) => setInputs({...inputs, Train_no: event.target.value})}/>
            </div>
            <div>
              <input className='border p-2 mb-4 w-80 ml-2' type="text" placeholder='Timing' value={inputs.Timing || ''} onChange={(event) => setInputs({ ...inputs, Timing: event.target.value })} />
            </div>
            <div>
              <input className='border p-2 mb-4 w-80 ml-2' type="text" placeholder='Station' value={inputs.Station || ''} onChange={(event) => setInputs({...inputs, Station: event.target.value })}/>
            </div>
            <div>
              <input className='border p-2 w-80 ml-2' type="number" placeholder='Platform' value={inputs.Platform || ''} onChange={(event) => setInputs({...inputs, Platform: event.target.value })}/>
            </div>
            <button className='w-full py-2 my-4 bg-green-600 hover:bg-yellow-500 mt-7'>Edit-Items</button>
          </form>
        </div>
      </div>
    </div>
  );
};
