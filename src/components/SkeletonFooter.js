import React from 'react';

const SkeletonFooter = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      {/* Copyright Section */}
      <div className="border-t border-gray-200 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Food Web. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SkeletonFooter;