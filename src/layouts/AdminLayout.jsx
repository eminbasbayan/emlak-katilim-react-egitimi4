import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaBox, FaUsers, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { useState } from 'react';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      path: '/admin/dashboard',
      icon: <FaTachometerAlt />,
      title: 'Dashboard',
    },
    {
      path: '/admin/products',
      icon: <FaBox />,
      title: 'Ürünler',
    },
    {
      path: '/admin/users',
      icon: <FaUsers />,
      title: 'Kullanıcılar',
    },
  ];

  const handleLogout = () => {
    // Çıkış işlemleri burada yapılacak
    navigate('/auth/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-indigo-800 text-white transition-all duration-300 ease-in-out`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between">
            {isSidebarOpen && <h1 className="text-xl font-bold">Admin Panel</h1>}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-indigo-700"
            >
              <FaBars />
            </button>
          </div>
        </div>

        <nav className="mt-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center py-3 px-4 space-x-3 hover:bg-indigo-700 transition-colors ${
                location.pathname === item.path ? 'bg-indigo-700' : ''
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {isSidebarOpen && <span>{item.title}</span>}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4">
          <button
            onClick={handleLogout}
            className={`flex items-center space-x-3 text-red-300 hover:text-red-100 transition-colors w-full ${
              isSidebarOpen ? 'justify-start' : 'justify-center'
            }`}
          >
            <FaSignOutAlt />
            {isSidebarOpen && <span>Çıkış Yap</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white shadow-sm">
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">
                {menuItems.find((item) => item.path === location.pathname)?.title || 'Admin Panel'}
              </h2>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Admin Kullanıcı</span>
                <img
                  src="https://via.placeholder.com/40"
                  alt="Admin"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
