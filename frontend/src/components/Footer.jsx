// frontend/src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-10 mt-12">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-gray-400 text-sm mb-6">Questions? Call 000-800-919-1694</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-400">
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Investor Relations</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Speed Test</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:underline">Help Center</a>
            <a href="#" className="hover:underline">Jobs</a>
            <a href="#" className="hover:underline">Cookie Preferences</a>
            <a href="#" className="hover:underline">Legal Notices</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:underline">Account</a>
            <a href="#" className="hover:underline">Ways to Watch</a>
            <a href="#" className="hover:underline">Corporate Information</a>
            <a href="#" className="hover:underline">Only on Netflix</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:underline">Media Center</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
        </div>
        <div className="mt-8">
          <select className="bg-black border border-gray-500 text-gray-300 py-1 px-2 rounded text-sm">
            <option>English</option>
          </select>
          <p className="text-gray-400 text-xs mt-4">Netflix Clone India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;