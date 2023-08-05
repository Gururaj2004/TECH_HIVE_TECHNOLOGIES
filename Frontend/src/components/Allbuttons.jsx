import React from 'react' 
import { Link } from 'react-router-dom'

export default function Allbuttons() {
  return (
    <div>
    <Link to='/Additemform'>
    <button className="bg-blue-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded">
      Add-Items
    </button>
    </Link> 
    
    <Link to='/Edititemform'>
    <button className="bg-blue-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded">
      Edit
    </button> 
    </Link>

    <Link to='/Viewdata'>
    <button className="bg-blue-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded">
      View
    </button> 
    </Link>

    <button className="bg-red-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded">
      Delete
    </button>
    </div>
  )
}