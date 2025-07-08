import React from 'react'
const swaps = [
  { name: "Olivia Hayes", skill: "Graphic Design", date: "July 15, 2024", status: "Confirmed" },
  { name: "Noah Parker", skill: "Web Development", date: "August 2, 2024", status: "Pending" },
  { name: "Ava Foster", skill: "Photography", date: "August 18, 2024", status: "Confirmed" },
];
function UpcomingSwaps() {
  return (
    <div className="px-4 py-3">
      <h2 className="text-[22px] font-bold text-[#0d161c]">Upcoming Swaps</h2>
      <div className="overflow-x-auto mt-3">
        <table className="min-w-full border border-[#cedde8] rounded-lg overflow-hidden">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left px-4 py-3 text-sm font-medium text-[#0d161c]">Name</th>
              <th className="text-left px-4 py-3 text-sm font-medium text-[#0d161c]">Skill</th>
              <th className="text-left px-4 py-3 text-sm font-medium text-[#0d161c]">Date</th>
              <th className="text-left px-4 py-3 text-sm font-medium text-[#0d161c]">Status</th>
            </tr>
          </thead>
          <tbody>
            {swaps.map(({ name, skill, date, status }) => (
              <tr key={name} className="border-t border-[#cedde8]">
                <td className="px-4 py-2 text-sm text-[#0d161c]">{name}</td>
                <td className="px-4 py-2 text-sm text-[#497a9c]">{skill}</td>
                <td className="px-4 py-2 text-sm text-[#497a9c]">{date}</td>
                <td className="px-4 py-2 text-sm">
                  <span className="inline-block px-4 py-1 rounded-lg bg-[#e7eef4] text-[#0d161c]">{status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UpcomingSwaps
