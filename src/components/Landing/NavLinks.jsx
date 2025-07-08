import React from 'react'
const links = ['Home', 'About', 'Services', 'Contact']; // Add your actual nav items here


function NavLinks() {
  return (
    <div className="flex items-center gap-9">
      {links.map((link, index) => (
        <a key={index} href="#" className="text-sm font-medium text-[#0d161c]">
          {link}
        </a>
      ))}
    </div>
  )
}

export default NavLinks
