import Header from '../components/Layout/Header';
import { FaUsers, FaHistory, FaAward } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Hakkımızda
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            2010 yılından beri müşterilerimize en kaliteli ürünleri en uygun fiyatlarla sunuyoruz. Müşteri memnuniyeti bizim önceliğimizdir.
          </p>
        </div>

        {/* İstatistikler */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-indigo-600 mb-4 flex justify-center">
              <FaUsers className="text-4xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">10.000+</h3>
            <p className="text-gray-600">Mutlu Müşteri</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-indigo-600 mb-4 flex justify-center">
              <FaHistory className="text-4xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">13 Yıl</h3>
            <p className="text-gray-600">Sektör Deneyimi</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-indigo-600 mb-4 flex justify-center">
              <FaAward className="text-4xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">50+</h3>
            <p className="text-gray-600">Ödül ve Başarı</p>
          </div>
        </div>

        {/* Hikayemiz */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Hikayemiz</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        {/* Ekibimiz */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Ekibimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    className="w-full h-full object-cover"
                    src={`https://picsum.photos/400/500?random=${member}`}
                    alt={`Ekip Üyesi ${member}`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">İsim Soyisim</h3>
                  <p className="text-gray-600">Pozisyon</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
