import './index.scss';
import Sidebar from '../../pages/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
