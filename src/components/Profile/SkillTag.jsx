const SkillTag = ({ skill, onRemove, color = 'green' }) => (
  <div className={`flex items-center bg-${color}-100 text-${color}-800 px-3 py-1 rounded-full text-sm`}>
    {skill}
    {onRemove && (
      <button
        onClick={onRemove}
        className={`ml-2 text-${color}-600 hover:text-${color}-800`}
      >
        <X className="h-3 w-3" />
      </button>
    )}
  </div>
);

export default SkillTag;
