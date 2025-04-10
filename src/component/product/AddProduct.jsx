"use client";
import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: "",
        model: "",
        price: "",
        description: "",
        image: ""
    });

    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        setPreview(URL.createObjectURL(file));

        const formData = new FormData();
        formData.append("image", file);

        try {
            const res = await axios.post(
                'https://api.imgbb.com/1/upload?key=5baab7a9e1cdc65f0721a2b32aef61bb',
                formData
            );
            setProduct((prev) => ({ ...prev, image: res.data.data.url }));
        } catch (err) {
            console.error("Image upload failed", err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://dk-gadget-server-2.onrender.com/products", product);
            console.log("Product saved:", res.data);
            alert("Product added successfully!");
        } catch (err) {
            console.error("Failed to save product", err);
        }
    };

    return (
        <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-lg space-y-6 mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">Add New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 bg-gray-50 text-black"
                />
                <input
                    type="text"
                    name="model"
                    placeholder="model"
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 bg-gray-50 text-black"
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 bg-gray-50 text-black"
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 bg-gray-50 text-black"
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full text-black"
                />
                {preview && (
                    <img src={preview} alt="Preview" className="h-32 rounded-lg object-cover mx-auto" />
                )}
                <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-all"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
