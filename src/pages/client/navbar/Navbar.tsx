'use client'

import Logo from "./Logo";
import Search from "./Search";
import Container from "../Container";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div
        className="
          py-4 
          border-b-[1px]
        "
      >
        <Container>
          <div
            className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
          >
            <div className="flex flex-row gap-6">
              <Logo />
              <div
                className="
                    hidden
                    md:block
                    text-sm
                    font-semibold
                    transition
                    cursor-pointer
                "
              >
                <Search />
              </div>
            </div>
            <UserMenu  />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
