import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="bg-primary-variant py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-secondary font-bold text-lg">
            CalVision
          </div>
  
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-start space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-tertiary transition">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-tertiary transition">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-tertiary transition">
              Contact Us
            </Link>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-gray-500">
            Copyright © {new Date().getFullYear()} zkkva. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  