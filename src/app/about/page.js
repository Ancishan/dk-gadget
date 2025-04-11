import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="pt-20 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-gray-100 via-gray-50 to-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-blue-600 text-center mb-6">
          About FAMShop
        </h1>

        {/* Introduction */}
        <p className="text-gray-700 text-lg leading-relaxed text-center mb-10">
          Welcome to FAMShop — your one-stop destination for trendy fashion,
          top-quality products, and a seamless online shopping experience.
        </p>

        {/* 2-column grid section */}
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white p-6 rounded-xl shadow-md">
          {/* Image */}
          <Image
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
            alt="About FAMShop"
            width={500}
            height={320}
            className="w-full h-80 object-cover rounded-lg shadow-sm"
          />

          {/* Text content */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At FAMShop, we believe fashion should be fun, affordable, and
              accessible to everyone. Our dedicated team curates a wide range of
              styles and brands to make sure you find something that fits your
              vibe. Whether you are looking for the latest arrivals or timeless
              classics, we have got you covered.
            </p>
          </div>
        </div>

        {/* Mission section */}
        <div className="mt-16 bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We aim to empower people through fashion by providing high-quality
            products and exceptional service. Our mission is to create an
            enjoyable, trustworthy, and personalized shopping experience for
            every customer.
          </p>
        </div>

        {/* CTA section */}
        <div className="mt-16 text-center bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Want to get in touch?
          </h2>
          <p className="text-gray-600 mb-4">
            Reach out to us via our{" "}
            <a href="/contact" className="text-blue-500 font-medium underline">
              Contact Us
            </a>{" "}
            page — we'd love to hear from you!
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
