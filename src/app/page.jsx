import Slider from "@/components/Slider";
import PopularProducts from "@/components/PopularProducts";

const Home = () => {
  return (
    <main className="translate-y-20 px-2">
      <Slider />
      <PopularProducts />
    </main>
  );
};

export default Home;
