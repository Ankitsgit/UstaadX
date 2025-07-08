import React from 'react'
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import GetStartedButton from "./GetStartedButton";

function Header() {
  return (
    <div className="flex items-center justify-between border-b border-[#e7eef4] px-10 py-3">
      <div className="flex items-center gap-8">
        <Logo />
        <NavLinks />
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <SearchBar />
        <GetStartedButton />
      </div>
    </div>
  );
};


export default Header

