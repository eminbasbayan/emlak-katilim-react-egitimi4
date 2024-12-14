const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Modern E-Ticaret</span>
                <span className="block text-indigo-600">Deneyimi</span>
              </h1>
              <p className="mt-6 text-xl text-gray-500">
                En yeni ürünleri keşfedin ve en iyi fiyatlarla alışveriş yapın.
                Güvenli ödeme ve hızlı teslimat garantisi.
              </p>
              <div className="mt-8">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Alışverişe Başla
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Özellikler Bölümü */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Özellik 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 mb-4">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Hızlı Teslimat
              </h3>
              <p className="mt-2 text-gray-500">
                Siparişleriniz en hızlı şekilde kapınıza teslim edilir.
              </p>
            </div>

            {/* Özellik 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 mb-4">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Güvenli Ödeme
              </h3>
              <p className="mt-2 text-gray-500">
                %100 güvenli ödeme sistemleri ile güvenle alışveriş yapın.
              </p>
            </div>

            {/* Özellik 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 mb-4">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">7/24 Destek</h3>
              <p className="mt-2 text-gray-500">
                Müşteri hizmetlerimiz her zaman yanınızda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
