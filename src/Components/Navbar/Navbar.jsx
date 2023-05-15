import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useScrollPosition } from "../Util/useScrollPosition";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import logo from "../../assets/apngb-animated.png";
import linkedin from "../../assets/LI-In-Bug.png";
import github from "../../assets/github-mark-white.png";
import whatsapp from "../../assets/3D_Square_with_WhatsApp_Logo.png";
import flags from "../../assets/flags.png";

import Speech from "../Speech/Speech";

export default function Navbar() {
  const scrollPosition = useScrollPosition();
  const navigation = [
    { name: "Welcome", href: "/" },
    { name: "In Progress Projects", href: "/inprogress" },
    { name: "Completed Projects", href: "/completed" },
    { name: "Pictures", href: "/pictures" },
  ];

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  const getURL = (item) => {
    console.log();
    return window.location.pathname.split("3").pop() === item;
  };

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300 bg-white`;

  return (
    <Disclosure
      as="nav"
      className={classNames(
        scrollPosition > 50 ? "bg-opactity-75" : "bg-opacity-50",
        "sticky top-0 z-10 bg-gray-800 text-white rounded-md shadow-xl transition-all"
      )}
    >
      {({ open }) => (
        <>
          <div className="max-w-5xl px-2 mx-auto sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    // <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                    <div className="flex flex-col items-center justify-center w-12 h-12 border-2 border-black rounded group">
                      <div
                        className={classNames(
                          genericHamburgerLine,
                          "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                        )}
                      />
                      <div
                        className={classNames(
                          genericHamburgerLine,
                          "opacity-0"
                        )}
                      />
                      <div
                        className={classNames(
                          genericHamburgerLine,
                          "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                        )}
                      />
                    </div>
                  ) : (
                    // <Bars3Icon className="block w-6 h-6" area-hidden="true" />
                    <div className="flex flex-col items-center justify-center w-12 h-12 border-2 border-black rounded group">
                      <div
                        className={classNames(
                          genericHamburgerLine,
                          "opacity-50 group-hover:opacity-100"
                        )}
                      />
                      <div
                        className={classNames(
                          genericHamburgerLine,
                          "opacity-50 group-hover:opacity-100"
                        )}
                      />
                      <div
                        className={classNames(
                          genericHamburgerLine,
                          "opacity-50 group-hover:opacity-100"
                        )}
                      />
                    </div>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="flex items-center flex-shrink-0">
                  <img
                    className="block w-auto h-8 lg:hidden"
                    src={logo}
                    alt="memoji"
                  />
                  <img
                    className="hidden w-auto h-8 lg:block"
                    src={logo}
                    alt="memoji"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          getURL(item.href)
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={getURL(item.href) ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div>
                  <img
                    className="hidden w-12 h-12 lg:block"
                    src={flags}
                    alt="flags"
                  />
                </div>
                <div>
                  <a
                    href="https://wa.link/ypq77n"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="w-6 h-6 m-1"
                      src={whatsapp}
                      alt="whatsapp"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/mark-lohse-miranda/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="h-6 w-7" src={linkedin} alt="linkedin" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/mark-lohsemiranda"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="w-6 h-6" src={github} alt="github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 origin-top animate-open-menu">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    getURL(item.href)
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={getURL(item.href) ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="grid ">
              <img
                className="w-12 h-12 place-self-center"
                src={flags}
                alt="flags"
              />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
