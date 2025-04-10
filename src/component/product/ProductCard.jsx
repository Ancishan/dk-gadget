"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }) => {
  const { name, model, price, image, _id } = product;
  const router = useRouter();

  const handleViewDetails = () => {
    console.log("Navigating to product:", _id); // Debug log
    router.push(`/product/${_id}`);
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01] group">
      <div className="relative overflow-hidden rounded-lg aspect-square mb-3">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src = "/placeholder-image.jpg";
            e.target.className = "w-full h-full object-contain p-4 bg-gray-100";
          }}
        />
      </div>
      <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
        {name}
      </h3>
      <div className="mt-2 space-y-1">
        {model && (
          <p className="text-sm text-gray-600">
            model: <span className="font-medium">{model}</span>
          </p>
        )}
        <p className="text-lg font-bold text-gray-900">${price}</p>
      </div>
      <button
        onClick={handleViewDetails}
        className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-sm hover:shadow-md active:scale-95"
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCard;