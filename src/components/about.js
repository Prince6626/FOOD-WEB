import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About FoodWeb</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We're passionate about connecting food lovers with their favorite restaurants, 
            delivering exceptional culinary experiences right to your doorstep.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To revolutionize food delivery by providing seamless, fast, and reliable service 
              that brings communities together through great food.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the most trusted food delivery platform, fostering local businesses 
              and creating memorable dining experiences for every customer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
