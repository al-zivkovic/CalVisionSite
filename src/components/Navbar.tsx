const Navbar = () => {
    return (
      <nav className="w-full bg-primary shadow-md p-4 flex justify-between items-center">
        <div className="text-xl font-bold text-secondary">
          CalVision
        </div>
  
        <div>
          <button className="bg-secondary text-primary px-6 py-2 rounded-md hover:bg-tertiary transition duration-200">
            Download
          </button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  