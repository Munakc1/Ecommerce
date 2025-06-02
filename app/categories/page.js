"use client";
import Link from "next/link";

const categories = [
  { name: "Action", image: "https://source.unsplash.com/400x300/?action-game" },
  { name: "Adventure", image: "https://source.unsplash.com/400x300/?adventure-game" },
  { name: "Puzzle", image: "https://source.unsplash.com/400x300/?puzzle-game" },
  { name: "Racing", image: "https://source.unsplash.com/400x300/?racing-game" },
  { name: "Multiplayer", image: "https://source.unsplash.com/400x300/?multiplayer-game" },
  { name: "Horror", image: "https://source.unsplash.com/400x300/?horror-game" },
];

export default function CategorySection() {
  return (
    <section className="px-6 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
        Game Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            href={`/category/${category.name.toLowerCase()}`}
            key={category.name}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden hover:scale-[1.02] duration-300 cursor-pointer"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center font-semibold text-lg text-gray-700">
              {category.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
