const ProductDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Ürün Görseli Skeleton */}
            <div className="flex items-center justify-center bg-white p-8">
              <div className="w-full h-[400px] bg-gray-200 animate-pulse rounded-lg"></div>
            </div>

            {/* Ürün Detayları Skeleton */}
            <div className="flex flex-col space-y-4">
              <div className="border-b pb-4">
                {/* Başlık Skeleton */}
                <div className="h-8 bg-gray-200 rounded-md w-3/4 mb-2 animate-pulse"></div>

                {/* Rating Skeleton */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="w-10 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>

              <div className="space-y-4">
                {/* Fiyat Skeleton */}
                <div className="w-24 h-8 bg-gray-200 rounded-md animate-pulse"></div>

                {/* Açıklama Başlık Skeleton */}
                <div>
                  <div className="w-40 h-6 bg-gray-200 rounded-md mb-2 animate-pulse"></div>
                  {/* Açıklama Paragraf Skeleton */}
                  <div className="space-y-2">
                    <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>

                {/* Kategori Skeleton */}
                <div>
                  <div className="w-24 h-6 bg-gray-200 rounded-md mb-2 animate-pulse"></div>
                  <div className="w-32 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                </div>

                {/* Buton Skeleton */}
                <div className="pt-6">
                  <div className="w-full h-12 bg-gray-200 rounded-md animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
