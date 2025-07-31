import React from "react";

const MenuShimmer = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="text-center py-8">
        <div className="h-8 bg-gray-300 rounded w-48 mx-auto mb-4 animate-pulse"></div>
        <div className="h-5 bg-gray-200 rounded w-40 mx-auto animate-pulse"></div>
      </div>

      {/* Menu sections */}
      <div className="px-6 space-y-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white border border-gray-200 rounded-lg p-4 shadow-sm animate-pulse"
          >
            <div className="h-5 bg-gray-300 rounded w-48"></div>
            <div className="w-8 h-8 bg-blue-400 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuShimmer;
