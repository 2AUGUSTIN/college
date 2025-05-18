import  { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-900">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4 mb-6">Page Not Found</h2>
        <p className="text-blue-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 bg-blue-800 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
        >
          <Home className="h-5 w-5" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
  