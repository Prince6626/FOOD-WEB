import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data ,showItems ,setShowIndex}) => {

    // const [showItems ,setShowItems] = useState(false);

    const handleClick = () => {
        setShowIndex(!showItems);
    };

    return(
        <div>
            {/* Header */}
            <div className="w-full mx-auto my-2 md:my-4 bg-white shadow-sm md:shadow-md hover:shadow-lg transition-shadow duration-200 rounded-lg md:rounded-xl border border-gray-100 md:max-w-4xl">
                <div className="flex justify-between items-center cursor-pointer p-3 md:p-6 hover:bg-gray-50 transition-colors duration-200 rounded-lg md:rounded-xl"
                onClick={handleClick}
                >
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                            <span className="font-semibold md:font-bold text-sm md:text-lg text-gray-800 truncate">
                                {data.title}
                            </span>
                            <span className="text-xs md:text-sm text-gray-500 mt-0.5 sm:mt-0 flex-shrink-0">
                                ({data.itemCards.length} items)
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center ml-3 md:ml-4 flex-shrink-0">
                        <span className="text-base md:text-xl transition-transform duration-200 transform">
                            {showItems ? "⬆️" : "⬇️"}
                        </span>
                    </div>
                </div>
                
                {/* Accordion body */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    showItems ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    {showItems && (
                        <div className="border-t border-gray-100 p-3 md:p-6 pt-3 md:pt-4 bg-gray-50/30">
                            <ItemList items={data.itemCards}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RestaurantCategory;