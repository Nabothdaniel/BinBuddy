import React from 'react'
import { Link } from 'react-router-dom';

//image import 

import dashBanner from '../../assets/dashboard/dashbanner2.png';

const DashboardCard = () => {
  return (
    <div className='bg-black rounded-md py-3 px-5 h-auto md:h-[250px] bg-cover bg-center ' style={{ backgroundImage: `url(${dashBanner})` }}>
      <h1 className="text-4xl md:text-6xl font-extrabold text-white my-3 mt-2">
        Welcome back, Daniel 👋
      </h1>
      <p className="text-white/80 md:ml-2 text-xl my-2 md:text-2xl">
        Great to see you again — ready to make waste sorting smarter and greener? 🌍
      </p>
      <div className="flex flex-wrap gap-4 mt-5 md:mt-12">
        <Link
          to="/dashboard/upload"
          className="bg-white text-green-800 font-medium border border-white/40 hover:bg-white/80 hover:text-green-900 transition duration-150 py-2 px-4 rounded-md shadow-sm"
        >
          Upload
        </Link>
        <Link
          to="/check-recent"
          className="bg-green-700 hover:bg-green-800 transition duration-150 text-white py-2 px-4 rounded-md shadow-sm"
        >
          Recent Results
        </Link>
      </div>

    </div>
  )
}

export default DashboardCard
