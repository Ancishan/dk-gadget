"use client";
import Link from "next/link";

const NewArrivalPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Sorry, We Are Not Available
      </h2>
      <p className="text-gray-600 mb-6">
        This page is currently unavailable. Please check back later.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NewArrivalPage;
