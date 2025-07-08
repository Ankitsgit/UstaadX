import React from 'react'

function SkillTags() {
    const skills = ["Photography", "Graphic Design", "Web Development", "Content Writing", "Social Media Marketing"];
  return (
    <div className="px-4 py-3">
      <h2 className="text-[22px] font-bold text-[#0d161c]">My Skills</h2>
      <div className="flex gap-3 flex-wrap py-3">
        {skills.map((skill) => (
          <span key={skill} className="h-8 px-4 bg-[#e7eef4] rounded-lg flex items-center text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillTags
