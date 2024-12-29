'use client';

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div
        className="
            w-full
            md:w-auto
            py-2
            cursor-pointer
        "
    >
      <div
        className="
            flex
            flex-row
            items-center
            justify-between
            w-full
        "
      >
        <div
            className="
                text-sm
                text-slate-400
                flex
                flex-row
                items-center
                gap-1
            "
        >
            <div 
                className="
                    rounded-full
                   text-slate-400
                "
            >
                <BiSearch className="h-6 w-6"
                />
            </div>
            <div className="hidden sm:block">
                Search for product and brand
            </div>
        </div>
      </div>
    </div>
  )
}

export default Search
