import ProductItem from "@/components/ProductItem";

const ProductList = ({ products }) => {
  return (
    <div className="-mx-2 overflow-x-auto px-2">
      <div className="mt-5 flex h-[380px] w-max gap-2">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
