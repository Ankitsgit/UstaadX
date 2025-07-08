import React from 'react'

function Footer() {
  const links = ["About", "Contact", "Terms of Service", "Privacy Policy"];
  return (
    <footer className="flex justify-center">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <div className="flex flex-col gap-6 px-5 py-10 text-center">
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link, idx) => (
              <a key={idx} href="#" className="text-[#497a9c] text-base">{link}</a>
            ))}
          </div>
          <p className="text-[#497a9c] text-base">@2024 SkillSwap. All rights reserved.</p>
        </div>
      </div>
    </footer>

  )
}

export default Footer
