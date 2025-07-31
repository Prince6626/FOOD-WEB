import { useState } from 'react';
import { useNavigate } from 'react-router';

const LoginPage = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Demo-only: Just store a flag and redirect
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/');
  };

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Only allow digits
    if (value.length <= 10) {
      setMobile(value);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl mr-2">🍴</span>
          <h1 className="text-orange-500 font-bold text-xl">FOOD-WEB</h1>
        </div>
      </div>

      {/* Login Card */}
      <div className="max-w-md mx-auto mt-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login to FOOD-WEB</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Mobile Number</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 text-sm">+91</span>
              </div>
              <input
                type="tel"
                value={mobile}
                onChange={handleMobileChange}
                className="w-full pl-12 pr-3 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter 10-digit mobile number"
                maxLength="10"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleLogin(e);
                  }
                }}
              />
            </div>
            {mobile && mobile.length < 10 && (
              <p className="text-sm text-gray-500 mt-1">
                {10 - mobile.length} more digits required
              </p>
            )}
          </div>
          
          <button
            onClick={handleLogin}
            disabled={isLoading || mobile.length !== 10}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 px-4 rounded font-medium transition-colors flex items-center justify-center"
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Logging in...
              </div>
            ) : (
              'Continue'
            )}
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p className="mt-2">Just enter a 10-digit number starting with 6, 7, 8, or 9</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;