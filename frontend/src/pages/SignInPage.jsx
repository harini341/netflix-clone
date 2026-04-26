// frontend/src/pages/SignInPage.jsx
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const SignInPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     if (!email || !password) {
//       setError('Please fill in all fields');
//       setLoading(false);
//       return;
//     }

//     const result = await login(email, password);
//     if (result.success) {
//       navigate('/');
//     } else {
//       setError(result.message || 'Invalid email or password');
//     }
//     setLoading(false);
//   };

//   return (
//     <div 
//       className="min-h-screen bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage: "url('https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
//       }}
//     >
//       {/* Dark Overlay */}
//       <div className="min-h-screen bg-black/70 flex flex-col">
//         {/* Header */}
//         <div className="px-4 md:px-12 py-6">
//           <Link to="/" className="text-red-600 text-3xl md:text-4xl font-bold">
//             NETFLIX
//           </Link>
//         </div>

//         {/* Sign In Form */}
//         <div className="flex-1 flex items-center justify-center px-4 py-8">
//           <div className="bg-black/80 rounded-lg p-8 md:p-12 w-full max-w-md">
//             <h1 className="text-white text-3xl font-bold mb-6">Sign In</h1>
            
//             {error && (
//               <div className="bg-red-600/20 border border-red-600 text-red-500 px-4 py-2 rounded mb-4 text-sm">
//                 {error}
//               </div>
//             )}
            
//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div>
//                 <input
//                   type="email"
//                   placeholder="Email or phone number"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
//                 />
//               </div>
//               <div>
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded transition duration-300 disabled:opacity-50"
//               >
//                 {loading ? 'Signing In...' : 'Sign In'}
//               </button>
//             </form>
            
//             <div className="flex items-center justify-between mt-4 text-sm">
//               <label className="flex items-center text-gray-400">
//                 <input type="checkbox" className="mr-2" />
//                 Remember me
//               </label>
//               <a href="#" className="text-gray-400 hover:text-white">Need help?</a>
//             </div>
            
//             <div className="mt-8 text-gray-400">
//               New to Netflix?{' '}
//               <a href="#" className="text-white hover:underline">Sign up now</a>
//             </div>
//             <p className="text-xs text-gray-500 mt-6">
//               This page is protected by Google reCAPTCHA to ensure you're not a bot. 
//               <a href="#" className="text-blue-500 hover:underline"> Learn more.</a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignInPage;
// frontend/src/pages/SignInPage.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignInPage = () => {
  // Pre-fill with default credentials
  const [email, setEmail] = useState('user@netflix.com');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    const result = await login(email, password);
    if (result.success) {
      navigate('/');
    } else {
      setError(result.message || 'Invalid email or password');
    }
    setLoading(false);
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="min-h-screen bg-black/70 flex flex-col">
        <div className="px-4 md:px-12 py-6">
          <Link to="/" className="text-red-600 text-3xl md:text-4xl font-bold">
            NETFLIX
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="bg-black/80 rounded-lg p-8 md:p-12 w-full max-w-md">
            <h1 className="text-white text-3xl font-bold mb-6">Sign In</h1>
            
            {error && (
              <div className="bg-red-600/20 border border-red-600 text-red-500 px-4 py-2 rounded mb-4 text-sm">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="email"
                  placeholder="Email or phone number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded transition duration-300 disabled:opacity-50"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>
            
            <div className="flex items-center justify-between mt-4 text-sm">
              <label className="flex items-center text-gray-400">
                <input type="checkbox" className="mr-2" defaultChecked />
                Remember me
              </label>
              <a href="#" className="text-gray-400 hover:text-white">Need help?</a>
            </div>
            
            <div className="mt-8 text-gray-400">
              New to Netflix?{' '}
              <a href="#" className="text-white hover:underline">Sign up now</a>
            </div>
            <p className="text-xs text-gray-500 mt-6">
              This page is protected by Google reCAPTCHA to ensure you're not a bot. 
              <a href="#" className="text-blue-500 hover:underline"> Learn more.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;