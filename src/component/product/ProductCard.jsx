"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ProductCard = ({ product }) => {
  const { name, model, price, image, _id } = product;
  const router = useRouter();

  const [imgSrc, setImgSrc] = useState(image); // 🟢 এখানে imgSrc define করছি

  const handleViewDetails = () => {
    router.push(`/product/${_id}`);
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01] group">
      <div className="relative overflow-hidden rounded-lg aspect-square mb-3">
        <Image
          src={imgSrc}
          alt={name}
          width={500}
          height={500}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => {
            setImgSrc("/placeholder-image.jpg"); // fallback ইমেজ
          }}
        />
      </div>
      <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
        {name}
      </h3>
      <div className="mt-2 space-y-1">
        {model && (
          <p className="text-sm text-gray-600">
            Model: <span className="font-medium">{model}</span>
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
