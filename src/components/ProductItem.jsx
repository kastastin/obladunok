import Image from "next/image";
import { Info, ShoppingCart } from "lucide-react";

const ProductItem = ({ product }) => {
  return (
    <div
      className={`relative inline-flex h-[360px] w-[calc(100vw/2-12px)] cursor-pointer flex-col items-center rounded-lg shadow-[0_1px_5px_rgb(0,0,0,0.2)] transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgb(0,0,0,0.2)] ${!product.isAvailable && "opacity-70"}`}
    >
      {/* Image */}
      <div className="relative h-[182px] w-full scale-75">
        <Image
          src={product.img}
          alt={product.title}
          fill
          sizes="100%"
          className="object-cover"
        />
      </div>

      {/* Title */}
      <span className="mt-2 px-2 text-center text-base font-medium">
        {product.title}
      </span>

      {/* Price */}
      <span className="mt-auto text-lg font-black text-[#C0392B]">
        {product.price} ₴
      </span>

      {/* Availability */}
      <span
        className={`mb-4 text-sm ${product.isAvailable ? "text-[#388451]" : "text-[#C0392B]"}`}
      >
        {product.isAvailable ? "В наявності" : "Немає в наявності"}
      </span>

      {/* Icons */}
      <div className="absolute right-1 top-1 z-10 space-y-2">
        <Info />
        <ShoppingCart
          className={`${!product.isAvailable && "cursor-not-allowed"}`}
        />
      </div>
    </div>
  );
};

export default ProductItem;
