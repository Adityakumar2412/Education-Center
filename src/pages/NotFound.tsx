
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLoggedIn={false} />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 py-16">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
          <h2 className="text-3xl font-bold mt-4 mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <Link to="/">
            <Button className="bg-brand-blue hover:bg-blue-700">
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
