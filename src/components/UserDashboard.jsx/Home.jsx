import FilterBar from "./FilterBar";
import SuggestedMatches from "../Dashboard/SuggestedMatches";

export default function Home() {
  return (
    <div className="flex">
      <div className="flex-1">
        <div className="p-4">
          <p className="text-[32px] font-bold text-[#0d161c]">Find your next skill swap</p>
        </div>
        <FilterBar />
        <SuggestedMatches />
      </div>
    </div>
  );
}

