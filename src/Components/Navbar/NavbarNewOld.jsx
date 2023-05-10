import { Link } from "react-router-dom";
import { useScrollPosition } from "../Util/useScrollPosition";

export default function Navbar() {
  const scrollPosition = useScrollPosition();

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  const toggleMenu = () => {
    const hamburgerBtn = document.getElementById("hamburger-button");
    const mobileMenu = document.getElementById("mobile-menu");
    hamburgerBtn.classList.toggle("toggle-btn"); /* this line adds custom class from index.css for animation to X*/
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  };

  return (
    <header
      id="headerElement"
      className={classNames(
        scrollPosition > 50 ? "bg-opactity-75" : "bg-opacity-25",
        "sticky top-0 z-10 bg-teal-100 text-white rounded-md shadow-xl transition-all"
      )}
    >
      <section className="flex items-center justify-between max-w-4xl p-4 mx-auto">
        <h1 className="text-3xl font-medium">Mark Lohse-Miranda</h1>
        <div>
          <button
            onClick={toggleMenu}
            id="hamburger-button"
            className="relative w-8 h-8 text-3xl cursor-pointer lg:hidden"
          >
            {/* This makes the hamburger */}
            <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
            <p className="hidden">Hamburger Menu</p>
          </button>
          <nav
            className="hidden space-x-8 text-xl lg:inline-block"
            area-label="main"
          >
            <Link
              className="inline-block transition ease-in-out hover:scale-110 hover:text-blue-700 focus:text-blue-700"
              to="/"
            >
              What I can do for you
            </Link>
            <Link
              className="inline-block transition ease-in-out hover:scale-110 hover:text-blue-700 focus:text-blue-700"
              to="/completed"
            >
              Projects
            </Link>
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        onClick={toggleMenu}
        className="absolute flex-col hidden w-full text-3xl origin-top bg-black top-68 justify-content-center animate-open-menu"
      >
        <nav
          className="flex flex-col items-center py-8 min-h-[50vh]"
          aria-label="mobile"
        >
          <Link
            className="inline-block transition ease-in-out hover:scale-110 hover:text-blue-700 focus:text-blue-700"
            to="/"
          >
            What I can do for you
          </Link>
          <Link
            className="inline-block transition ease-in-out hover:scale-110 hover:text-blue-700 focus:text-blue-700"
            to="/completed"
          >
            Projects
          </Link>
        </nav>
      </section>
    </header>
  );
}
