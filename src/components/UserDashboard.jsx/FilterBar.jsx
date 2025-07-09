import React from 'react'

function FilterBar() {
  const filters = ["Skill type", "Location", "Language", "Rating"];

  return (
    <div className="flex gap-3 flex-wrap px-4 py-3">
      {filters.map((filter) => (
        <button
          key={filter}
          className="flex h-8 items-center gap-2 pl-4 pr-2 bg-[#f1f0f4] rounded-xl text-sm font-medium text-[#131118]"
        >
          {filter}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
            {/* <path d="M213.66,101.66l-80,80a8,8..." /> */}
          </svg>
        </button>
      ))}
    </div>

  )
}

export default FilterBar
