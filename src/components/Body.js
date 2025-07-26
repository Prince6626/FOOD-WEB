import { useEffect, useState } from "react";
import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filterList, setFilterList] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardWithOpen = withOpenLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const BASE_URL = "https://food-web-be-rhms.onrender.com";
    const data = await fetch(`${BASE_URL}/api/swiggy`);

    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex flex-col md:flex-row justify-between items-center gap-4 my-6">
        {/* Search Section */}
        <div className="search flex gap-2 items-center">
          <input
            type="text"
            className="border border-gray-300 rounded-md mx-4 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilterList(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        {/* Top Rated Button */}
        <div className="search m-4 p-4 flex items-center">
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-md transition"
            onClick={() => {
              let filterData = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilterList(filterData);
            }}
          >
            ⭐ Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          {filterList.map((restaurent) => (
            <Link
              key={restaurent.info.id}
              to={"/restaurants/" + restaurent.info.id}
              className="flex justify-center"
            >
              {restaurent.info.isOpen ? (
                <RestaurantCardWithOpen resData={restaurent.info} />
              ) : (
                <RestaurantCard resData={restaurent.info} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;