import React from 'react'

function SkillCard({ title, url }) {
  return (
    <div className="flex flex-col gap-3 pb-3">
      <div
        className="w-full aspect-square bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${url})` }}
      />
      <p className="text-base font-medium text-[#0d161c]">{title}</p>
    </div>

  )
}

export default SkillCard

