const RestaurantCardShimmer = () => {
    return (
        <div className="w-[250px] bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
            {/* Open Badge Shimmer */}
            <div className="relative">
                <div className="absolute top-3 left-3 z-10 bg-gray-300 h-6 w-12 rounded"></div>
                
                {/* Image Shimmer */}
                <div className="h-48 bg-gray-300"></div>
            </div>
            
            {/* Content Section */}
            <div className="p-4">
                {/* Restaurant Name */}
                <div className="h-6 bg-gray-300 rounded mb-3 w-3/4"></div>
                
                {/* Cuisine Types */}
                <div className="h-4 bg-gray-300 rounded mb-3 w-full"></div>
                
                {/* Rating and Price Row */}
                <div className="flex items-center justify-between">
                    {/* Rating Section */}
                    <div className="flex items-center gap-2">
                        <div className="h-4 w-4 bg-gray-300 rounded"></div>
                        <div className="h-4 w-8 bg-gray-300 rounded"></div>
                    </div>
                    
                    {/* Price Section */}
                    <div className="h-4 w-20 bg-gray-300 rounded"></div>
                </div>
            </div>
        </div>
    );
};

const Shimmer = () => {
    return (
        <div className="flex flex-wrap justify-center gap-6 m-4 p-4">
            {Array.from({ length: 20 }).map((_, index) => (
                <RestaurantCardShimmer key={index} />
            ))}
        </div>
    );
};

export default Shimmer;