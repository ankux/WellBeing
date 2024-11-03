import { ArrowLeft, Video, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookSession = () => {
  const userID = localStorage.getItem('userID');
  const userName = localStorage.getItem('userName');
  const userEmail = localStorage.getItem('userEmail');
  const { id } = useParams();
  const [expert, setExpert] = useState(null);
  const [selectedMode, setSelectedMode] = useState(''); // State for session mode
  const [selectedDuration, setSelectedDuration] = useState(''); // State for session duration
  const naviagte = useNavigate();

  useEffect(() => {
    const fetchExpert = async () => {
      try {
        const response = await fetch(`http://localhost:8080/experts/${id}`);
        const data = await response.json();
        setExpert(data);
      } catch (error) {
        console.error('Error fetching expert details:', error);
      }
    };

    fetchExpert();
  }, [id]);

  if (!expert) return <p>Loading...</p>;

  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
  };

  const handleDurationSelect = (duration) => {
    setSelectedDuration(duration);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (selectedMode === '') {
      toast.error('Select the mode', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return; // Exit if no mode is selected
    }
  
    if (selectedDuration === '') {
      toast.error('Select the duration', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return; // Exit if no duration is selected
    }
  
    const bookingData = {
      client_id: userID,
      client_name: userName,
      client_email: userEmail,
      expert_id: id,
      expert_name: expert.name,
      session_duration: selectedDuration,
      session_mode: selectedMode,
      rate: expert.rate
    };
  
    try {
      const response = await fetch(`http://localhost:8080/booksession/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create booking');
      }
  
      toast.success('Booking successful!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(()=>{
        naviagte('/');
      }, 2000)
      
    } catch (error) {
      console.error('Error during booking:', error);
      toast.error('Booking failed. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="flex font-poppins flex-col md:flex-row bg-[#E6EAF2] min-h-screen">
      {/* Left sidebar */}
      <ToastContainer />
      <div className="w-full md:w-1/3 bg-[#E6EAF2] p-6">
        <Link to='/experts'>
          <button className="mb-6 flex items-center text-gray-600">
            <ArrowLeft className="w-6 h-6 mr-2" />
          </button>
        </Link>
        
        <div className="bg-white rounded-lg p-4 mb-6 flex items-center">
          <img
            src={expert.image}
            alt={expert.name}
            width={80}
            height={80}
            className="rounded-full mr-4"
          />
          <div>
            <h2 className="font-semibold text-lg">{expert.name}</h2>
            <p className="text-sm text-gray-600">{expert.experience}+ yrs exp • M.A, M.Phil</p>
          </div>
          <ArrowLeft className="w-6 h-6 ml-auto transform rotate-180" />
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-[#7C8E9C] rounded-full flex items-center justify-center text-white mr-4">✓</div>
            <span className="font-medium">Flexible Timing</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-[#7C8E9C] rounded-full flex items-center justify-center text-white mr-4">✓</div>
            <span className="font-medium">At comfort of your home</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-[#7C8E9C] rounded-full flex items-center justify-center text-white mr-4">✓</div>
            <span className="font-medium">Different modes</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="w-full md:w-2/3 bg-white p-6 md:p-12">
        <h1 className="text-3xl font-bold mb-4">Book Your Session</h1>
        <p className="text-gray-600 mb-8">Book an appointment to connect with a mental health expert</p>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Select session mode</h2>
          <div className="flex space-x-4">
            <button
              className={`flex-1 py-4 rounded-lg flex items-center justify-center ${selectedMode === 'video' ? 'bg-gray-700 text-white' : 'bg-white border-2 border-gray-300 text-gray-700'}`}
              onClick={() => handleModeSelect('video')}
            >
              <Video className="w-6 h-6 mr-2" />
              Video
            </button>
            <button
              className={`flex-1 py-4 rounded-lg flex items-center justify-center ${selectedMode === 'call' ? 'bg-gray-700 text-white' : 'bg-white border-2 border-gray-300 text-gray-700'}`}
              onClick={() => handleModeSelect('call')}
            >
              <Phone className="w-6 h-6 mr-2" />
              Call
            </button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Select session duration</h2>
          <button
            className={`bg-gray-700 py-4 px-8 m-2 rounded-lg ${selectedDuration === '30' ? 'bg-gray-700 text-white' : 'bg-white border-2 border-gray-300 text-gray-700'}`}
            onClick={() => handleDurationSelect('30')}
          >
            <div className="text-2xl font-bold">30</div>
            <div className="text-sm">min</div>
          </button>
          <button
            className={`bg-gray-700 py-4 px-8 m-2 rounded-lg ${selectedDuration === '50' ? 'bg-gray-700 text-white' : 'bg-white border-2 border-gray-300 text-gray-700'}`}
            onClick={() => handleDurationSelect('50')}
          >
            <div className="text-2xl font-bold">50</div>
            <div className="text-sm">min</div>
          </button>
        </div>

        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-sm text-gray-600">Get a single session</p>
            <p className="font-semibold">1 session</p>
          </div>
          <div className="flex items-center">
            <span className="font-bold text-xl mr-2">₹{expert.rate}/session</span>
            <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-white">i</div>
          </div>
        </div>

        <button onClick={handleSubmit} className="w-full bg-[#7C8E9C] hover:bg-[#586477] text-white py-4 rounded-lg font-semibold">
          BOOK SESSION
        </button>
      </div>
    </div>
  );
}

export default BookSession;
