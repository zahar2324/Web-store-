import { Category, Product } from "./types/categories";

export const categories: Category[] = [
  { id: 1, name: "Headphones" },
  { id: 2, name: "Cameras" },
  { id: 3, name: "Mobiles" },
  { id: 4, name: "Accessories" },
  { id: 5, name: "Speakers" },
  { id: 6, name: "Watches" },
  { id: 7, name: "Monitors" }
];

export const Products: Product[] = [
  {
    id: 1,
    name: "Bluetooth Headphones",
    description: "Wireless over-ear headphones with noise cancellation.",
    price: 99.99,
    offerPrice: 79.99,
    image: ["https://via.placeholder.com/300"],
    category: ["Headphones"],
    color: "Black",
    date: "2024-06-01",
    popular: false
  },
  {
    id: 2,
    name: "DSLR Camera",
    description: "Professional DSLR camera with 24MP sensor.",
    price: 499.99,
    offerPrice: 449.99,
    image: ["https://via.placeholder.com/300"],
    category: ["Cameras"],
    color: "Black",
    date: "2024-05-15",
    popular: true
  },
  {
    id: 3,
    name: "Smartphone",
    description: "Modern smartphone with OLED display and fast processor.",
    price: 799.99,
    offerPrice: 699.99,
    image: ["https://via.placeholder.com/300"],
    category: ["Mobiles"],
    color: "Silver",
    date: "2024-04-10",
    popular: true
  },
  {
    id: 4,
    name: "Gaming Mouse",
    description: "High precision RGB gaming mouse.",
    price: 59.99,
    offerPrice: 39.99,
    image: ["https://via.placeholder.com/300"],
    category: ["Accessories"],
    color: "Black",
    date: "2024-03-20",
    popular: true
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    description: "Mechanical keyboard with customizable RGB lighting.",
    price: 129.99,
    offerPrice: 109.99,
    image: ["https://via.placeholder.com/300"],
    category: ["Accessories"],
    color: "White",
    date: "2024-02-12",
    popular: false
  },
  {
    id: 6,
    name: "4K Monitor",
    description: "Ultra HD 27-inch monitor for work and gaming.",
    price: 349.99,
    offerPrice: 299.99,
    image: ["https://via.placeholder.com/300"],
    category: ["Monitors"],
    color: "Black",
    date: "2024-01-25",
    popular: true
  },
  {
    id: 7,
    name: "Wireless Earbuds",
    description: "Compact earbuds with deep bass and long battery life.",
    price: 89.99,
    offerPrice: 69.99,
    image: ["https://via.placeholder.com/300"],
    category: ["Headphones"],
    color: "White",
    date: "2024-05-05",
    popular: false
  },
  {
    id: 8,
    name: "Smart Watch",
    description: "Fitness tracking smartwatch with heart rate monitor.",
    price: 199.99,
    offerPrice: 159.99,
    image: ["https://via.placeholder.com/300"],
    category: ["Watches"],
    color: "Gray",
    date: "2024-06-10",
    popular: true
  },
  {
    id: 9,
    name: "Tablet Pro",
    description: "Lightweight tablet perfect for media and productivity.",
    price: 399.99,
    offerPrice: 349.99,
    image: ["https://via.placeholder.com/300"],
    category: ["Mobiles"],
    color: "Gold",
    date: "2024-04-28",
    popular: false
  },
  {
    id: 10,
    name: "Portable Speaker",
    description: "Waterproof Bluetooth speaker with powerful sound.",
    price: 79.99,
    offerPrice: 59.99,
    image: ["https://via.placeholder.com/300"],
    category: ["Speakers"],
    color: "Blue",
    date: "2024-03-08",
    popular: true
  }
];
