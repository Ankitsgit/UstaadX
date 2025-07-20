import {Camera} from "lucide-react"
import { useState } from "react";
import axios from "axios";

const backendURL = import.meta.env.VITE_API_URL;

// const ProfilePicture = ({ user, isEditing, onUploadComplete }) => {
//   const [preview, setPreview] = useState(user.profileImage || "/default-profile.png");

const ProfilePicture = ({ user, isEditing, onUploadComplete }) => {
  const [preview, setPreview] = useState(
    user.profileImage ? `${backendURL}${user.profileImage}` : "/default-profile.png"
  );
  const [loading, setLoading] = useState(false);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("File too large. Max size is 5MB.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("profileImage", file);

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users/upload-profile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      // setPreview(res.data.imageUrl);
      setPreview(`${backendURL}${res.data.imageUrl}`);

      if (onUploadComplete) onUploadComplete(res.data.imageUrl); // ✅ trigger callback
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <img
        src={preview}
        alt="Profile"
        className="w-28 h-28 rounded-full object-cover border"
      />
      {isEditing && (
        <div className="mt-2">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="text-sm"
          />
          {loading && <p className="text-xs text-blue-500 mt-1">Uploading...</p>}
        </div>
      )}
    </div>
  );
};
export default ProfilePicture;