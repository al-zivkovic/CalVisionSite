import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full p-8 flex justify-between items-center z-50 transition duration-200 ${
        scrolled ? "bg-primary" : "bg-primary"
      }`}
    >
      <Link to="/" className="text-xl font-bold text-secondary">
        Cal<b className="text-tertiary">Vision</b>
      </Link>

      <a href="target:blank">
        <button className="bg-secondary text-primary font-bold px-6 py-2 rounded-md hover:bg-tertiary transition duration-200">
          Download
        </button>
      </a>
    </nav>
  );
};

export default Navbar;
