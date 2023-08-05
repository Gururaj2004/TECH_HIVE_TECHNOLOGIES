import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Maintable() {
  const [dataList, setDataList] = useState([]);
   
  

  const fetchData = () => {
    axios.get("http://localhost:8080/")
      .then((resp) => {
        setDataList(resp.data.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/delete/${id}`)
      .then(() => {
        fetchData();
        alert("Data deleted Successfully :)")
      })
      .catch((error) => {
        console.log("Error deleting data:", error);
      });
  };
  
  return (
    <div className=' h-screen bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800'>
    <div className="flex flex-col w-[1240px] ml-36">
    <h2 className='text-4xl font-bold text-center mb-4 text-gray-600 mt-3 mr-[1200px]'>Traino!</h2>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 pb-24">
          <div className="overflow-hidden">
            <Link to='/Additemform'>
              <button className="w-2/5 ml-[392px] rounded-b-lg bg-gray-400 hover:bg-gray-600 text-black font-semibold py-2 px-4 rounded">
                Add
              </button>
            </Link>
            <h2 className='font-bold text-3xl flex justify-center items-center m-5'>TRAIN DATA</h2>
            <table className="min-w-full text-left text-sm sm:text-base lg:text-lg font-light mt-5">
              <thead className="border-b font-medium dark:border-neutral-500 bg-slate-600 text-slate-50">
                <tr>
                  <th scope="col" className="px-6 py-4 font-medium">S.No</th>
                  <th scope="col" className="px-6 py-4">Train Name</th>
                  <th scope="col" className="px-6 py-4">Description</th>
                  <th scope="col" className="px-6 py-4">Train Number</th>
                  <th scope="col" className="px-6 py-4">Timing</th>
                  <th scope="col" className="px-6 py-4">Station</th>
                  <th scope="col" className="px-6 py-4">Platform</th>
                  <th scope="col" className="px-6 flex justify-center items-center py-4 mr-16">Actions</th>
                </tr>
              </thead>
              <tbody>
                {dataList.map((el, index) => {
                  return (
                    <tr key={el._id} className=' bg-zinc-400'>
                      <td className="px-6 py-4 font-medium">{index + 1}</td>
                      <td className="px-6 py-4">{el.Train_name}</td>
                      <td className="px-6 py-4">{el.Description}</td>
                      <td className="px-6 py-4">{el.Train_no}</td>
                      <td className="px-6 py-4">{el.Timing}</td>
                      <td className="px-6 py-4">{el.Station}</td>
                      <td className="px-6 mx-5 py-4">{el.Platform}</td>
                      <td className="px-6 py-4 flex justify-center items-center space-x-2 mr-10">
                        <Link to={`/Viewdata/${el._id}`}>
                          <button className="bg-blue-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded">
                            View
                          </button>
                        </Link>
                  
                        <Link to={`/Edititemform/${el._id}`}> 
                          <button className="bg-blue-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded">
                            Edit
                          </button>
                        </Link>
                        <button
                          className="bg-red-500 hover:bg-red-300 text-white font-semibold py-2 px-4 rounded"
                          onClick={() => handleDelete(el._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}