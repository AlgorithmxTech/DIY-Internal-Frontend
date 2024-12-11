import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import api from "../../../utils/Api";

interface User {
  id: number;
  email: string;
  username: string;
  is_email_verified: boolean;
  created_at: string;
}

function Main() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log("Authorization Header:", api.defaults.headers.common['Authorization']);
        console.log("Token from localStorage:", localStorage.getItem('token'));

        const response = await api.get<User>("/profile/"); 
        setUser(response.data);
      } catch (err) {
        console.error("Error fetching user profile:", err);
        setError("Failed to load user profile. Please try again later.");
      }
    };

    fetchUsers();
  }, []);

  const handleLogout = () => {
    console.log("Logging out...");

    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");


    navigate("/signin");
  };

  return (
    <div className="p-4">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : user ? (
        <div>
          <h1>Email: {user.email}</h1>

          <h2>Username: {user.username}</h2>
          <h3>{user.is_email_verified== true ?'Verified':'Not-Verified'}</h3>
          <h3></h3>
          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Logout
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Main;
