import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handelClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Your Cart
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            {cartItems.length > 0
              ? `${cartItems.length} item${
                  cartItems.length !== 1 ? "s" : ""
                } in your cart`
              : "Your cart is empty"}
          </p>
        </div>

        {/* Cart Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          {cartItems.length === 0 ? (
            /* Empty Cart State */
            <div className="text-center py-12 md:py-16 px-6">
              <div className="text-6xl md:text-7xl mb-4">🛒</div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">
                Your cart is empty
              </h2>
              <p className="text-gray-500 mb-6 text-sm md:text-base">
                Add some delicious items to get started!
              </p>
              <button
                onClick={() => window.history.back()}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            /* Cart Items */
            <div>
              {/* Cart Header with Clear Button */}
              <div className="flex flex-col sm:flex-row justify-between items-center p-4 md:p-6 border-b border-gray-100 bg-gray-50/50">
                <div className="mb-3 sm:mb-0">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Order Summary
                  </h3>
                  <p className="text-sm text-gray-600">
                    Review your items before checkout
                  </p>
                </div>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg transition-all duration-200 font-medium text-sm md:text-base transform hover:scale-105 shadow-md hover:shadow-lg"
                  onClick={handelClearCart}
                >
                  🗑️ Clear Cart
                </button>
              </div>

              {/* Cart Items List */}
              <div className="p-4 md:p-6">
                <ItemList items={cartItems} showQuantityControls={true} />
              </div>

              {/* Cart Footer with Total and Checkout */}
              <div className="border-t border-gray-100 bg-gray-50/50 p-4 md:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-sm text-gray-600">Total Items</p>
                    <p className="text-lg font-semibold text-gray-800">
                      {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => window.history.back()}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg transition-colors duration-200 font-medium text-sm md:text-base"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;