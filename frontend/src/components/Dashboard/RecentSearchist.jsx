import React from 'react';
// import { Clock } from 'lucide-react';

const recentSearches = [
  {
    itemName: 'Plastic Bottle',
    category: 'Recyclable',
    timestamp: new Date().toLocaleString(),
  },
  {
    itemName: 'Banana Peel',
    category: 'Compostable',
    timestamp: new Date().toLocaleString(),
  },
  {
    itemName: 'Styrofoam Cup',
    category: 'Landfill',
    timestamp: new Date().toLocaleString(),
  },
];

const getCategoryStyle = (category) => {
  switch (category) {
    case 'Recyclable':
      return 'text-green-600 border-green-600';
    case 'Compostable':
      return 'text-yellow-600 border-yellow-600';
    case 'Landfill':
      return 'text-red-600 border-red-600';
    default:
      return 'text-gray-600 border-gray-400';
  }
};

const RecentSearchList = () => {
  return (
    <div className="space-y-4 bg-white shadow py-5 px-8 rounded-md">
     <div className='flex justify-between items-center'>
     <p className="text-2xl my-5 font-bold text-emerald-600">Notifications</p>
     <p className="text-gray-700 hover:text-gray-500 hover:duration-250 cursor-pointer">Mark all as read</p>
     </div>
      {recentSearches.map((item, index) => (
        <div
          key={index}
          className="w-full hover:bg-emerald-50/45  hover:duration-250 rounded-sm cursor-pointer  p-4 flex justify-between items-center"
        >
          <div>
            <h3 className="text-lg font-semibold">{item.itemName}</h3>
            <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
              {/* <Clock className="w-4 h-4" /> */}
              <span>{item.timestamp}</span>
            </div>
          </div>
          <span
            className={`border px-3 py-1 rounded-full text-sm font-medium ${getCategoryStyle(
              item.category
            )}`}
          >
            {item.category}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RecentSearchList;
