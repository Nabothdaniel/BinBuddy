import Analytics from './Analytics';
import DashboardCard from './DashboardCard';
import DashboardStats from './DashboardStats';
const DashboardArea = () => {
  return (
    <div>
      <DashboardCard />
      <DashboardStats />
      <Analytics />
    </div>
  )
}

export default DashboardArea

