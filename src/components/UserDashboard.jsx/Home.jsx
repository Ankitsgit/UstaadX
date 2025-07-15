
import { useState } from 'react';
import { Search, Filter, Heart, X, MapPin, Star, Clock } from 'lucide-react';

const mockMatches = [
  {
    id: '1',
    name: 'Sarah Chen',
    profilePicture: 'https://images.unsplash.com/photo-1494790108755-2616b612f2b5?w=400&h=400&fit=crop&crop=face',
    location: 'San Francisco, CA',
    skillOffered: 'Python Programming',
    skillWanted: 'UI/UX Design',
    rating: 4.9,
    reviewCount: 15,
    bio: 'Senior Python developer with 5+ years experience. Love teaching and helping others grow their coding skills.',
    availability: ['Monday 6-8 PM', 'Wednesday 7-9 PM', 'Saturday 10 AM-12 PM']
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    location: 'New York, NY',
    skillOffered: 'Guitar Lessons',
    skillWanted: 'Spanish Tutoring',
    rating: 4.7,
    reviewCount: 28,
    bio: 'Professional guitarist and music teacher. Been playing for 15 years and love sharing the joy of music.',
    availability: ['Tuesday 5-7 PM', 'Thursday 6-8 PM', 'Sunday 2-4 PM']
  },
  {
    id: '3',
    name: 'Emma Thompson',
    profilePicture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    location: 'Austin, TX',
    skillOffered: 'Photography',
    skillWanted: 'React Development',
    rating: 4.8,
    reviewCount: 12,
    bio: 'Professional photographer specializing in portraits and events. Always excited to teach the art of capturing moments.',
    availability: ['Friday 4-6 PM', 'Saturday 9 AM-11 AM', 'Sunday 3-5 PM']
  }
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const currentMatch = mockMatches[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mockMatches.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + mockMatches.length) % mockMatches.length);
  };

  const handleLike = () => {
    console.log('Liked:', currentMatch.name);
    handleNext();
  };

  const handlePass = () => {
    console.log('Passed:', currentMatch.name);
    handleNext();
  };

  return (
    
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover Skills</h1>
        <p className="text-gray-600">Find your perfect skill exchange match</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search skills, people, or locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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

        {/* Filter Panel */}
        {showFilters && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Skill Category</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Categories</option>
                  <option>Programming</option>
                  <option>Design</option>
                  <option>Languages</option>
                  <option>Music</option>
                  <option>Photography</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Locations</option>
                  <option>San Francisco, CA</option>
                  <option>New York, NY</option>
                  <option>Austin, TX</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Ratings</option>
                  <option>4.5+ Stars</option>
                  <option>4.0+ Stars</option>
                  <option>3.5+ Stars</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Match Card */}
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Profile Image */}
          <div className="relative h-96">
            <img
              src={currentMatch.profilePicture}
              alt={currentMatch.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Profile Info */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{currentMatch.name}</h2>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm font-medium text-gray-700">
                  {currentMatch.rating} ({currentMatch.reviewCount})
                </span>
              </div>
            </div>

            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{currentMatch.location}</span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="text-sm font-medium text-green-800">Offers:</span>
                <span className="text-sm text-green-700">{currentMatch.skillOffered}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="text-sm font-medium text-blue-800">Wants:</span>
                <span className="text-sm text-blue-700">{currentMatch.skillWanted}</span>
              </div>
            </div>

            <p className="text-gray-700 text-sm mb-4">{currentMatch.bio}</p>

            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Available Times
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentMatch.availability.map((time, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                  >
                    {time}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center space-x-8">
              <button
                onClick={handlePass}
                className="flex items-center justify-center w-14 h-14 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
              <button
                onClick={handleLike}
                className="flex items-center justify-center w-14 h-14 bg-red-100 rounded-full hover:bg-red-200 transition-colors"
              >
                <Heart className="h-6 w-6 text-red-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={handlePrevious}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Previous
          </button>
          <span className="px-4 py-2 text-gray-600">
            {currentIndex + 1} of {mockMatches.length}
          </span>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
