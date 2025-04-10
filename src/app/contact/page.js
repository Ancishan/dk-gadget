const ContactPage = () => {
    return (
        <div className="pt-20 px-4 md:px-10 lg:px-20 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto">
                {/* Heading */}
                <h1 className="text-4xl font-extrabold text-pink-600 text-center mb-6">
                    Contact Us
                </h1>

                {/* Info Section */}
                <div className="text-center mb-10 text-gray-700">
                    <p>Email: <span className="font-medium">support@famshop.com</span></p>
                    <p>Phone: <span className="font-medium">+880 1234 567890</span></p>
                    <p>Location: <span className="font-medium">Dhaka, Bangladesh</span></p>
                </div>

                {/* Form Section */}
                <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                    <form className="space-y-6">
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Message</label>
                            <textarea
                                rows={5}
                                placeholder="Type your message..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
