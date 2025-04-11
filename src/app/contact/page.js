"use client"
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // WhatsApp number (with country code, e.g., +880 for BD)
    const whatsappNumber = "8801829806490";

    const text = `Hello, I am ${name} (%0AEmail: ${email})%0A%0AMessage:%0A${message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="pt-20 px-4 md:px-10 lg:px-20 bg-gradient-to-tr from-gray-100 via-white to-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-pink-600 text-center mb-6">
          Contact Us
        </h1>

        {/* Info Section */}
        <div className="text-center mb-10 text-gray-700 space-y-1">
          <p>
            <span className="font-medium text-gray-900">Email:</span>{" "}
            dkg46742@gmail.com
          </p>
          <p>
            <span className="font-medium text-gray-900">Phone:</span> 01829806490
          </p>
          <p>
            <span className="font-medium text-gray-900">Location:</span>{" "}
            Chittagong, Bangladesh
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none transition duration-200"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none transition duration-200"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none transition duration-200 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition duration-300 shadow-md"
            >
              Send Message via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
