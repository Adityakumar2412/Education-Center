
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HomeIcon, BookOpenIcon, UserIcon, LogInIcon } from "lucide-react";

interface NavbarProps {
  isLoggedIn: boolean;
}

const Navbar = ({ isLoggedIn = false }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-brand-blue">Education</span>
              <span className="text-2xl font-bold text-brand-green">Centre</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 text-gray-700 hover:text-brand-blue font-medium flex items-center gap-1">
              <HomeIcon className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link to="/courses" className="px-3 py-2 text-gray-700 hover:text-brand-blue font-medium flex items-center gap-1">
              <BookOpenIcon className="h-4 w-4" />
              <span>Courses</span>
            </Link>
            {isLoggedIn ? (
              <Link to="/profile" className="px-3 py-2 text-gray-700 hover:text-brand-blue font-medium flex items-center gap-1">
                <UserIcon className="h-4 w-4" />
                <span>Profile</span>
              </Link>
            ) : (
              <Link to="/login">
                <Button className="flex items-center gap-2">
                  <LogInIcon className="h-4 w-4" />
                  <span>Login</span>
                </Button>
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="px-2">
                  <span className="sr-only">Open menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px]">
                <div className="flex flex-col space-y-3 mt-6">
                  <Link 
                    to="/" 
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <HomeIcon className="h-4 w-4" />
                    <span>Home</span>
                  </Link>
                  <Link 
                    to="/courses" 
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <BookOpenIcon className="h-4 w-4" />
                    <span>Courses</span>
                  </Link>
                  {isLoggedIn ? (
                    <Link 
                      to="/profile" 
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <UserIcon className="h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  ) : (
                    <Link 
                      to="/login" 
                      className="flex items-center gap-2 px-4 py-2 bg-brand-blue text-white rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <LogInIcon className="h-4 w-4" />
                      <span>Login</span>
                    </Link>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
