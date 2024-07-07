import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants/index";

const LeftSidebar = () => {
  return (
    <aside class="bg-black-1 w-1/6 h-full p-4">
      <nav>
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center"
        >
          <Image src="/icons/logo.svg" width={23} height={27} alt="logo" />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">
            Podcastr
          </h1>
        </Link>

        {sidebarLinks.map((item, index) => (
          <Link
            href={item.route}
            key={index}
            className="flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start"
          >
            <Image src={item.imgURL} width={24} height={24} alt={item.route} />
            {item.label}
          </Link>
        ))}

        {/* TODO: add profile or sign out */}
      </nav>
    </aside>
  );
};

export default LeftSidebar;
