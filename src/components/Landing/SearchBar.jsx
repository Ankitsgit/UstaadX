import React from 'react'

function SearchBar() {
  return (
    <label className="flex flex-col min-w-40 h-10 max-w-64">
      <div className="flex w-full items-stretch rounded-lg h-full">
        <div className="flex items-center justify-center pl-4 bg-[#e7eef4] text-[#497a9c] rounded-l-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
            {/* <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32Z..." /> */}
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="flex-1 px-4 pl-2 bg-[#e7eef4] text-[#0d161c] rounded-r-lg placeholder:text-[#497a9c] focus:outline-none"
        />
      </div>
    </label>
  )
}

export default SearchBar
