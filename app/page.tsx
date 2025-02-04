"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Male Clothes",
    description:
      "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    image: "/image1.jpeg", 
    link: "/shop",
  },
  {
    id: 2,
    title: "FEMALE WESTERN OUTFITS",
    description:
      "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    image: "/image2.jpg",
    link: "/shop",
  },
  {
    id: 3,
    title: "FEMALE CLOTHES",
    description:
      "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    image: "/images3.jpeg",
    link: "/shop",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <h1 className="text-center text-7xl font-bold mt-10">
        Welcome to Pesho Store
      </h1>

      {/* Product Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="text-center">
                {/* Product Image */}
                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={300}
                    className="w-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <h3 className="mt-4 text-lg font-bold">{product.title}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>

                {/* Discover Now Button */}
                <Link
                  href={product.link}
                  className="inline-block mt-4 text-black font-semibold border-b-2 border-black hover:text-gray-700 transition duration-300"
                >
                  DISCOVER NOW
                </Link>
              </div>
            ))}
          </div>

          {/* Products Button */}
          <div className="flex justify-center mt-10">
            <Link href="/shop">
              <button className="px-8 py-3 bg-black text-white text-lg font-semibold rounded-md hover:bg-gray-800 transition duration-300">
                Products
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
