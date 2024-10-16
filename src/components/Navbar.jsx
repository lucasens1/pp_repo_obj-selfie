import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Link } from "react-router-dom";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Su di noi", href: "/about", current: false },
  { name: "Contattaci", href: "/contact", current: false },
];

function classNames(...classes) {
  console.log(classes);
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const location = useLocation();
  return (
    // Navigatore
    <Disclosure as="nav" className="ms_bg-obj-selfie p-1">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
            {/* Fine Mobile Button Menu */}
          </div>
          {/* Contenuto della Navbar (MD -> ...) */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch ">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Obiettivo Selfie"
                src="../../public/obj_selfie_light.png"
                className="h-16 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block border flex justify-center content-center">
              <div className="space-x-4 border">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={
                      location.pathname === item.href ? "page" : undefined
                    }
                    className={classNames(
                      location.pathname === item.href
                        ? "ms_bg-obj-selfie-1 text-white"
                        : "text-gray-300 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium transition duration-150 ease-in-out"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Fine tasti NavBar (MD -> ..) */}
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={location.pathname === item.href ? "page" : undefined}
              className={classNames(
                location.pathname === item.href
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium "
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
