import React from 'react';
import profile from '../../assets/profile1.jpg';

const matches = [
  {
    name: "Liam Carter",
    description: "Looking to exchange photography skills for web development.",
    imageUrl: profile,
  },
  // Add others...
];

function SuggestedMatches() {
  return (
    <div className="px-4 py-3">
      <h2 className="text-[22px] font-bold text-[#0d161c]">Suggested Matches</h2>
      <div className="flex overflow-x-auto gap-3 py-4">
        {matches.map(({ name, description, imageUrl }) => (
          <div key={name} className="min-w-40 rounded-lg flex flex-col gap-2">
            <div
              className="aspect-square bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url('${imageUrl}')` }}
            />
            <p className="font-medium text-[#0d161c]">{name}</p>
            <p className="text-sm text-[#497a9c]">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuggestedMatches;

