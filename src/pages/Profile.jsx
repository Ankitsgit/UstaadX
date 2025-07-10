import { useState } from 'react';
// import { useAuth } from '../../contexts/AuthContext';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfilePicture from '../components/Profile/ProfilePicture';
import ProfileField from '../components/Profile/ProfileField';
import ProfileStats from '../components/Profile/ProfileStats';
import SkillsSection from '../components/Profile/SkillsSection';
import AvailabilitySection from '../components/Profile/AvailabilitySection';

const Profile = () => {
  const  user = "Ankit"

  const [isEditing, setIsEditing] = useState(false);
  const [editingField, setEditingField] = useState(null);
  const [newSkillOffered, setNewSkillOffered] = useState('');
  const [newSkillWanted, setNewSkillWanted] = useState('');

  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    bio: user?.bio || '',
    location: user?.location || '',
    skillsOffered: user?.skillsOffered || [],
    skillsWanted: user?.skillsWanted || [],
  });

  const handleSaveField = (field) => {
    setEditingField(null);
    // Save to backend (to be implemented)
    console.log('Saving field:', field, profileData[field]);
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

  const timeSlots = [
    'Monday 9-11 AM', 'Monday 2-4 PM', 'Monday 6-8 PM',
    'Tuesday 9-11 AM', 'Tuesday 2-4 PM', 'Tuesday 6-8 PM',
    'Wednesday 9-11 AM', 'Wednesday 2-4 PM', 'Wednesday 6-8 PM',
    'Thursday 9-11 AM', 'Thursday 2-4 PM', 'Thursday 6-8 PM',
    'Friday 9-11 AM', 'Friday 2-4 PM', 'Friday 6-8 PM',
    'Saturday 10 AM-12 PM', 'Saturday 2-4 PM', 'Saturday 6-8 PM',
    'Sunday 10 AM-12 PM', 'Sunday 2-4 PM', 'Sunday 6-8 PM',
  ];

  const [selectedTimeSlots, setSelectedTimeSlots] = useState([
    'Monday 6-8 PM', 'Wednesday 7-9 PM', 'Saturday 10 AM-12 PM',
  ]);

  const toggleTimeSlot = (slot) => {
    setSelectedTimeSlots((prev) =>
      prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot]
    );
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
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

            <ProfileStats rating={user?.rating} reviewCount={user?.reviewCount} />

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
            selectedSlots={selectedTimeSlots}
            toggleSlot={toggleTimeSlot}
            isEditing={isEditing}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;

