import  { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://gstrinire.vercel.app/assets/download4-Cx8pD5PC.jpg" 
          alt="CBG II TVET School Campus" 
          className="w-full h-full object-cover mix-blend-overlay opacity-70" 
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Shaping the Future through Technical Excellence
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            CBG II TVET School - Empowering students with innovative education 
            and practical skills for tomorrow's challenges.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/admissions" 
              className="btn-primary flex items-center gap-2"
            >
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              to="/programs" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-2 rounded-md font-medium transition-colors"
            >
              Explore Programs
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
