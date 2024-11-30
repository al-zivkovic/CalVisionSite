const Footer = () => {
  return (
    <footer className="bg-primary-variant py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
        {/* App Name */}
        <div className="text-secondary font-bold text-lg mb-4">
          CalVision
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center space-x-6 mb-4">
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

        {/* Copyright */}
        <div className="text-sm text-gray-500">
          Copyright © {new Date().getFullYear()} zkkva. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
