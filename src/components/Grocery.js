import React, { useState } from 'react';

const Grocery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const groceryData = [
    {
      id: 1,
      name: "Fresh Apples",
      price: 120,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQOmASJvO4ijzdYuPlBR0oYEAYMJbzsUpJL5x5c8Iw8rigTRy7Jp2g-v7-2lmitgBcZONEVs8vsisOMzq7nbE8ySXVu4qb9t9yjkADAvi8",
      category: "Fruits",
    },
    {
      id: 2,
      name: "Tomatoes",
      price: 40,
      image: "https://www.lovefoodhatewaste.com/sites/default/files/styles/twitter_card_image/public/2022-08/Tomatoes-sh769524253.jpg.webp?itok=QYFYzSFr",
      category: "Vegetables",
    },
    {
      id: 3,
      name: "Milk 1L",
      price: 55,
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQP_6L7hUVBVJL1OGKVnY4gq-vdmoRoGbQzATotU_vhhw4-jHLDD39Xl2fyFWscU912bC-6s100j8XJY3oY75EqweiIkASxL0f83V1R1mBmXD53p7prbO15CkY",
      category: "Dairy",
    },
    {
      id: 4,
      name: "Lay's Chips",
      price: 20,
      image: "https://www.jiomart.com/images/product/original/490000331/lay-s-india-s-magic-masala-potato-chips-40-g-product-images-o490000331-p490000331-0-202410251815.jpg?im=Resize=(420,420)",
      category: "Snacks",
    },
    {
      id: 5,
      name: "Coca Cola 500ml",
      price: 35,
      image: "https://www.jiomart.com/images/product/original/491085932/coca-cola-750-ml-product-images-o491085932-p491085932-0-202412121933.jpg?im=Resize=(360,360)",
      category: "Beverages",
    },
    {
      id: 6,
      name: "Bananas (1 dozen)",
      price: 60,
      image: "https://www.jiomart.com/images/product/original/590001285/banana-robusta-6-pcs-box-approx-800-g-1100-g-product-images-o590001285-p590001285-0-202409171905.jpg?im=Resize=(360,360)",
      category: "Fruits",
    },
    {
      id: 7,
      name: "Spinach Bunch",
      price: 30,
      image: "https://www.jiomart.com/images/product/original/590000488/spinach-bunch-approx-90-g-100-g-product-images-o590000488-p592342847-0-202409171907.jpg?im=Resize=(360,360)",
      category: "Vegetables",
    },
    {
      id: 8,
      name: "Paneer 200g",
      price: 90,
      image: "https://www.jiomart.com/images/product/original/490006894/milky-mist-paneer-200-g-pack-product-images-o490006894-p490006894-0-202410161200.jpg?im=Resize=(360,360)",
      category: "Dairy",
    },
    {
      id: 9,
      name: "Pepsi Can",
      price: 25,
      image: "https://www.jiomart.com/images/product/original/rv32yeqvqs/pepsi-turkey-250-ml-product-images-orv32yeqvqs-p604235751-0-202308301500.jpg?im=Resize=(360,360)",
      category: "Beverages",
    }
  ];

  const categories = ["All", "Fruits", "Vegetables", "Dairy", "Snacks", "Beverages"];

  const filteredProducts = groceryData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (item) => {
    console.log(`Added ${item.name} to cart`);
    // You can implement cart logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            🛒 Grocery Store
          </h1>
          <p className="text-gray-600 text-lg">Fresh groceries delivered to your doorstep</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search groceries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm"
          />
        </div>

        {/* Categories */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-xl mb-4"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/200x200?text=Image+Not+Found';
                }}
              />
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                  {item.category}
                </span>
                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                <p className="text-xl font-bold text-orange-600">₹{item.price}</p>
              </div>
              <button 
                onClick={() => handleAddToCart(item)}
                className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Add to Cart 🛒
              </button>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Grocery;