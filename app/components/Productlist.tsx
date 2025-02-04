"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  img: string;
  title: string;
  description?: string;
  price: number;
  quantity?: number;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>(
    () => JSON.parse(localStorage.getItem("cart") || "[]") || []
  );
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Function to add a product to cart with quantity tracking
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      let updatedCart;

      if (existingProduct) {
        updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });

    alert("✅ Product added to cart!");
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Shop Our Collection
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-gray-600 text-lg">Loading products...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg overflow-hidden p-4"
              >
                <Link href={`/shop/${product.id}`} passHref>
                  <div className="relative w-full h-56 cursor-pointer">
                    <Image
                      src={product.img}
                      alt={product.title || "Product"}
                      layout="fill"
                      className="rounded-md object-cover"
                    />
                  </div>
                </Link>

                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {product.title || "No Title Available"}
                </h3>
                <p className="text-gray-700 font-semibold mt-2">
                  ${product.price.toFixed(2)}
                </p>

                {product.description && (
                  <p className="text-gray-600 mt-2 text-sm">
                    {product.description}
                  </p>
                )}

                <button
                  onClick={() => addToCart(product)}
                  className="py-2 px-4 bg-black rounded-lg border text-white mt-4 w-full hover:bg-gray-800 transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
