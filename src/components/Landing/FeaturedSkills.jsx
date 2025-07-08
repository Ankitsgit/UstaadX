import React from 'react'
import SkillCard from "./SkillCard";

const skills = [
  { title: "Photography", url: "photo_url_here" },
  { title: "Coding", url: "coding_url_here" },
  { title: "Graphic Design", url: "design_url_here" },
  { title: "Writing", url: "writing_url_here" },
  { title: "Music Production", url: "music_url_here" },
  { title: "Marketing", url: "marketing_url_here" },
];

function FeaturedSkills() {
  return (
    <>
      <h2 className="text-[#0d161c] text-[22px] font-bold tracking-[-0.015em] px-4 pt-5 pb-3">
        Featured Skills
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </>

  )
}

export default FeaturedSkills
