import React from 'react'

import Header from '../components/Dashboard/Header';
import SkillTags from '../components/Dashboard/SkillTags';
import SuggestedMatches from '../components/Dashboard/SuggestedMatches';
import UpcomingSwaps from '../components/Dashboard/UpcomingSwaps';

function Dashboard() {
  return (

    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 overflow-x-hidden font-[Manrope]">
      <div className="layout-container flex h-full grow flex-col">
        <Header /> 
        <main className="p-40 flex flex-1 justify-center py-5">

          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
                <p class="text-black tracking-light text-[32px] font-bold leading-tight min-w-72">Dashboard</p>
            </div>
            <SkillTags />
            <SuggestedMatches />
            <UpcomingSwaps />
          </div>
        </main>
      </div>
    </div>





    

  )
}

export default Dashboard
