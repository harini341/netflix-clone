// frontend/src/components/Hero.jsx
const Hero = () => {
  return (
    <div className="relative h-[85vh] md:h-[95vh] w-full">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 md:px-16 max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          Unlimited Movies, TV Shows, and More
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">
          Watch anywhere. Cancel anytime.
        </p>
        <p className="text-base md:text-lg mb-8">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl">
          <input 
            type="email" 
            placeholder="Email address"
            className="flex-1 px-4 py-3 rounded bg-black/60 border border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:border-red-600"
          />
          <button className="netflix-button py-3 px-8 text-lg">
            Get Started &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;