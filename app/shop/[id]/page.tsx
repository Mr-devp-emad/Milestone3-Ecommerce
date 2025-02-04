"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

interface Product {
  id: number;
  img: string;
  title: string;
  description?: string;
  price: number;
}

const ProductDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data: Product[]) => {
        const selectedProduct = data.find((p) => p.id === Number(id));
        if (selectedProduct) setProduct(selectedProduct);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  const addToCart = () => {
    if (product) {
      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

      // Check if the product is already in the cart
      const existingProductIndex = existingCart.findIndex(
        (item: Product & { quantity: number }) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        existingCart[existingProductIndex].quantity += quantity;
      } else {
        existingCart.push({ ...product, quantity });
      }

      localStorage.setItem("cart", JSON.stringify(existingCart));
      alert("Product added to cart!");
    }
  };

  if (loading) return <p className="text-center">Loading product...</p>;
  if (!product) return <p className="text-center">Product not found!</p>;

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative w-full h-96">
          <Image
            src={product.img}
            alt={product.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-4">{product.description}</p>
          <p className="text-gray-900 font-bold text-2xl mt-4">
            ${product.price.toFixed(2)}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-3 mt-4">
            <button
              className="px-3 py-2 bg-gray-300 rounded-lg"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              className="px-3 py-2 bg-gray-300 rounded-lg"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            onClick={addToCart}
          >
            Add to Cart
          </button>

          {/* Go to Cart Button */}
          <button
            className="mt-6 ml-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
            onClick={() => router.push("/cart")}
          >
            Go to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;