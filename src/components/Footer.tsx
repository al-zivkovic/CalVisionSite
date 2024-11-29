const Footer = () => {
    return (
      <footer className="bg-primary-variant py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-secondary font-bold text-lg">
            CalVision
          </div>
  
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-start space-x-6">
            <a href="/privacy-policy" className="text-gray-400 hover:text-tertiary transition">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-gray-400 hover:text-tertiary transition">
              Terms of Service
            </a>
            <a href="/contact" className="text-gray-400 hover:text-tertiary transition">
              Contact Us
            </a>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-gray-500">
            Copyright © {new Date().getFullYear()} zkkva. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  