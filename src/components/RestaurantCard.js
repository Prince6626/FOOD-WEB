
import { RES_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, cloudinaryImageId ,costForTwo} = resData;
 
    return(
        <div className="m-4 p-4 w-[250px] rounded-2xl shadow-md bg-white hover:shadow-xl transition duration-300 ease-in-out hover:scale-[1.02] cursor-pointer">
            <img
                className="rounded-xl w-full h-40 object-cover"
                alt="Restaurant Logo"
                src = {RES_LOGO + cloudinaryImageId}
            />
            <div className="mt-4 space-y-1">
                <h2 className="font-semibold text-lg truncate">{name}</h2>
                <p className="text-gray-600 text-sm line-clamp-2">{cuisines.join(", ")}</p>
            </div>
            <div className="flex justify-between items-center text-sm font-medium pt-2">
                <span className="text-green-600">⭐ {avgRating}</span>
                <span className="text-gray-700">{costForTwo}</span>
            </div>
        </div>
    );
};

// Higher Order Component 

// input - RestaurantCard => RestaurantCardPromoted

export const withOpenLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="relative">
                <label className="absolute top-2 left-2 z-10
                     bg-green-600 text-white text-xs font-semibold
                     px-2 py-1 rounded-md shadow">
                    Open
                </label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard; 