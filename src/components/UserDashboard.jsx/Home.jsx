
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, Filter, Heart, X, MapPin, Star, Clock } from 'lucide-react';

const Home = () => {
  const [matches, setMatches] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [message, setMessage] = useState('');

  const currentUserId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/users`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        const otherUsers = res.data.filter(
          (user) => String(user._id) !== String(currentUserId)
        );

        setMatches(otherUsers);
        setCurrentIndex(0); // Reset index
      } catch (err) {
        console.error("Failed to fetch users:", err);
      }
    };

    fetchUsers();
  }, [currentUserId]);

  // Filtered matches based on searchTerm
  const filteredMatches = matches.filter((user) => {
    const nameMatch = user.name?.toLowerCase().includes(searchTerm.toLowerCase());
    const skillMatch = user.skillsOffered?.some((skill) =>
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const locationMatch = user.location?.toLowerCase().includes(searchTerm.toLowerCase());
    return nameMatch || skillMatch || locationMatch;
  });

  const currentMatch = filteredMatches[currentIndex];

  if (filteredMatches.length === 0) {
    return (
      <div className="text-center p-6 text-gray-600">
        {searchTerm ? 'No matching Ustaads found.' : 'Loading Ustaads...'}
      </div>
    );
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredMatches.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredMatches.length) % filteredMatches.length);
  };

  const handleLike = () => {
    console.log('Liked:', currentMatch.name);
    handleNext();
  };

  const handlePass = () => {
    console.log('Passed:', currentMatch.name);
    handleNext();
  };

  const handleBookingSubmit = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/bookings`,
        {
          toUser: currentMatch._id,
          skill: selectedSkill,
          timeslot: selectedTime,
          message,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      alert('Booking request sent successfully!');
      setShowModal(false);
    } catch (err) {
      console.error('Booking failed:', err);
      alert('Failed to send request.');
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover Skills</h1>
        <p className="text-gray-600">Find your perfect skill exchange match</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search skills, people, or locations..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentIndex(0);
              }}
              className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Filter className="h-5 w-5 mr-2" />
            Filters
          </button>
        </div>

        {showFilters && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">More filters coming soon...</p>
          </div>
        )}
      </div>

      {/* Match Card */}
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-96">
            <img
              src={currentMatch.profilePicture || 'https://via.placeholder.com/400'}
              alt={currentMatch.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{currentMatch.name}</h2>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm font-medium text-gray-700">
                  {currentMatch.rating || 4.5} ({currentMatch.reviewCount || 10})
                </span>
              </div>
            </div>

            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{currentMatch.location || 'Unknown'}</span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="text-sm font-medium text-green-800">Offers:</span>
                <span className="text-sm text-green-700">
                  {(currentMatch.skillsOffered || []).join(', ') || 'N/A'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="text-sm font-medium text-blue-800">Wants:</span>
                <span className="text-sm text-blue-700">
                  {(currentMatch.skillsWanted || []).join(', ') || 'N/A'}
                </span>
              </div>
            </div>

            <p className="text-gray-700 text-sm mb-4">
              {currentMatch.bio || 'No bio available.'}
            </p>

            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Available Times
              </h4>
              <div className="flex flex-wrap gap-2">
                {(currentMatch.availability || []).map((time, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {time}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              {/* <div className="flex space-x-4">
                <button onClick={handlePass} className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                  <X className="h-6 w-6 text-gray-600" />
                </button>
                <button onClick={handleLike} className="w-12 h-12 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-red-500" />
                </button>
              </div> */}

              <button onClick={() => setShowModal(true)} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                Request Session
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4 space-x-4">
          <button onClick={handlePrevious} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Previous</button>
          <span className="px-4 py-2 text-gray-600">{currentIndex + 1} of {filteredMatches.length}</span>
          <button onClick={handleNext} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Next</button>
        </div>
      </div>

      {/* Booking Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Request a Session</h2>
            <select value={selectedSkill} onChange={(e) => setSelectedSkill(e.target.value)} className="w-full p-2 mb-3 border rounded">
              <option value="">Select Skill</option>
              {(currentMatch.skillsOffered || []).map((skill, i) => (
                <option key={i} value={skill}>{skill}</option>
              ))}
            </select>
            <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} className="w-full p-2 mb-3 border rounded">
              <option value="">Select Time Slot</option>
              {(currentMatch.availability || []).map((time, i) => (
                <option key={i} value={time}>{time}</option>
              ))}
            </select>
            <textarea
              placeholder="Optional message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
              rows={3}
            />
            <div className="flex justify-end space-x-3">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
              <button onClick={handleBookingSubmit} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Send Request</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;


