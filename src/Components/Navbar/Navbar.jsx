import React from "react";
import Logo from "../assets/logo.png";
import Name from "../assets/name.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";

const images = [
  {
    image: Logo,
    id: 2,
    name: "Fyatta QR logo",
  },
  {
    image: Name,
    id: 1,
    name: "Fyatta QR",
  },
];
const Links = [
  {
    name: "Home",
    id: 1,
    link: "/",
  },
  {
    name: "Menu",
    id: 2,
    link: "/menu",
  },
  {
    name: "Specials/Offers",
    id: 3,
    link: "/offers",
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-[10vw] my-10 fixed top-0 left-0 right-0">
      <a href="/" className="flex items-center gap-5">
        {images.map((item) => (
          <img src={item.image} key={item.id} alt={item.name} />
        ))}
      </a>
      <div className="flex items-center gap-15">
        <ul className="flex items-center gap-15">
          {Links.map((item) => (
            <li
              key={item.id}
              className="text-xl cursor-pointer duration-200 hover:bg-[var(--white)] px-3 py-2 rounded-lg"
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-10 text-5xl">
          <MdOutlineShoppingCart className="hover:bg-[var(--white)] p-2 rounded-full cursor-pointer duration-200" />
          <IoPersonSharp className="hover:bg-[var(--white)] p-2 rounded-full cursor-pointer duration-200" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
