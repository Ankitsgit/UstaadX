import React from 'react'

import Logo from '../Landing/Logo';
import NavLinks from './NavLinks';
import SearchBar from './SearchBar';
import NotificationButton from "./NotificationButton";
import Avatar from "./Avatar";

function Header() {

  return (
    <header className="flex items-center justify-between border-b border-[#e7eef4] px-10 py-3">
      <div className="flex items-center gap-8">
        <Logo />
        <NavLinks />
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <SearchBar />
        <NotificationButton />
        <Avatar />
      </div>
    </header>
  )
}

export default Header
