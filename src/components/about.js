import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">About Us</h1>

        {/* Functional Component User */}
        <User name={"PS"} location={"Mehsana"} />

        {/* Optional: Class Component if needed */}
        {/* <div className="mt-10">
          <UserClass name="PS" location="Mehsana" />
        </div> */}
      </div>
    </div>
  );
};

export default About;
