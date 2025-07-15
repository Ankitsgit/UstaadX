
import { useState, useEffect } from 'react';
import axios from 'axios';

import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfilePicture from '../components/Profile/ProfilePicture';
import ProfileField from '../components/Profile/ProfileField';
import ProfileStats from '../components/Profile/ProfileStats';
import SkillsSection from '../components/Profile/SkillsSection';
import AvailabilitySection from '../components/Profile/AvailabilitySection';

const Profile = () => {
  const [token] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editingField, setEditingField] = useState(null);
  const [newSkillOffered, setNewSkillOffered] = useState('');
  const [newSkillWanted, setNewSkillWanted] = useState('');

  const [profileData, setProfileData] = useState({
    name: '',
    bio: '',
    location: '',
    skillsOffered: [],
    skillsWanted: [],
    availability: [],
  });

  const timeSlots = [
    'Monday 9-11 AM', 'Monday 2-4 PM', 'Monday 6-8 PM',
    'Tuesday 9-11 AM', 'Tuesday 2-4 PM', 'Tuesday 6-8 PM',
    'Wednesday 9-11 AM', 'Wednesday 2-4 PM', 'Wednesday 6-8 PM',
    'Thursday 9-11 AM', 'Thursday 2-4 PM', 'Thursday 6-8 PM',
    'Friday 9-11 AM', 'Friday 2-4 PM', 'Friday 6-8 PM',
    'Saturday 10 AM-12 PM', 'Saturday 2-4 PM', 'Saturday 6-8 PM',
    'Sunday 10 AM-12 PM', 'Sunday 2-4 PM', 'Sunday 6-8 PM',
  ];

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/users/me`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setUser(res.data);
        setProfileData({
          name: res.data.name || '',
          bio: res.data.bio || '',
          location: res.data.location || '',
          skillsOffered: res.data.skillsOffered || [],
          skillsWanted: res.data.skillsWanted || [],
          availability: res.data.availability || [],
        });
      } catch (err) {
        console.error('Failed to fetch profile:', err);
      }
    };

    fetchProfile();
  }, [token]);

  const handleSaveField = async (field) => {
    try {
      const updatedUser = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/users/me`,
        { [field]: profileData[field] },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUser(updatedUser.data);
      setEditingField(null);
    } catch (err) {
      console.error('Update failed:', err);
    }
  };
const handleSaveAll = async () => {
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_API_URL}/api/users/me`,
      profileData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const updated = res.data;

    setUser(updated);
    setProfileData({
      name: updated.name || '',
      bio: updated.bio || '',
      location: updated.location || '',
      skillsOffered: updated.skillsOffered || [],
      skillsWanted: updated.skillsWanted || [],
      availability: updated.availability || [],
    });

    setIsEditing(false);
    setEditingField(null);
  } catch (err) {
    console.error('Save all failed:', err);
  }
};


  const addSkill = (type) => {
    const skill = type === 'offered' ? newSkillOffered : newSkillWanted;
    if (skill.trim()) {
      setProfileData((prev) => ({
        ...prev,
        [type === 'offered' ? 'skillsOffered' : 'skillsWanted']: [
          ...prev[type === 'offered' ? 'skillsOffered' : 'skillsWanted'],
          skill.trim(),
        ],
      }));
      if (type === 'offered') setNewSkillOffered('');
      else setNewSkillWanted('');
    }
  };

  const removeSkill = (type, index) => {
    setProfileData((prev) => ({
      ...prev,
      [type === 'offered' ? 'skillsOffered' : 'skillsWanted']: prev[
        type === 'offered' ? 'skillsOffered' : 'skillsWanted'
      ].filter((_, i) => i !== index),
    }));
  };

  const toggleTimeSlot = (slot) => {
    setProfileData((prev) => ({
      ...prev,
      availability: prev.availability.includes(slot)
        ? prev.availability.filter((s) => s !== slot)
        : [...prev.availability, slot],
    }));
  };

  if (!user) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <ProfileHeader isEditing={isEditing} setIsEditing={setIsEditing} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <ProfilePicture user={user} isEditing={isEditing} />

            <div className="mt-4">
              <ProfileField
                field="name"
                value={profileData.name}
                isEditing={isEditing}
                editingField={editingField}
                setEditingField={setEditingField}
                onChange={(e) =>
                  setProfileData((prev) => ({ ...prev, name: e.target.value }))
                }
                onSave={handleSaveField}
                className="text-center text-xl font-bold text-gray-900"
              />
            </div>

            <div className="mt-2">
              <ProfileField
                field="location"
                value={profileData.location}
                isEditing={isEditing}
                editingField={editingField}
                setEditingField={setEditingField}
                onChange={(e) =>
                  setProfileData((prev) => ({
                    ...prev,
                    location: e.target.value,
                  }))
                }
                onSave={handleSaveField}
              />
            </div>

            <ProfileStats
              rating={user.rating || 4.8}
              reviewCount={user.reviewCount || 12}
            />

            <div className="border-t pt-6 mt-6 text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">About Me</h3>
              <ProfileField
                field="bio"
                value={profileData.bio}
                isEditing={isEditing}
                editingField={editingField}
                setEditingField={setEditingField}
                onChange={(e) =>
                  setProfileData((prev) => ({ ...prev, bio: e.target.value }))
                }
                onSave={handleSaveField}
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-6">
          <SkillsSection
            title="Skills I Offer"
            skills={profileData.skillsOffered}
            newSkill={newSkillOffered}
            setNewSkill={setNewSkillOffered}
            addSkill={() => addSkill('offered')}
            removeSkill={(i) => removeSkill('offered', i)}
            isEditing={isEditing}
            color="green"
          />

          <SkillsSection
            title="Skills I Want to Learn"
            skills={profileData.skillsWanted}
            newSkill={newSkillWanted}
            setNewSkill={setNewSkillWanted}
            addSkill={() => addSkill('wanted')}
            removeSkill={(i) => removeSkill('wanted', i)}
            isEditing={isEditing}
            color="blue"
          />

          <AvailabilitySection
            timeSlots={timeSlots}
            selectedSlots={profileData.availability}
            toggleSlot={toggleTimeSlot}
            isEditing={isEditing}
          />

          {/* Save All Changes Button */}
          {isEditing && (
            <div className="text-right">
              <button
                onClick={handleSaveAll}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
              >
                Save All Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
