import React, { useState } from 'react';
import { FaRegSquarePlus } from "react-icons/fa6";
import { BiTrashAlt } from "react-icons/bi";
import { LuBrainCircuit } from "react-icons/lu";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setChat((prev) => [
        ...prev,
        { role: 'bot', message: ' Please select an image before submitting.' },
      ]);
      return;
    }

    setChat((prev) => [...prev, { role: 'user', message: `Uploaded: ${file.name}` }]);
    setLoading(true);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('http://localhost:5000/api/v1/classify-waste', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Failed to classify image.');

      const data = await res.json();
      const label = data.label || data.classification || '🗑️ Unknown';

      setChat((prev) => [
        ...prev,
        { role: 'bot', message: ` BinBuddy says: This item is classified as: ${label}` },
      ]);
    } catch (err) {
      console.error(err);
      setChat((prev) => [
        ...prev,
        { role: 'bot', message: ' Error: Unable to classify image. Please try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white p-6 rounded-xl shadow-md my-10">
      <div className="flex items-center mb-4">
        <BiTrashAlt className="text-green-700 mr-2 text-2xl" />
        <h2 className="text-xl font-semibold text-green-700">Classify Waste</h2>
      </div>

      <p className="text-gray-600 mb-4">
        Upload an image of a waste item and let BinBuddy classify it as recyclable, compostable, or landfill.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center w-full h-[20rem] border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:bg-green-50 transition"
        >
          <FaRegSquarePlus className="text-4xl text-green-600 mb-2" />
          <p className="text-sm text-green-600">
            {file ? file.name : 'Click to upload image'}
          </p>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition w-full"
        >
          {loading ? 'Classifying...' : 'Upload & Classify'}
        </button>
      </form>

      <div className="mt-6 bg-gray-50 p-4 rounded-lg h-60 overflow-y-auto">
        <h3 className="text-sm text-gray-500 mb-2">BinBuddy Chat</h3>
        {chat.length === 0 ? (
          <p className="text-gray-400 italic">No messages yet...</p>
        ) : (
          chat.map((entry, idx) => (
            <div
              key={idx}
              className={`mb-2 p-2 rounded text-sm ${
                entry.role === 'user'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-white text-gray-700 border-l-4 border-green-400'
              }`}
            >
              {entry.message}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Upload;
