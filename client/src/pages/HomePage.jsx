import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../ContextAPI/UserContext";

function HomePage() {

  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-200 flex flex-col items-center justify-center">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-800 mb-4">Welcome to Car Management!</h1>
        <p className="text-lg text-gray-700">
          Streamline your car operations with ease and efficiency.
        </p>
      </header>

      {/* User Greeting or Navigation Buttons */}
      {
        user ? <div className="text-2xl font-semibold text-blue-800 bg-blue-300 py-3 px-5 rounded-lg shadow-md inline-block">
          Welcome, <span className="text-blue-600">{user.userName}</span>!
        </div>
          : <div className="flex space-x-6 mb-6">
            <Link to="/login">
              <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-md border border-blue-600 hover:bg-blue-50 transition duration-300">
                Sign Up
              </button>
            </Link>
          </div>
      }

      {/* Content Section with Manage Cars Button */}
      <section className="max-w-3xl bg-white p-8 rounded-lg shadow-lg text-gray-700">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Manage, Organize, and Optimize</h2>
        <p className="mb-4">
          Take control of your vehicle data and operations! Car Management helps you track, organize, and optimize your 
          car details, maintenance schedules, and more—all in one place.
        </p>
        <p className="mb-6">
          Whether you’re an individual car owner or a fleet manager, our platform is designed to make car management
          hassle-free. Keep your vehicles running smoothly with tools tailored to your needs.
        </p>

        {/* Manage Cars Button */}
        <div className="text-center mt-6">
          <Link to="/cars">
            <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300">
              Browse Cars
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
