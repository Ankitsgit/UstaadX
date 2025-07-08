import React from 'react'

function SearchBar() {
  return (
    <label className="flex min-w-40 h-10 max-w-64">
      <div className="flex w-full items-center rounded-lg bg-[#e7eef4]">
        <div className="pl-4 text-[#497a9c]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
            {/* <path d="M229.66,218.34l-50.07-50.06a88.11..." /> */}
          </svg>
        </div>
        <input
          placeholder="Search"
          className="flex-1 px-4 bg-[#e7eef4] text-[#0d161c] placeholder-[#497a9c] focus:outline-none"
        />
      </div>
    </label>
  )
}

export default SearchBar
