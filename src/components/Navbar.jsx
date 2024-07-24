import Link from "next/link";
import Image from "next/image";
import { Search, User, ShoppingCart } from "lucide-react";

import Menu from "@/components/Menu";

const Navbar = () => (
  <header className="fixed top-0 z-50 flex h-20 w-full items-center justify-between bg-black px-3 text-white">
    <div className="flex gap-2">
      <Menu />
      <Search size={28} className="cursor-pointer" />
    </div>

    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo-white.svg" alt="Logo" width={56} height={56} priority />
      <h1 className="text-xl font-semibold">Obladunok</h1>
    </Link>

    <div className="flex gap-2">
      <User size={28} className="cursor-pointer" />
      <ShoppingCart size={28} className="cursor-pointer" />
    </div>
  </header>
);

export default Navbar;
