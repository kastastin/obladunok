import ProductItem from "@/components/ProductItem";

const ProductList = ({ products }) => {
  return (
    <div className="-mx-2 overflow-x-auto px-2 sm:-mx-4 sm:px-4 lg:-mx-8 lg:px-8">
      <div className="mt-5 flex h-[380px] w-max gap-2 sm:h-[410px] sm:gap-4 lg:mt-8 lg:h-[450px] lg:gap-8">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
