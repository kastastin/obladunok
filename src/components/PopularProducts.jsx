import Image from "next/image";
import { Info, ShoppingCart } from "lucide-react";

const popularProducts = [
  {
    title: "Шолом FAST Future Assaut з підвісною системою WENDY",
    price: "8980",
    isAvailable: true,
    img: "https://images.prom.ua/4823457787_sholom-fast-future.jpg",
  },
  {
    title: "Шолом MICH 2000 Assault Shell Helmet NIJ IIIA",
    price: "9490",
    isAvailable: true,
    img: "https://images.prom.ua/4827499649_sholom-mich-2000.jpg",
  },
  {
    title: "Кавер до шолому FAST",
    price: "400",
    isAvailable: true,
    img: "https://images.prom.ua/5283679979_kaver-do-sholomu.jpg",
  },
  {
    title: "Шолом FAST з навушниками Earmor M31H",
    price: "16199",
    isAvailable: false,
    img: "https://images.prom.ua/4823995536_sholom-fast-z.jpg",
  },
];

const PopularProducts = () => {
  return (
    <div className="mt-5">
      <h3 className="text-xl font-semibold">Популярні товари</h3>
      {/* Product list */}
      <div className="overflow-x-auto">
        <div className="mt-5 flex h-[380px] w-max gap-2">
          {popularProducts.map((product) => (
            <div
              key={product.title}
              className={`relative inline-flex h-[360px] w-[calc(100vw/2-12px)] cursor-pointer flex-col items-center overflow-hidden rounded-lg shadow-md ${!product.isAvailable && "opacity-70"}`}
            >
              <div className="relative h-[182px] w-full scale-75">
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  sizes="100%"
                  className="object-cover"
                />
              </div>

              <span className="mt-2 px-2 text-center text-base font-medium">
                {product.title}
              </span>

              <span className="mt-auto text-lg font-black text-[#C0392B]">
                {product.price} ₴
              </span>

              <span
                className={`mb-4 text-sm ${product.isAvailable ? "text-[#388451]" : "text-[#C0392B]"}`}
              >
                {product.isAvailable ? "В наявності" : "Немає в наявності"}
              </span>

              <div className="absolute right-1 top-1 z-10 space-y-2">
                <Info />
                <ShoppingCart
                  className={`${!product.isAvailable && "cursor-not-allowed"}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
