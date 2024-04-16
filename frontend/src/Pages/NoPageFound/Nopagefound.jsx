import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <img
        className="w-64 h-64 mb-8"
        src="https://via.placeholder.com/300"
        alt="Page Not Found"
      />
      <button className="bg-red-600 text-white p-4 rounded-lg">
        <a href="/" className="text-primary-600 hover:underline">
          Go back to home
        </a>
      </button>
    </div>
  );
};

export default NotFoundPage;
