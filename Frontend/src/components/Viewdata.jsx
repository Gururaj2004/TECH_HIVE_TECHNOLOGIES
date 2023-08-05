import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Viewdata() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/viewdata/${id}`)
      .then((resp) => {
        setData(resp.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, [id]);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500 bg-gray-600 text-slate-50">
                <tr>
                  <th scope="col" className="px-6 py-4">S.No</th>
                  <th scope="col" className="px-6 py-4">Train Name</th>
                  <th scope="col" className="px-6 py-4">Description</th>
                  <th scope="col" className="px-6 py-4">Train Number</th>
                  <th scope="col" className="px-6 py-4">Timing</th>
                  <th scope="col" className="px-6 py-4">Station</th>
                  <th scope="col" className="px-6 py-4">Platform</th>
                </tr>
              </thead>
              <tbody>
                {data && (
                  <tr className="border-b transition duration-300 ease-in-out  dark:border-neutral-500 hover:bg-blue-200">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                    <td className="whitespace-nowrap px-6 py-4">{data.Train_name}</td>
                    <td className="whitespace-nowrap px-6 py-4">{data.Description}</td>
                    <td className="whitespace-nowrap px-6 py-4">{data.Train_no}</td>
                    <td className="whitespace-nowrap px-6 py-4">{data.Timing}</td>
                    <td className="whitespace-nowrap px-6 py-4">{data.Station}</td>
                    <td className="whitespace-nowrap px-6 py-4">{data.Platform}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
