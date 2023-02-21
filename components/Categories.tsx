import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";
import { Category } from "../interfaces/post";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3
        className="text-xl mb-8 font-semibold border-b
 pb-4"
      >
        Categories
      </h3>
      {(categories ?? []).map(({ slug, name }: Category) => (
        <Link key={slug} href={`/category/${slug}`}>
          <span className="cursor-pointer block pb-3 mb-3">
            {name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
