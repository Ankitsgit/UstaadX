import React from 'react';

const matches = [
  {
    name: 'Sophia Carter',
    skill: 'Photography',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-FHA-aDHSVsR68YHPhFXTw6iWFBCXmuQeiSL6yysZT0HiozagKkFR33z1YTKxkii_psp7VxeNGoLIs05HuWo_d7oe4ZP-ohNhLmDSxRjuhTedNU-M9bRVos0JE-py1vUlFoOn3YeqVs4UsDYyVp0P4zrzmEIFxkVmhBIrQm3eSAhkcjLpT1rWnx2rkrqyUOGBZxdyfzWu_KgFrv2KcOjBWasWQwoxvkrSzJzxwyjjnpvD-IsUmlLP8z4j3Q1pDpae7LAjfNmocgk'
  },
  // Add others similarly...
];

const MatchList = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-[#0c1c17] mb-4">Matches</h2>
      {matches.map((match, index) => (
        <div key={index} className="flex items-center gap-4 py-2">
          <div
            className="h-14 w-14 rounded-full bg-cover bg-center"
            style={{ backgroundImage: `url(${match.image})` }}
          />
          <div>
            <p className="text-[#0c1c17] font-medium">{match.name}</p>
            <p className="text-[#46a080] text-sm">Skill: {match.skill}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchList;
