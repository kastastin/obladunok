import { ChevronRight } from "lucide-react";

const categories = [
  { title: "Шоломи" },
  { title: "Плитоноски" },
  { title: "Аксесуари до екіпірування" },
  { title: "Балістичні керамічні пластини" },
  { title: "Бронепластини" },
  { title: "Балістичні пакети" },
  { title: "Тактичний одяг" },
  { title: "Саперське приладдя" },
  { title: "Тактичні рюкзаки та сумки" },
  { title: "Засоби самозахисту, зброя" },
];

const Categories = ({ listClasses, itemClasses }) => {
  return (
    <ul className={listClasses}>
      {categories.map((category) => (
        <li
          key={category.title}
          className={`flex items-center justify-between text-black ${itemClasses}`}
        >
          <span>{category.title}</span>
          <ChevronRight />
        </li>
      ))}
    </ul>
  );
};

export default Categories;
