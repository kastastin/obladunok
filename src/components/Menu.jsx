"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";
import Categories from "@/components/Categories";

const iconVariants = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0 },
};

const menuVariants = {
  open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
  closed: {
    opacity: 0,
    x: "-100%",
    transition: { type: "spring", stiffness: 100 },
  },
};

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    isMenuOpen
      ? document.body.classList.remove("overflow-hidden")
      : document.body.classList.add("overflow-hidden");
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!isMenuOpen ? (
          <motion.div
            key="menuIcon"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={iconVariants}
            onClick={toggleMenu}
          >
            <MenuIcon size={28} className="cursor-pointer" />
          </motion.div>
        ) : (
          <motion.div
            key="closeIcon"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={iconVariants}
            onClick={toggleMenu}
          >
            <X size={28} className="cursor-pointer" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
        className="absolute left-0 top-20 h-[calc(100dvh-80px)] w-full overflow-y-auto bg-white px-3 text-black"
      >
        <Categories
          listClasses="min-h-full flex flex-col gap-4 py-8"
          itemClasses="font-medium text-lg"
        />
      </motion.div>
    </>
  );
};

export default Menu;
