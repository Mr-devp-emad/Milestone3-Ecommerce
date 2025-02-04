"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { LuSearch } from "react-icons/lu";

type CartItem = {
  quantity?: number;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const router = useRouter();

  // Function to update cart count from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
      const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
      setCartCount(totalItems);
    };

    updateCartCount(); // Initial update
    window.addEventListener("storage", updateCartCount);

    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="bg-gray-100 shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-xl font-bold">PESHO STORE</h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-black">
              Home
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-black">
              Shop
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-black">
              Contact
            </Link>
          </div>

          {/* Cart and Search */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/cart" className="text-gray-700 hover:text-black">
              Cart ({cartCount})
            </Link>
            <button
              className="text-gray-700 hover:text-black"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <LuSearch />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 z-10">
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-black text-white p-2 rounded-r-md"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden bg-white absolute top-16 left-0 w-full shadow-lg z-10 transition-transform duration-300 ease-in-out"
        >
          <div className="p-4 text-center text-xl flex flex-col gap-5">
            <Link href="/" className="block text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/shop" className="block text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link href="/cart" className="block text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>
              Cart ({cartCount})
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
