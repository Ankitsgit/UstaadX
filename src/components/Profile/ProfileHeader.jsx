const ProfileHeader = ({ isEditing, setIsEditing }) => (
  <div className="flex items-center justify-between mb-8">
    <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
    <button
      onClick={() => setIsEditing(!isEditing)}
      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      {/* <Edit className="h-4 w-4 mr-2" /> */}
      {isEditing ? 'Done Editing' : 'Edit Profile'}
    </button>
  </div>
);

export default ProfileHeader;
