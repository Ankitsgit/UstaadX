const AvailabilitySection = ({ timeSlots, selectedSlots, toggleSlot, isEditing }) => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Availability</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {timeSlots.map((slot) => (
        <button
          key={slot}
          onClick={() => isEditing && toggleSlot(slot)}
          disabled={!isEditing}
          className={`p-2 text-sm rounded-lg border-2 transition-colors ${
            selectedSlots.includes(slot)
              ? 'bg-blue-100 border-blue-300 text-blue-800'
              : 'bg-gray-50 border-gray-200 text-gray-600'
          } ${isEditing ? 'hover:border-blue-400 cursor-pointer' : 'cursor-default'}`}
        >
          {slot}
        </button>
      ))}
    </div>
    <p className="text-xs text-gray-500 mt-3">
      {isEditing ? 'Click on time slots to toggle availability' : `${selectedSlots.length} time slots selected`}
    </p>
  </div>
);

export default AvailabilitySection;
