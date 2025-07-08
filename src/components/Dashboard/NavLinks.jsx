import React from 'react'

function NavLinks() {
  const links = ["Dashboard", "Explore", "Messages"];
  return (
    <div className="flex items-center gap-9">
      {links.map((link) => (
        <a key={link} href="#" className="text-sm font-medium text-[#0d161c]">
          {link}
        </a>
      ))}
    </div>
  )
}

export default NavLinks
