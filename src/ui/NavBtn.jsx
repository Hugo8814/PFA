/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function NavBtn({ logo, to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `w-full flex items-center p-[1.6rem] text-gray-200 font-semibold text-[1.6rem] gap-4 no-underline ${
          isActive
            ? "bg-white text-gray-900  rounded-tr-[2rem] rounded-br-[2rem] border-l-[#277c78] border-l-[0.3rem]"
            : ""
        }`
      }
    >
      {({ isActive }) => (
        <>
          <img
            src={logo}
            alt="Overview icon"
            className={`w-[1.9rem] ${
              isActive
                ? "filter invert-33 sepia-37 saturate-415 hue-rotate-126 brightness-92 contrast-86"
                : ""
            }`}
          />
          {children}
        </>
      )}
    </NavLink>
  );
}

export default NavBtn;
