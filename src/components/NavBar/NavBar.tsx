import { navLinks } from "./Navlinks";

export const NavBar = () => {
  return (
    <nav className="sticky top-0 bg-indigo-700 text-white shadow-2xl sm:flex p-2 rounded-none flex text-center justify-center">
      {navLinks.map((link, index) => (
        <a key={index} href={link.id} className="px-12 text-black py-3 cursor-pointer rounded-full bg-blue-300 mx-5 my-3">{link.title}</a>
      ))}
    </nav>
  )
}