import React from 'react'

const matches = [
  {
    name: "Sophia Carter",
    skill: "Photography",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-FHA-aDHSVsR68YHPhFXTw6iWFBCXmuQeiSL6yysZT0HiozagKkFR33z1YTKxkii_psp7VxeNGoLIs05HuWo_d7oe4ZP-ohNhLmDSxRjuhTedNU-M9bRVos0JE-py1vUlFoOn3YeqVs4UsDYyVp0P4zrzmEIFxkVmhBIrQm3eSAhkcjLpT1rWnx2rkrqyUOGBZxdyfzWu_KgFrv2KcOjBWasWQwoxvkrSzJzxwyjjnpvD-IsUmlLP8z4j3Q1pDpae7LAjfNmocgk",
  },
  {
    name: "Ethan Bennett",
    skill: "Graphic Design",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvuj6A5rAVxrLPOFOfsvrMxwIQMnLbmDovSim-Gkt3ZfLyORJqLW1f9xSJvTDLSmORrklN06NTf3PgcQCFiJOAkiO-Nw0AbflRJ2xTnHUXICyk6CwdTz7sZcdkLSDspW03uwdwJYv5lC4MhNsrXCWXb4T7cMu6Nofo-Kqbr3RGVdz4hxdDC9OURvt8BrjiZuyc3oDr_RAjNZcfa-vxYuuU6VyAaiN7K8UttargAxJbxoLO3zMoZO8rPLjQa1Ev0Mo9jXFIejzWkE4",
  },
  // Add more as needed
];

function ChatSidebar() {
  return (
    <div className="w-80 px-4 py-5">
      <h2 className="text-xl font-bold text-[#0c1c17] pb-4">Matches</h2>
      {matches.map((match, index) => (
        <div
          key={index}
          className="flex items-center gap-4 py-2 cursor-pointer hover:bg-[#e6f4ef] rounded-md px-2"
        >
          <div
            className="bg-cover rounded-full h-14 w-14"
            style={{ backgroundImage: `url(${match.image})` }}
          />
          <div>
            <p className="font-medium text-[#0c1c17]">{match.name}</p>
            <p className="text-sm text-[#46a080]">Skill: {match.skill}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ChatSidebar
