import { ChevronRight } from "lucide-react";

import ProductList from "@/components/ProductList";

const ProductSection = ({ title, productList, isRecommended }) => {
  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{title}</h3>

        {isRecommended && (
          <div className="flex cursor-pointer items-center font-semibold text-[#C0C0C0]">
            <span className="underline-offset-4 hover:underline">
              ще {productList.length} товари
            </span>
            <ChevronRight />
          </div>
        )}
      </div>

      <ProductList products={productList} />
    </div>
  );
};

export default ProductSection;
