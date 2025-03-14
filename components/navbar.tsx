import { itemsNavbar } from "@/data";
import { ToggleTheme } from "./toggle-theme";

const Navbar = () => {
  return (
    <>
      <nav className="fixed z-20 flex flex-col items-center w-full justify-center h-max bottom-0 mb-5">
        <div className="flex items-center gap-2 justify-center px-4 py-1 dark:bg-white/10 bg-slate-800/10 backdrop-blur-sm rounded-full">
          {itemsNavbar.map((item) => (
            <a
              key={item.id}
              href={item.link} // Usamos `href` para los links
              className="cursor-pointer hover:dark:bg-slate-800 hover:bg-slate-400 px-3 py-2 rounded-full transition duration-150 font-bold"
            >
              {item.icon}
            </a>
          ))}
          <ToggleTheme />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
