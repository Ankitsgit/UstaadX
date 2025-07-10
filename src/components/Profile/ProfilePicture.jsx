const ProfilePicture = ({ user, isEditing }) => (
  <div className="relative inline-block">
    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
      {user?.profilePicture ? (
        <img src={user.profilePicture} alt={user.name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-white text-3xl font-bold">
          {user?.name?.charAt(0)}
        </div>
      )}
    </div>
    {isEditing && (
      <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700">
        <Camera className="h-4 w-4" />
      </button>
    )}
  </div>
);

export default ProfilePicture;
