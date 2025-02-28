import { Link, NavLink } from "react-router-dom";
import Container from "../../UI/Container";
import LogoImg from "../../assets/logo.svg";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Blog", path: "/blog" },
    { name: "About Us", path: "/about-us" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <nav>
      <Container className="flex items-center justify-between py-5">
        <Logo />
        <Nav links={links} />
        <Search />
        <i
          className="bx bx-menu hidden md:flex text-3xl cursor-pointer text-teal-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>
        {isMenuOpen && <MobileNav links={links} />}
      </Container>
    </nav>
  );
}

const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <Link to="/">
        <img src={LogoImg} alt="Logo" className="w-30 h-10" />
      </Link>
    </div>
  );
};

const Nav = ({ links }) => {
  return (
    <div className="md:hidden">
      <ul className="flex items-center space-x-4 font-semibold text-lg">
        {links.map((link) => (
          <NavLinkComponent key={link.name} link={link} />
        ))}
      </ul>
    </div>
  );
};

const NavLinkComponent = ({ link }) => {
  return (
    <li className="text-gray-600 hover:text-gray-950 py-2 px-5 rounded-2xl">
      <NavLink
        to={link.path}
        className={({ isActive }) =>
          isActive
            ? "text-gray-800 bg-lime-50 rounded-full px-4 py-2 font-semibold"
            : "text-gray-600"
        }
      >
        {link.name}
      </NavLink>
    </li>
  );
};

const MobileNav = ({ links }) => {
  return (
    <>
      <ul className="absolute z-10 top-16 left-0 w-full bg-white shadow-md py-4 space-y-4 font-semibold text-lg text-gray-600">
        {links.map((link) => (
          <li
            key={link.name}
            className="px-6 py-2 hover:bg-gray-100  rounded-md"
          >
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-gray-800  font-semibold" : "text-gray-600"
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

const Search = () => {
  return (
    <div className="relative lg:hidden ">
      <i className="bx bx-search absolute left-3 top-1 text-gray-400 text-xl"></i>
      <input
        placeholder="Tours, destinations..."
        className="px-[88px] w-80 py-[6px] pl-10 border border-gray-200 focus:border-teal-600 outline-none rounded-3xl"
      />
      <button className="absolute right-0 bg-teal-600 h-full px-5 rounded-r-3xl text-white">
        search
      </button>
    </div>
  );
};
