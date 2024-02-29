import { Outlet, useNavigate } from 'react-router-dom';
import Dashboardview from './components/Dashboard/Dashboardview';
import Sidebar from './components/Dashboard/Sidebar';
import { useEffect, useState } from 'react';
import { isLoggedIn } from './services/service.auth';

function App() {
  const navigate = useNavigate()
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const userLoggedIn = isLoggedIn();
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  // useEffect(() => {
  //   if (!userLoggedIn) {
  //     navigate("/login");
  //   }
  //   setIsLoading(true);
  // }, [navigate, isLoading]);

  return (
    <div className="">
      <div className="flex">
        <div className={`basis-[16%] h-[100vh] ${isSidebarOpen ? '' : 'hidden'}`}>
          <Sidebar />
        </div>
        <div className={`flex-1 border overflow-scroll h-[100vh]`}>
          <Dashboardview toggleSidebar={toggleSidebar} />
          <div className={`w-full ${isSidebarOpen ? '' : 'ml-0'}`}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
