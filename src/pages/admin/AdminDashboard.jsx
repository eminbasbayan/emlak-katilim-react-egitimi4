import { FaUsers, FaShoppingCart, FaBox, FaMoneyBillWave } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const AdminDashboard = () => {
  const { productData } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.cart);

  const totalRevenue = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const dashboardStats = [
    {
      title: 'Toplam Ürün',
      value: productData.length,
      icon: <FaBox className="text-3xl text-blue-500" />,
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Toplam Sipariş',
      value: cartItems.length,
      icon: <FaShoppingCart className="text-3xl text-green-500" />,
      bgColor: 'bg-green-100',
    },
    {
      title: 'Toplam Müşteri',
      value: '1,234',
      icon: <FaUsers className="text-3xl text-purple-500" />,
      bgColor: 'bg-purple-100',
    },
    {
      title: 'Toplam Gelir',
      value: `${totalRevenue.toFixed(2)} ₺`,
      icon: <FaMoneyBillWave className="text-3xl text-yellow-500" />,
      bgColor: 'bg-yellow-100',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

      {/* İstatistik Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {dashboardStats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bgColor} rounded-lg p-6 shadow-sm`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{stat.title}</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-2">
                  {stat.value}
                </h3>
              </div>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Son Siparişler Tablosu */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Son Siparişler
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ürün
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Miktar
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fiyat
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Toplam
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-10 w-10 object-contain"
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {item.title}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.quantity}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {item.price.toFixed(2)} ₺
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {(item.price * item.quantity).toFixed(2)} ₺
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 