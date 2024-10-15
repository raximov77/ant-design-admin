import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';  // Import your components
import Navbar from '../components/Navbar';
import Organization from '../pages/Organization';
import OrganizationAdd from '../pages/OrganizationAdd';
import OrganizationMore from '../pages/OrganizationMore';
import CapitalUsers from '../pages/CapitalUsers';
import RegionUsers from '../pages/RegionUsers';

function DashboardPage() {
  return (
    <>
      <Header />
      <div className='flex justify-between'>
        <Navbar />
        <div className='w-[80%] h-[100vh] overflow-y-auto'>
          <Routes>
            <Route path='/' element={<Organization />} />
            <Route path='/add' element={<OrganizationAdd />} />
            <Route path='/:id' element={<OrganizationMore />} />
            <Route path='/capital-users' element={<CapitalUsers />} />
            <Route path='/region-users' element={<RegionUsers />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
