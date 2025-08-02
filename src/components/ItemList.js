import { useDispatch } from "react-redux";
import { RES_LOGO } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };
  const handleRemoveItem = (item) => {
    // dispatch an action
    dispatch(removeItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-3 sm:p-4 m-2 border-gray-200 border-b-2 text-left flex flex-col sm:flex-row justify-between gap-4 sm:gap-0"
        >
          <div className="w-full sm:w-9/12">
            <div className="py-2">
              <span className="text-sm sm:text-base font-medium">
                {item.card.info.name}
              </span>
              <span className="text-sm sm:text-base">
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {item.card.info.description}
            </p>
          </div>

          <div className="w-full sm:w-3/12 p-2 sm:p-4 flex flex-col items-center">
            <img
              src={RES_LOGO + item.card.info.imageId}
              className="w-full max-w-[200px] sm:max-w-none h-32 sm:h-auto object-cover rounded-lg mb-3 sm:mb-0"
            />
            <div className="flex flex-row sm:flex-col lg:flex-row justify-center items-center gap-2 sm:gap-3 lg:gap-2 p-2 sm:p-4 w-full">
              {/* Add Button */}
              <button
                className="group relative bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8 lg:py-3 rounded-full hover:from-emerald-600 hover:to-green-600 hover:scale-110 hover:shadow-xl transition-all duration-300 ease-out shadow-lg font-medium min-w-[80px] sm:min-w-[100px] lg:min-w-[120px] border-0 focus:outline-none focus:ring-4 focus:ring-emerald-200 active:scale-95 text-xs sm:text-sm flex-1 sm:flex-none"
                onClick={() => handleAddItem(item)}
              >
                <span className="flex items-center justify-center gap-1 sm:gap-2">
                  <span className="text-sm sm:text-lg group-hover:rotate-180 transition-transform duration-300">
                    ➕
                  </span>
                  <span className="tracking-wide">Add</span>
                </span>
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>

              {/* Remove Button */}
              <button
                className="group relative bg-gradient-to-r from-red-500 to-rose-500 text-white px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8 lg:py-3 rounded-full hover:from-red-600 hover:to-rose-600 hover:scale-110 hover:shadow-xl transition-all duration-300 ease-out shadow-lg font-medium min-w-[80px] sm:min-w-[100px] lg:min-w-[120px] border-0 focus:outline-none focus:ring-4 focus:ring-red-200 active:scale-95 text-xs sm:text-sm flex-1 sm:flex-none"
                onClick={() => handleRemoveItem(item)}
              >
                <span className="flex items-center justify-center gap-1 sm:gap-2">
                  <span className="text-sm sm:text-lg group-hover:rotate-180 transition-transform duration-300">
                    ➖
                  </span>
                  <span className="tracking-wide">Remove</span>
                </span>
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
