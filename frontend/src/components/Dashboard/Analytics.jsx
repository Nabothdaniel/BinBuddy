import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Analytics = () => {
  const [totalSearches, setTotalSearches] = useState(10);
  const [correctSearches, setCorrectSearches] = useState(4);
  const [failedSearches, setFailedSearches] = useState(6);

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
    <div className="bg-white p-6 rounded-xl shadow-sm my-10 max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold text-green-700 mb-6">Analytics</h2>

      {/* Pie Chart */}
      <div className="w-full mb-6 rounded-xl">
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
