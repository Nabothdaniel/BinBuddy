import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Analytics = () => {
  const [totalSearches, setTotalSearches] = useState(0);
  const [correctSearches, setCorrectSearches] = useState(0);
  const [failedSearches, setFailedSearches] = useState(0);

  // Track search data
  const handleSearch = (isCorrectSearch) => {
    setTotalSearches(prev => prev + 1);
    if (isCorrectSearch) {
      setCorrectSearches(prev => prev + 1);
    } else {
      setFailedSearches(prev => prev + 1);
    }
  };

  // Data for Pie Chart
  const pieData = [
    { name: 'Correct Searches', value: correctSearches, fill: '#36A2EB' },
    { name: 'Failed Searches', value: failedSearches, fill: '#FF6384' },
    { name: 'Total Searches', value: totalSearches, fill: '#4BC0C0' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md my-10 max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold text-green-700 mb-6">Analytics</h2>

      {/* Action buttons */}
      <div className="mb-6">
        <button
          onClick={() => handleSearch(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition mr-4"
        >
          Simulate Correct Search
        </button>
        <button
          onClick={() => handleSearch(false)}
          className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
        >
          Simulate Failed Search
        </button>
      </div>

      {/* Data display with flexible cards */}
      <div className="flex justify-between gap-4 mb-6 flex-wrap">
        <div className="bg-gray-100 p-6 rounded-xl shadow-md flex-1 text-center">
          <h3 className="text-lg font-semibold text-gray-700">Total Searches</h3>
          <p className="text-2xl font-bold text-green-600">{totalSearches}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow-md flex-1 text-center">
          <h3 className="text-lg font-semibold text-gray-700">Correct Searches</h3>
          <p className="text-2xl font-bold text-blue-600">{correctSearches}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow-md flex-1 text-center">
          <h3 className="text-lg font-semibold text-gray-700">Failed Searches</h3>
          <p className="text-2xl font-bold text-red-600">{failedSearches}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow-md flex-1 text-center">
          <h3 className="text-lg font-semibold text-gray-700">Total Searches</h3>
          <p className="text-2xl font-bold text-purple-600">{totalSearches}</p>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="w-full mb-6 rounded-xl shadow-md">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              innerRadius="50%"
              outerRadius="80%"
              paddingAngle={5} // Add padding angle to separate the slices
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
