const ProfileField = ({ field, value, isEditing, editingField, setEditingField, onChange, onSave, className = '' }) => {
  if (editingField === field) {
    const isTextArea = field === 'bio';
    const inputProps = {
      value,
      onChange,
      onBlur: () => onSave(field),
      autoFocus: true,
      className: className || 'text-center bg-gray-50 border border-gray-300 rounded px-2 py-1',
    };
    return isTextArea ? (
      <textarea {...inputProps} className={`${inputProps.className} w-full h-24 resize-none`} />
    ) : (
      <input type="text" onKeyPress={(e) => e.key === 'Enter' && onSave(field)} {...inputProps} />
    );
  }

  return (
    <div
      className={`text-gray-600 ${isEditing ? 'cursor-pointer hover:bg-gray-50 px-2 py-1 rounded' : ''}`}
      onClick={() => isEditing && setEditingField(field)}
    >
      {value || `Add ${field}`}
    </div>
  );
};

export default ProfileField;
