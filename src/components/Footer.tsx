
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-white">Education</span>
              <span className="text-xl font-bold text-brand-green">Centre</span>
            </Link>
            <p className="mt-4 text-gray-300 text-sm">
              Our mission is to make high-quality education free and accessible to all, 
              with a vision of "Education for Everyone, Everywhere."
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/courses?category=programming" className="text-gray-300 hover:text-white transition-colors">
                  Programming
                </Link>
              </li>
              <li>
                <Link to="/courses?category=business" className="text-gray-300 hover:text-white transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link to="/courses?category=design" className="text-gray-300 hover:text-white transition-colors">
                  Design
                </Link>
              </li>
              <li>
                <Link to="/courses?category=finance" className="text-gray-300 hover:text-white transition-colors">
                  Finance
                </Link>
              </li>
              <li>
                <Link to="/courses?category=marketing" className="text-gray-300 hover:text-white transition-colors">
                  Marketing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-brand-green mr-2">Mobile:</span>
                <a href="tel:+919523340408" className="text-gray-300 hover:text-white transition-colors">
                  +91 9523340408
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-brand-green mr-2">Email:</span>
                <a href="mailto:adityakumar9523340408@gmail.com" className="text-gray-300 hover:text-white transition-colors break-words">
                  adityakumar9523340408@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Education Centre. All rights reserved.</p>
          <p className="mt-1">Director: Aditya Kumar | Co-Director: Lekh Raj Soni</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
