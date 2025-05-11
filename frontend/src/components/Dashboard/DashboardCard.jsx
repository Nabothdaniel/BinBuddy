import { useEffect, useState } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { Link } from 'react-router-dom'; // make sure this is uncommented

import dashBanner from '../../assets/dashboard/dashbanner2.png';
import Spinner from '../utils/Spinner';

const DashboardCard = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          name: firebaseUser.displayName?.split(' ')[0] || 'User',
        });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  

  return (
    <div className="bg-black rounded-md py-3 px-5 h-auto md:h-[250px] bg-cover bg-center" style={{ backgroundImage: `url(${dashBanner})` }}>
      <h1 className="text-4xl md:text-6xl font-extrabold text-white my-3 mt-2">
        Welcome back,{!user ? <Spinner/>: <span>{user.name} 👋</span> }
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
  );
};

export default DashboardCard;
