import { Outlet } from 'react-router-dom';
import Header from '../components/Layout/Header';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default MainLayout;
