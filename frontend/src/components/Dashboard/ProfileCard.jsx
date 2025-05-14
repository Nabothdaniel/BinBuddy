import React from 'react'
import { FaPen } from "react-icons/fa";
import user from '../../../public/user.png'

const ProfileCard = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
    <h2 className="text-xl font-semibold mb-4">My Profile</h2>

    <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between mb-6">
      <div className="flex items-center space-x-4">
        <img
          src={user}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">Yahya Godiwa</h3>
          <p className="text-sm text-gray-500">kwara, Nigeria</p>
        </div>
      </div>
      <button className="flex items-center gap-1 text-sm text-gray-600 border px-3 py-1 rounded hover:bg-gray-100">
        Edit <FaPen size={12} />
      </button>
    </div>

    {/* Personal Information */}
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-md">Personal Information</h3>
        <button className="flex items-center gap-1 text-sm text-gray-600 border px-3 py-1 rounded hover:bg-gray-100">
          Edit <FaPen size={12} />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-500">First Name</p>
          <p>Yahya</p>
        </div>
        <div>
          <p className="text-gray-500">Last Name</p>
          <p>Godiwa</p>
        </div>
        <div>
          <p className="text-gray-500">Email address</p>
          <p>yahya@gmail.com</p>
        </div>
        <div>
          <p className="text-gray-500">Phone</p>
          <p>+234801234567</p>
        </div>
        <div className="md:col-span-2">
          <p className="text-gray-500">Bio</p>
          <p>Active User</p>
        </div>
      </div>
    </div>

    {/* Address Section */}
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-md">Address</h3>
        <button className="flex items-center gap-1 text-sm text-gray-600 border px-3 py-1 rounded hover:bg-gray-100">
          Edit <FaPen size={12} />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-500">Country</p>
          <p>Nigeria</p>
        </div>
        <div>
          <p className="text-gray-500">City/State</p>
          <p>Ilorin, kwara</p>
        </div>
        <div>
          <p className="text-gray-500">Postal Code</p>
          <p>243101</p>
        </div>
    
      </div>
    </div>
  </div>
  )
}

export default ProfileCard