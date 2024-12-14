import { useNavigate } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-8 text-center">
        <div className="flex justify-center mb-6">
          <FaExclamationTriangle className="text-6xl text-red-500" />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">Hata Oluştu!</h1>

        <p className="text-gray-600 mb-6">
          Üzgünüz, aradığınız sayfa bulunamadı veya bir hata oluştu. Lütfen
          tekrar deneyin.
        </p>

        <div className="space-y-4">
          <button
            onClick={() => navigate(-1)}
            className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
          >
            Geri Dön
          </button>

          <button
            onClick={() => navigate('/')}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
          >
            Ana Sayfaya Git
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
