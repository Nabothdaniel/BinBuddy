import { IoMdCheckmark } from "react-icons/io";
import { GiCrossMark } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";

const stats = [
  { icon: <IoMdCheckmark className="text-blue-500 text-xl" />, label: "Succesful Searches", value: 0 },
  { icon: <GiCrossMark className="text-yellow-500 text-xl" />, label: "Failed Searches", value: 0 },
  { icon: <MdDashboard className="text-green-500 text-xl" />, label: "Total Searches", value: 0 },
];

const StatCard = ({ icon, label, value }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-emerald-100 hover:duration-150 p-4 w-full sm:w-1/2 lg:w-1/4 hover:shadow-md transition">
    <div className="flex items-center space-x-4">
      <div className="bg-gray-100 p-3 rounded-xl">{icon}</div>
      <div>
        <p className="text-xl font-bold text-gray-800">{value}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  </div>
);

const DashboardStats = () => {
  return (
    <div className="w-full px-4 py-6 bg-gray-50">
      <div className="flex flex-wrap gap-2 justify-between">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;