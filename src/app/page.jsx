import Slider from "@/components/Slider";
import Accordion from "@/components/Accordion";
import ProductSection from "@/components/ProductSection";
import AboutUsSection from "@/components/AboutUsSection";
import ChooseUsSection from "@/components/ChooseUsSection";

import { faqData } from "@/constants/faq";
import { products } from "@/constants/products";

const Home = () => {
  return (
    <main className="translate-y-20 px-2 sm:px-4 lg:px-8">
      <Slider />

      <ProductSection title="Популярні товари" productList={products} />

      <ProductSection
        title="Балістичні пакети"
        productList={products}
        isRecommended
      />

      <ProductSection
        title="Тактичний одяг"
        productList={products}
        isRecommended
      />

      <ChooseUsSection />

      <ProductSection
        title="Увесь каталог"
        productList={products}
        isRecommended
      />

      <AboutUsSection />

      <Accordion data={faqData} />
    </main>
  );
};

export default Home;
