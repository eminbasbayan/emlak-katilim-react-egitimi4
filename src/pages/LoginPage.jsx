import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Geçerli bir email adresi giriniz!')
    .required('Email alanı zorunludur!'),
  password: yup
    .string()
    .required('Şifre alanı zorunludur!')
    .min(6, 'Şifre en az 6 karakter olmalıdır!'),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data) {
      toast.success('Giriş işlemi başarılı.');
      navigate('/');
    }
  };

  console.log(errors);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Giriş Yap
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                E-posta Adresi
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                {...register('email')}
                onBlur={() => trigger('email')}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Şifre
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                {...register('password')}
                onBlur={() => trigger('password')}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Beni Hatırla
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm text-indigo-600 hover:text-indigo-500"
              >
                Şifremi Unuttum
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Giriş Yap
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Hesabınız yok mu?{' '}
              <Link
                to="/register"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Kayıt Ol
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
