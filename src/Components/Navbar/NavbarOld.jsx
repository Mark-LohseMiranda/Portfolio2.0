import { useEffect } from "react";
import { Collapse, Dropdown, Tab, initTE } from "tw-elements";
import { Link } from "react-router-dom";

export default function Navbar() {
  //   const navigate = useNavigate();
  useEffect(() => {
    initTE({ Collapse, Dropdown, Tab });
  });

  return (
    <div className="sticky top-0 z-50">
      <nav
        className="relative flex flex-no-wrap items-center justify-between w-full py-2 shadow-md bg-neutral-100 shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 md:flex-wrap lg:justify-start md:py-4"
        data-te-navbar-ref
      >
        <div className="flex flex-wrap items-center justify-between w-full px-3">
          <button
            className="block px-2 bg-transparent border-0 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 md:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          <div
            className="!visible hidden flex-grow basis-[100%] items-center md:!flex md:basis-auto"
            id="navbarSupportedContent1"
            data-te-collapse-item
          >
            {/* <a
            className="flex items-center mt-3 mb-4 mr-2 text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 md:mb-0 md:mt-0"
            href="#"
          >
            Image
          </a> */}
            <ul
              className="flex flex-col pl-0 mr-auto list-style-none md:flex-row"
              data-te-navbar-nav-ref
            >
              <li className="mb-4 md:mb-0 md:pr-2" data-te-nav-item-ref>
                <Link
                  className="block py-2 font-semibold md:px-5 hover:text-blue-700 dark:text-gray-400"
                  to="/"
                >
                  What I can do for you
                </Link>
              </li>
              <li className="mb-4 md:mb-0 md:pr-2" data-te-nav-item-ref>
                <Link
                  className="block py-2 font-semibold md:px-5 hover:text-blue-700 dark:text-gray-400"
                  to="/completed"
                >
                  Completed Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
