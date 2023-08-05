import React, { useEffect, useState } from 'react';
import pakka from '../assets/pakka.jpg';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8080/"

export default function Additemform() {
   const [setAddSection] = useState(false)
   const [formData,setFormData] = useState({
    Train_name: "",
    Description: "",
    Train_no: "",
    Timing: "",
    Station: "",
    Platform: "",
  });

  

  const [dataList,setDataList] = useState([])

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

        /*const handleSubmit = async(e) => {
          e.preventDefault();
          const data = await axios.post("/create",formData)
          console.log(data);
          if(data.data.success){
            getFetchData()
            setAddSection(false)
            alert(data.data.message)
          }
        };*/
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/create", formData);
      console.log(response.data);
      if (response.data.success) {
        getFetchData();
        alert(response.data.message);
      } else {
        alert("Failed to add item. Please try again.");
      }
    } catch (error) {
      alert("An error occurred while adding the item, Please try again later:)");
    }
  };
  

  const getFetchData = async()=>{
    const data = await axios.get("/")
    console.log(data)
    if(data.data.success){
      setDataList(data.data.data)
    }
  }
  useEffect(()=>{
    getFetchData()
  },[])

  console.log(dataList)


  return (
    <div className='w-full h-screen flex'>
      <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-green-300 sm:max-w-[900px]'>
      <div className='w-full h-[550px] hidden md:block'>
          <img className='w-full h-full' src={pakka} alt="/" />
        </div>
        <div className='p-4 flex flex-col justify-around'>
          <form>
            <h2 className='text-4xl font-bold text-center mb-9 text-gray-600'>Traino!</h2>
            <div>
              <input className='border p-2 mr-2 mb-4 w-80 ml-2' type="text" placeholder='Train name' name='Train_name' onChange={handleOnChange} />
            </div>
            <div>
              <input className='border p-2 mb-4 w-80 ml-2' type="text" placeholder='Description' name='Description' onChange={handleOnChange} />
            </div>
            <div>
              <input className='border p-2 mb-4 w-80 ml-2' type="number" placeholder='Train number' name='Train_no' onChange={handleOnChange} />
            </div>
            <div>
              <input className='border p-2 mb-4 w-80 ml-2' type="text" placeholder='Timing' name='Timing' onChange={handleOnChange} />
            </div>
            <div>
              <input className='border p-2 mb-4 w-80 ml-2' type="text" placeholder='Station' name='Station' onChange={handleOnChange} />
            </div>
            <div>
              <input className='border p-2 w-80 ml-2' type="number" placeholder='Platform' name='Platform' onChange={handleOnChange} />
            </div>
            <button onClick={handleSubmit} className='w-full py-2 my-4 bg-green-600 hover:bg-yellow-500 mt-7'>Add-Items</button>
          </form>
        </div>
      </div>
    </div>
  );
}



