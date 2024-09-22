import React from 'react'
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
      <div>
          {/* CONTENT */}
          <div className = "flex items-center justify-between px-8 py-4">
              <h1 className="poppins-bold text-3xl text-amber-400" > UTDFreebies</h1>
                {/* Nav Items */}
                <div className="poppins-semibold flex gap-8 px-2 py-1 text-2xl">
                    <p>New</p>
                    <p>Browse</p>
                    <p>Upload</p>
                
                </div>
          <div className= 'flex space-x-2'>
            <FaBell />
            <FaUserCircle />
        
          </div>
        </div>
        </div>  
  );
}

export default Navbar