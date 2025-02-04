import { NextResponse } from "next/server";
const products = [
  {
    id: 1,
    img: "/product1.webp",
    title: "New Style Ladies Fashion Dresses",
    description: "Elegant night dress for parties.",
    price: 49.99,
  },
  {
    id: 2,
    img: "/product2.jpg",
    title: "Men's Fashion, Style & Latest Trends",
    description: "Stay trendy with the latest fashion.",
    price: 59.99,
  },
  {
    id: 3,
    img: "/product3.jpg",
    title: "Gents Guide To Winter Fashion Essentials",
    description: "Stylish winter fashion guide.",
    price: 79.99,
  },
  {
    id: 4,
    img: "/product4.webp",
    title: "British Coat Winter Fashion Essentials",
    description: "Classic British-style winter coat.",
    price: 99.99,
  },
  {
    id: 5,
    img: "/product5.webp",
    title: "Ladies Fashion",
    description: "Modern women’s fashion collection.",
    price: 39.99,
  },
  {
    id: 6,
    img: "/product6.jpeg",
    title: "Ladies Fashion",
    description: "Modern women’s fashion collection.",
    price: 39.99,
  },
  {
    id: 7,
    img: "/product7.jpg",
    title: "Ladies Fashion",
    description: "Modern women’s fashion collection.",
    price: 39.99,
  },
  {
    id: 8,
    img: "/product8.jpeg",
    title: "Ladies Fashion",
    description: "Modern women’s fashion collection.",
    price: 75.99,
  },
  {
    id: 9,
    img: "/product9.png",
    title: "Ladies Fashion",
    description: "Modern women’s fashion collection.",
    price: 99.99,
  },
  {
    id: 10,
    img: "/product10.webp",
    title: "Ladies Fashion",
    description: "Modern women’s fashion collection.",
    price: 89.99,
  },


];
export async function GET() {
  return NextResponse.json(products);
}