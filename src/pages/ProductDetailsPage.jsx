import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

import { useEffect, useState } from 'react';
import ProductDetailsSkeleton from '../components/UI/ProductDetailsSkeleton';

const ProductDetailsPage = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const result = await axios(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(result.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchProduct();
  }, [productId]);

  if (!product) return <ProductDetailsSkeleton />;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Ürün Görseli */}
            <div className="flex items-center justify-center bg-white p-8">
              <img
                src={product?.image}
                alt="Ürün Görseli"
                className="max-h-[400px] object-contain"
              />
            </div>

            {/* Ürün Detayları */}
            <div className="flex flex-col space-y-4">
              <div className="border-b pb-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product?.title}
                </h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400" />
                    <span className="ml-1 text-gray-600">
                      {product?.rating?.rate}
                    </span>
                  </div>
                  <span className="text-gray-500">
                    ({product?.rating?.count} değerlendirme)
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-3xl font-bold text-indigo-600">
                  {product?.price} $
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Ürün Açıklaması
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product?.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Kategori
                  </h3>
                  <span className="inline-block bg-gray-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-600">
                    {product?.category}
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
