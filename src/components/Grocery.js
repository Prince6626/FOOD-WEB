const Grocery = () => {

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

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-green-600 mb-6">🛒 Grocery </h1>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search groceries..."
          className="w-full sm:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Categories (Mockup) */}
      <div className="mb-6 flex flex-wrap gap-3">
        {["Fruits", "Vegetables", "Dairy", "Snacks", "Beverages"].map((category, i) => (
          <button
            key={i}
            className="px-4 py-2 bg-green-100 text-green-800 rounded-full hover:bg-green-200 transition"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {groceryData.map((item) => (
            <div
                key={item.id}
                className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition w-72"
            >
                <img
                src={item.image}
                alt={item.name}
                className="w-60 h-40 object-cover rounded mb-3"
                />
                <h2 className="text-lg font-semibold text-gray-700">{item.name}</h2>
                <p className="text-gray-500 text-sm">₹{item.price}</p>
                <button className="mt-3 w-60 bg-green-500 hover:bg-green-600 text-white py-2 rounded transition">
                Add to Cart
                </button>
            </div>
        ))}

      </div>
    </div>
  );
};

export default Grocery;
