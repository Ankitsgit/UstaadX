import { useState, useEffect } from 'react';
import { useNavigate ,Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import {
  Calendar,
  Clock,
  User,
  Video,
  CheckCircle,
  XCircle,
  AlertCircle,
} from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
const Bookings = () => {
  const [modalBooking, setModalBooking] = useState(null);
  const [modalAction, setModalAction] = useState(null); // "accepted" or "rejected"

  const [bookings, setBookings] = useState([]);
  const [activeTab, setActiveTab] = useState('pending');
  const currentUserId = localStorage.getItem('userId');
  const navigate = useNavigate();

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/bookings`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setBookings(res.data);
    } catch (error) {
      console.error('Failed to fetch bookings:', error);
    }
  };


const handleResponse = async (id, status) => {
  try {
    await axios.put(
      `${import.meta.env.VITE_API_URL}/api/bookings/${id}`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    toast.success(`Booking ${status === 'accepted' ? 'accepted' : 'rejected'} successfully!`);
    fetchBookings();
  } catch (err) {
    console.error('Failed to update booking status:', err);
    toast.error('Something went wrong. Try again.');
  }
};

  const getStatusIcon = (status) => {
    switch (status) {
      case 'upcoming':
        return <AlertCircle className="h-5 w-5 text-blue-500" />;
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'cancelled':
      case 'rejected':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-blue-100 text-blue-800';
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  const filteredBookings = bookings.filter((b) => b.status === activeTab);

const tabs = [
  {  key: 'pending', 
     label: 'Pending',
     count: bookings.filter((b) => b.status === 'pending').length },
  { key: 'accepted', label: 'Accepted', count: bookings.filter((b) => b.status === 'accepted').length },
  { key: 'rejected', label: 'Rejected', count: bookings.filter((b) => b.status === 'rejected').length },
];


  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Bookings</h1>
        <p className="text-gray-600">Manage your skill exchange sessions</p>
      </div>

      {/* Tabs */}
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

      {/* Booking List */}
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
          filteredBookings.map((booking) => {
            const isReceiver = booking.toUser?._id === currentUserId;
            const isSender = booking.fromUser?._id === currentUserId;
            const partner = isSender ? booking.toUser : booking.fromUser;

            return (
              <div
                key={booking._id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={partner?.profilePicture || "https://i.pravatar.cc/100"}
                      alt={partner?.name || 'Partner'}
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
                          <span className="ml-1 capitalize">{booking.status}</span>
                        </span>
                      </div>
                      <p className="text-gray-600 mb-1">
                         {isReceiver ? (
                         <>Requested by <span className="font-medium">{partner?.name}</span></>
                         ) : (
                        <>Requested to <span className="font-medium">{partner?.name}</span></>
                        )}
                      </p>

                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        {/* <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(booking.date)}
                        </div> */}
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {booking.timeSlot} ({booking.timeSlot})
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
                      {booking.message && (
                        <p className="text-sm text-gray-600 mt-2 bg-gray-50 p-2 rounded">
                          <strong>Notes:</strong> {booking.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">

                    {booking.status === 'pending' && isReceiver && (
                     <div className="flex flex-col space-y-2">
                        <button
                                onClick={() => {
                                   setModalBooking(booking);
                                   setModalAction('accepted');
                                   }}
                                   className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                        >
                       ✅ Accept
                      </button>
                      <button
                            onClick={() => {
                                setModalBooking(booking);
                                setModalAction('rejected');
                                  }}
                       className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                      >
                        ❌ Reject
                      </button>
                   </div>
                   )}
                    {booking.status === 'accepted' && (
                      <button
                         onClick={() => {
                         const partnerId = isSender ? booking.toUser._id : booking.fromUser._id;
                        
                          navigate(`/user/chat/${partnerId}`);

      
                          // <NavLink to="Chat" className={({ isActive }) => isActive ? "text-green-700" : ""}>
                          //  Chat
                          // </NavLink>

                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                  >
                 💬 Chat
                </button>
                )}


                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
{/* Confirmation Modal */}
{modalBooking && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-lg font-bold mb-4">
        Are you sure you want to {modalAction} this booking?
      </h2>
      <p className="text-gray-600 mb-4">
        {modalAction === 'accepted'
          ? 'This will confirm the session.'
          : 'This will decline the session and notify the sender.'}
      </p>
      <div className="flex justify-end space-x-3">
        <button
          onClick={() => {
            setModalBooking(null);
            setModalAction(null);
          }}
          className="px-4 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            handleResponse(modalBooking._id, modalAction);
            setModalBooking(null);
            setModalAction(null);
          }}
          className={`px-4 py-2 text-white rounded ${
            modalAction === 'accepted'
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-red-600 hover:bg-red-700'
          }`}
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Bookings;
