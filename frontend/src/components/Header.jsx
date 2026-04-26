// frontend/src/components/Header.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 via-black/50 to-transparent">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-red-600 text-3xl md:text-4xl font-bold tracking-tighter">
          NETFLIX
        </Link>
        
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm hidden sm:inline">{user.email}</span>
              <button
                onClick={handleSignOut}
                className="netflix-button text-sm px-4 py-1"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/login" className="netflix-button text-sm px-4 py-1">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;