import Header from '../components/Layout/Header';
import { FaTrash } from 'react-icons/fa';

const CartPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Alışveriş Sepetim
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sepetteki Ürünler */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              {/* Örnek Ürün */}
              <div className="flex items-center border-b border-gray-200 pb-4 mb-4">
                <img
                  src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  alt="Ürün"
                  className="w-24 h-24 object-contain"
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Fjallraven Backpack
                  </h3>
                  <p className="text-gray-600">Kategori: Çanta</p>
                  <div className="flex items-center mt-2">
                    <select className="border rounded-md px-2 py-1 mr-4">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                    <span className="text-lg font-semibold text-indigo-600">
                      1.299,90 ₺
                    </span>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700 ml-4">
                  <FaTrash size={20} />
                </button>
              </div>

              {/* Diğer Örnek Ürün */}
              <div className="flex items-center">
                <img
                  src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                  alt="Ürün"
                  className="w-24 h-24 object-contain"
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Mens Casual Premium
                  </h3>
                  <p className="text-gray-600">Kategori: Giyim</p>
                  <div className="flex items-center mt-2">
                    <select className="border rounded-md px-2 py-1 mr-4">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                    <span className="text-lg font-semibold text-indigo-600">
                      599,90 ₺
                    </span>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700 ml-4">
                  <FaTrash size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Sipariş Özeti */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Sipariş Özeti
              </h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Ara Toplam</span>
                  <span>1.899,80 ₺</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Kargo</span>
                  <span>29,90 ₺</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-semibold text-gray-800">
                  <span>Toplam</span>
                  <span>1.929,70 ₺</span>
                </div>
              </div>

              <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
                Siparişi Tamamla
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
