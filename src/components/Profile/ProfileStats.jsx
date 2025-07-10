const ProfileStats = ({ rating, reviewCount }) => (
  <div className="flex items-center justify-center mt-4">
    {/* <Star className="h-5 w-5 text-yellow-400 fill-current" /> */}
    <span className="ml-1 text-sm font-medium text-gray-700">
      {rating || 0} ({reviewCount || 0} reviews)
    </span>
  </div>
);

export default ProfileStats;
