'use client'

import { useCallback, useState } from "react"


import useRegisterModal from "../../../../hooks/useRegisterModal.ts"
import useLoginModal from "../../../../hooks/useLoginModal.ts"

import { FaHeart } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"
import NavMenu from "./NavMenu"
import { AiOutlineMenu } from "react-icons/ai"
import Avatar from "../Avatar"
import MenuItem from "./MenuItem.tsx"

interface UserMenuProps {
    currentUser: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {

    const registerModal = useRegisterModal();
    const LoginModal = useLoginModal();

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <NavMenu/>
        <div className="hidden md:flex gap-5 px-5 border-r-[1px] border-l-[1px]">
            <FaHeart className="h-5 w-5 hover:text-[#8FD14F] cursor-pointer"/>
            <FaCartShopping className="h-5 w-5 hover:text-[#8FD14F] cursor-pointer"/>
        </div>
        <div
            onClick={toggleOpen}
            className="
                p-4
                border-neutral-200
                flex
                flex-row
                items-center
                gap-3
                rounded-lg
                cursor-pointer
                hover:shadow-md
                transition
            "
        >   
        <AiOutlineMenu/>
            <div className="hidden md:block">
                <Avatar/>
            </div>
        </div>
      </div>
      {isOpen && (
        <div
            className="
                absolute
                rounded-lg
                shadow-md
                w-[50vh]
                h-screen
                xl:h-auto
                bg-white
                overflow-hidden
                right-0
                md:top-12
                text-sm
            "
        >
            <div
                className="flex flex-col cursor-pointer"
            >
                {currentUser ? (
                    <>
                        <MenuItem 
                            onClick={() => {}}
                            label="My trips"
                        />
                        <MenuItem 
                            onClick={() => {}}
                            label="My favorites"
                        />
                        <MenuItem 
                            onClick={() => {}}
                            label="My reservations"
                        />
                        <MenuItem 
                            onClick={() => {}}
                            label="My properties"
                        />
                        <MenuItem 
                            onClick={() => {}}
                            label="Airbnb my home"
                        />
                        <hr />
                        <MenuItem 
                            onClick={() => signOut()}
                            label="Logout"
                        />

                    </>
                ): (
                    <>
                        <MenuItem 
                            onClick={LoginModal.onOpen}
                            label="Login"
                        />
                        <MenuItem 
                            onClick={registerModal.onOpen}
                            label="Sign Up"
                        />
                    </>
                )}
            </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
