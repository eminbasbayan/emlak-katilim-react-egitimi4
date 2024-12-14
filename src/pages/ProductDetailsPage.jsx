import Header from '../components/Layout/Header';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

const ProductDetailsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Ürün Görseli */}
            <div className="flex items-center justify-center bg-white p-8">
              <img
                src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                alt="Ürün Görseli"
                className="max-h-[400px] object-contain"
              />
            </div>

            {/* Ürün Detayları */}
            <div className="flex flex-col space-y-4">
              <div className="border-b pb-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Mens Casual Premium Slim Fit T-Shirts
                </h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400" />
                    <span className="ml-1 text-gray-600">4.1</span>
                  </div>
                  <span className="text-gray-500">(259 değerlendirme)</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-3xl font-bold text-indigo-600">
                  22.30 ₺
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Ürün Açıklaması
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Kategori
                  </h3>
                  <span className="inline-block bg-gray-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-600">
                    men&apos;s clothing
                  </span>
                </div>

                <div className="pt-6">
                  <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition duration-300 flex items-center justify-center space-x-2">
                    <FaShoppingCart />
                    <span>Sepete Ekle</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
