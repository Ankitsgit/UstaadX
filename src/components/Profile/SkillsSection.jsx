import SkillTag from './SkillTag';
import {Plus} from "lucide-react"

const SkillsSection = ({ title, skills, newSkill, setNewSkill, addSkill, removeSkill, isEditing, color = 'green' }) => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      {isEditing && (
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Add a skill..."
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded text-sm"
            onKeyPress={(e) => e.key === 'Enter' && addSkill()}
          />
          <button
            onClick={addSkill}
            className={`p-1 bg-${color}-600 text-white rounded hover:bg-${color}-700`}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.length > 0 ? skills.map((skill, index) => (
        <SkillTag
          key={index}
          skill={skill}
          color={color}
          onRemove={isEditing ? () => removeSkill(index) : null}
        />
      )) : (
        <p className="text-gray-500 text-sm">No skills added yet</p>
      )}
    </div>
  </div>
);

export default SkillsSection;
