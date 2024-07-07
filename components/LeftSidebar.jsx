"use client";

import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants/index";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const LeftSidebar = () => {
  const pathname = usePathname();

  return (
    <aside class="bg-black-1 w-1/6 h-full p-4">
      <nav>
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center"
        >
          <Image src="/logo.png" width={40} height={40} alt="logo" />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">
            Podcast
          </h1>
        </Link>

        {sidebarLinks.map((item, index) => (
          <Link
            href={item.route}
            key={index}
            className={clsx("flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start", 
              {
                'bg-nav-focus border-r-4 border-primary-1' : pathname === item.route
              }
            )}
          >
            <Image src={item.imgURL} width={24} height={24} alt={item.route} />
            <p className="hidden lg:block">{item.label}</p>
          </Link>
        ))}

        {/* TODO: add profile or sign out */}
      </nav>
    </aside>
  );
};

export default LeftSidebar;
