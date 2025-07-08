import React from 'react'

function Logo() {
  return (
    <div className="flex items-center gap-4 text-[#0d161c]">
      <div className="size-4">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <h2 className="text-lg font-bold tracking-[-0.015em]">SkillSwap</h2>
    </div>
  );
};


export default Logo
