import Header from "../components/Layout/Header";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemleri burada yapılacak
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* İletişim Başlık Bölümü */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">Bizimle İletişime Geçin</h1>
        <p className="text-center text-gray-600 mb-12">Sorularınız için bize ulaşın, en kısa sürede dönüş yapacağız.</p>

        {/* İletişim Bilgileri ve Form Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* İletişim Bilgileri */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">İletişim Bilgilerimiz</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FaPhone className="text-indigo-600 text-xl mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">Telefon</h3>
                    <p className="text-gray-600">+90 (212) 555 55 55</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaEnvelope className="text-indigo-600 text-xl mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">E-posta</h3>
                    <p className="text-gray-600">info@sirketiniz.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-indigo-600 text-xl mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">Adres</h3>
                    <p className="text-gray-600">Merkez Mahallesi, Atatürk Caddesi No:123<br />İstanbul, Türkiye</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* İletişim Formu */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Mesaj Gönderin</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Mesaj Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
