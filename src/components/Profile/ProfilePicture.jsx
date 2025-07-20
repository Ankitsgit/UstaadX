import {Camera} from "lucide-react"
import { useState } from "react";
import axios from "axios";

const ProfilePicture = ({ user, isEditing }) => {
  const [preview, setPreview] = useState(user.profileImage || null);
  const token = localStorage.getItem("token");

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Show preview
    setPreview(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("profileImage", file);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users/upload-profile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const imageUrl = res.data.imageUrl;
      setPreview(imageUrl); // Update preview with uploaded URL
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <img
        src={preview || "/default-profile.png"}
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
        </div>
      )}
    </div>
  );
};

export default ProfilePicture;

