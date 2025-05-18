import  { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const values = [
    { title: "Excellence", description: "Striving for the highest standards in education and innovation" },
    { title: "Integrity", description: "Upholding ethical principles and honesty in all our endeavors" },
    { title: "Innovation", description: "Embracing new ideas and approaches to technical education" },
    { title: "Inclusion", description: "Creating an environment where all students can thrive and succeed" }
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-heading">About CBG II TVET School</h2>
            <p className="mb-6 text-gray-700">
              At CBG II TVET School, we provide high-quality technical and vocational education that prepares students for successful careers in today's competitive job market. Located in Rubavu, Gisenyi Sector, our institution has been a center of excellence since its establishment.
            </p>
            <p className="mb-6 text-gray-700">
              Our mission is to empower students with practical skills, innovative thinking, and professional values that make them industry-ready and capable of driving economic growth in Rwanda and beyond.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-2"
                >
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <a 
              href="/about" 
              className="text-blue-800 font-medium hover:text-blue-600 transition-colors flex items-center"
            >
              Learn more about our history and achievements
            </a>
          </div>
          
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-24 h-24 bg-blue-100 rounded-full opacity-70" />
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-orange-100 rounded-full opacity-70" />
            <img 
              src="https://images.unsplash.com/photo-1586144131462-fa2a2b6d070c?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZyUyMGNhbXB1cyUyMGVkdWNhdGlvbnxlbnwwfHx8fDE3NDc1NDIwODB8MA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
              alt="CBG II TVET School Campus" 
              className="rounded-lg shadow-lg relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
  