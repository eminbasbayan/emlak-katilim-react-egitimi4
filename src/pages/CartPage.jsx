import { Fragment } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../redux/slices/cartSlice';

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const cartTotals = cartItems.reduce(
    (toplam, item) => toplam + item.price * item.quantity,
    0
  );
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Alışveriş Sepetim
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cartItems.length === 0 && <p>Sepette hiç ürün yok!</p>}
          {cartItems.length !== 0 && (
            <Fragment>
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                  {/* Örnek Ürün */}
                  {cartItems.map(
                    ({ id, image, title, category, price, quantity }) => (
                      <div
                        className="flex items-center border-b border-gray-200 pb-4 mb-4"
                        key={id}
                      >
                        <img
                          src={image}
                          alt="Ürün"
                          className="w-24 h-24 object-contain"
                        />
                        <div className="flex-1 ml-4">
                          <h3 className="text-lg font-semibold text-gray-800">
                            {title}
                          </h3>
                          <p className="text-gray-600">Kategori: {category}</p>
                          <div className="flex items-center mt-2 gap-2">
                            <span>{quantity} x</span>
                            <span className="text-lg font-semibold text-indigo-600">
                              {price} $
                            </span>
                          </div>
                        </div>
                        <button
                          className="text-red-500 hover:text-red-700 
                     ml-4"
                          onClick={() => dispatch(deleteFromCart({ id }))}
                        >
                          <FaTrash size={20} />
                        </button>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Sipariş Özeti
                  </h2>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-gray-600">
                      <span>Ara Toplam</span>
                      <span>{cartTotals.toFixed(2)} $</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Kargo</span>
                      <span>29,90 $</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between font-semibold text-gray-800">
                      <span>Toplam</span>
                      <span>{(cartTotals + 29.9).toFixed(2)} $</span>
                    </div>
                  </div>

                  <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
                    Siparişi Tamamla
                  </button>
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
