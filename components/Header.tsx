import React, { useState, useEffect } from "react";
import Link from "next/link";
import { categories } from "../mock/categoriesMock";
import { HeaderProps } from "../interfaces/header";
import { getCategories } from "../services";
import { Category } from "../interfaces/post";

const Header = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-poined font-bold text-4xl text-white">
              GraphCMS
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category: Category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right hover:text-stone-700 mt-2 align-middle text-white ml-4 fonr-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
