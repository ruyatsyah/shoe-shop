"use client";

import { useCallback, useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import MenuItem from "./MenuItem";

const NavMenu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
      setIsOpen((value) => !value)
  },[]);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div
      className="
        hidden
        relative
        xl:flex
        flex-row
        items-center
        justify-between
        gap-4
        pr-3
      "
    >
      <div
        className="
          hidden
          sm:block
          text-md
          font-semibold
          px-2
          flex-1
          text-center
          cursor-pointer
          hover:text-[#8FD14F]
        "
      >
        New
      </div>
      <div
        className="
          hidden
          sm:block
          text-md
          font-semibold
          px-2
          text-center
          cursor-pointer
          hover:text-[#8FD14F]
        "
      >
        Hot Item
      </div>
      <div
        className="
          hidden
          sm:block
          text-md
          font-semibold
          px-2
          text-center
          cursor-pointer
          hover:text-[#8FD14F]
        "
      >
        End Of Sale!
      </div>
      <div
        className="
          text-md
          font-semibold
          px-2
          cursor-pointer
        "
      >
        <div
        onClick={toggleOpen}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`
            flex 
            items-center 
            gap-1
            cursor-pointer
            ${isOpen ? "text-[#8FD14F]" : "hover:text-[#8FD14F]"}
          `}
        >
          Brand <IoIosArrowDown />
        </div>
        {isOpen && (
          <div
            className="
              absolute
              rounded-lg
              shadow-md
              w-full
              md:w-1/2
              bg-white
              overflow-hidden              
              top-6
              text-sm
            "
          >
            <div
              className="flex flex-col cursor-pointer"
              // Hindari menutup dropdown pada klik menu
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <MenuItem onClick={() => console.log("Nike selected")} label="Nike" />
              <MenuItem onClick={() => console.log("Adidas selected")} label="Adidas" />
              <MenuItem onClick={() => console.log("Brodo selected")} label="Brodo" />
              <MenuItem onClick={() => console.log("Mills selected")} label="Mills" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavMenu;
