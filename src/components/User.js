import { useState } from "react";

const User = ({name}) => {

    // const[count ,setCount] = useState(0);

    return (
        <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-4 text-center hover:shadow-lg transition duration-300">
            {/* <h1>Count: {count}</h1> */}
            {/* <button 
                    onClick={()=>{
                        setCount(count+1);
                    }}
                >
                    inc
            </button> */}
            <h2 className="text-2xl font-bold text-gray-800">👤 {name}</h2>
            <h3 className="text-gray-600">📍 Location: Mehsana</h3>
            <h4 className="text-gray-500">📞 Contact: @ps</h4>
        </div>
    )
}

export default User;