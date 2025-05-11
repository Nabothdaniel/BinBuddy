import Analytics from './Analytics';
import DashboardCard from './DashboardCard';
import DashboardStats from './DashboardStats';
import RecentSearchList from './RecentSearchist';
const DashboardArea = () => {
  return (
    <div className="grid gap-4">
      <DashboardCard />
      <DashboardStats />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="md:col-span-1">
          <Analytics />
        </div>
        <div className="md:col-span-2">
          <RecentSearchList />
        </div>
      </div>
    </div>
  )
}

export default DashboardArea

