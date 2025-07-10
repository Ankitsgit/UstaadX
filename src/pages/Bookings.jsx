import { useState } from 'react';
import {
  Calendar,
  Clock,
  User,
  Video,
  CheckCircle,
  XCircle,
  AlertCircle,
} from 'lucide-react';

const Booking = [
  {
    id: '1',
    partnerName: 'Sarah Chen',
    partnerAvatar:
      'https://images.unsplash.com/photo-1494790108755-2616b612f2b5?w=400&h=400&fit=crop&crop=face',
    skill: 'Python Programming',
    date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    time: '2:00 PM',
    duration: '1 hour',
    status: 'upcoming',
    type: 'virtual',
    notes: 'Focus on object-oriented programming concepts',
  },
  {
    id: '2',
    partnerName: 'Marcus Rodriguez',
    partnerAvatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    skill: 'Guitar Lessons',
    date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    time: '6:00 PM',
    duration: '1.5 hours',
    status: 'upcoming',
    type: 'in-person',
    location: 'Central Park Music Area',
    notes: 'Bring your acoustic guitar',
  },
  {
    id: '3',
    partnerName: 'Emma Thompson',
    partnerAvatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    skill: 'Photography Workshop',
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    time: '10:00 AM',
    duration: '2 hours',
    status: 'completed',
    type: 'in-person',
    location: 'Golden Gate Park',
  },
  {
    id: '4',
    partnerName: 'David Kim',
    partnerAvatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    skill: 'React Development',
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    time: '3:00 PM',
    duration: '1 hour',
    status: 'cancelled',
    type: 'virtual',
  },
];

const Bookings = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedBooking, setSelectedBooking] = useState(null);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'upcoming':
        return <AlertCircle className="h-5 w-5 text-blue-500" />;
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'cancelled':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const filteredBookings = Booking.filter(
    (booking) => booking.status === activeTab
  );

  const tabs = [
    {
      key: 'upcoming',
      label: 'Upcoming',
      count: Booking.filter((b) => b.status === 'upcoming').length,
    },
    {
      key: 'completed',
      label: 'Completed',
      count: Booking.filter((b) => b.status === 'completed').length,
    },
    {
      key: 'cancelled',
      label: 'Cancelled',
      count: Booking.filter((b) => b.status === 'cancelled').length,
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Bookings</h1>
        <p className="text-gray-600">Manage your skill exchange sessions</p>
      </div>

      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
                {tab.count > 0 && (
                  <span
                    className={`ml-2 py-0.5 px-2 rounded-full text-xs ${
                      activeTab === tab.key
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="space-y-4">
        {filteredBookings.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No {activeTab} bookings
            </h3>
            <p className="text-gray-500">
              {activeTab === 'upcoming'
                ? "You don't have any upcoming sessions. Start browsing skills to book your first session!"
                : `No ${activeTab} bookings to display.`}
            </p>
            {activeTab === 'upcoming' && (
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Browse Skills
              </button>
            )}
          </div>
        ) : (
          filteredBookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={booking.partnerAvatar}
                    alt={booking.partnerName}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {booking.skill}
                      </h3>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                          booking.status
                        )}`}
                      >
                        {getStatusIcon(booking.status)}
                        <span className="ml-1 capitalize">
                          {booking.status}
                        </span>
                      </span>
                    </div>
                    <p className="text-gray-600 mb-1">
                      with <span className="font-medium">{booking.partnerName}</span>
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(booking.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {booking.time} ({booking.duration})
                      </div>
                      <div className="flex items-center">
                        {booking.type === 'virtual' ? (
                          <>
                            <Video className="h-4 w-4 mr-1" />
                            Virtual
                          </>
                        ) : (
                          <>
                            <User className="h-4 w-4 mr-1" />
                            In-person
                          </>
                        )}
                      </div>
                    </div>
                    {booking.location && (
                      <p className="text-sm text-gray-500 mt-1">
                        📍 {booking.location}
                      </p>
                    )}
                    {booking.notes && (
                      <p className="text-sm text-gray-600 mt-2 bg-gray-50 p-2 rounded">
                        <strong>Notes:</strong> {booking.notes}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  {booking.status === 'upcoming' && (
                    <>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                        {booking.type === 'virtual'
                          ? 'Join Session'
                          : 'View Details'}
                      </button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                        Reschedule
                      </button>
                      <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm">
                        Cancel
                      </button>
                    </>
                  )}
                  {booking.status === 'completed' && (
                    <>
                      <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm">
                        Leave Review
                      </button>
                      <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm">
                        Book Again
                      </button>
                    </>
                  )}
                  {booking.status === 'cancelled' && (
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                      View Details
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Bookings;
