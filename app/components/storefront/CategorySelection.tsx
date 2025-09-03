import Image from "next/image";
import Link from "next/link";
import all from "@/public/assets/images/categories/laptops_tablets_1.jpg";
import men from "@/public/assets/images/categories/men_product1.jpg";
import women from "@/public/assets/images/categories/women-product_1.jpg";

export function CategorySelection() {
  return (
    <div className="py-16 sm:py-24">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-extrabold tracking-tight">Shop by Category</h2>

        <Link className="text-sm font-semibold text-primary hover:text-primary/80" href="/products/all">
          Browse all Products &rarr;
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">

        <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:relative sm:aspect-w-1 sm:row-span-2">
          <Image alt="All Products Image" src={all} className="object-cover object-center" />
          <div className="bg-gradient-to-b from-transparent to-black opacity-95 sm:absolute sm:inset-0" />
          <div className="p-6 flex items-end sm:absolute sm:inset-0">
            <Link href="/products/all">
              <h3 className="text-white font-semibold">All Products</h3>
              <p className="mt-1 text-sm text-white">Shop Now</p>
            </Link>
          </div>
        </div>

        <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-w-1 sm:h-full">
          <Image
            alt="Products for Men Image"
            src={men}
            className="object-cover object-center sm:absolute sm:inset-0 sm:w-full sm:h-full"
          />
          <div className="bg-gradient-to-b from-transparent to-black opacity-95 sm:absolute sm:inset-0" />
          <div className="p-6 flex items-end sm:absolute sm:inset-0">
            <Link href="/products/men">
              <h3 className="text-white font-semibold">Products for Men</h3>
              <p className="mt-1 text-sm text-white">Shop Now</p>
            </Link>
          </div>
        </div>

        <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-w-1 sm:h-full">
          <Image
            alt="Products for Women Image"
            src={women}
            className="object-cover object-center sm:absolute sm:inset-0 sm:w-full sm:h-full"
          />
          <div className="bg-gradient-to-b from-transparent to-black opacity-95 sm:absolute sm:inset-0" />
          <div className="p-6 flex items-end sm:absolute sm:inset-0">
            <Link href="/products/women">
              <h3 className="text-white font-semibold">Products for Women</h3>
              <p className="mt-1 text-sm text-white">Shop Now</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
