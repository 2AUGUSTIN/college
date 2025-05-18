import  { useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-20">
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About CBG II TVET School</h1>
          <p className="text-xl text-blue-100">
            Learn about our history, mission, and the team behind our success
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-heading">Our History</h2>
              <p className="mb-4 text-gray-700">
                CBG II TVET School was established in [year] with a vision to provide quality technical and vocational education to Rwandan youth. Starting with just a few programs and a handful of students, we have grown significantly over the years.
              </p>
              <p className="text-gray-700">
                Through dedication to excellence and continuous improvement, our institution has become a leading center for technical education in the Rubavu region, producing graduates who make significant contributions to various industries.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://gstrinire.vercel.app/assets/download4-Cx8pD5PC.jpg" 
                alt="School History" 
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
          
          <div className="mb-16">
            <h2 className="section-heading">Our Location</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rubavu, Gisenyi Sector</h3>
                <p className="text-gray-700">
                  Our campus is located in the beautiful town of Gisenyi, in Rwanda's Rubavu district, offering students a conducive environment for learning and personal growth.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Facilities</h3>
                <p className="text-gray-700">
                  Our facilities include well-equipped computer labs, modern classrooms, a library, and specialized workshops for practical training in various technical fields.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Accessible Campus</h3>
                <p className="text-gray-700">
                  The campus is easily accessible by public transportation, making it convenient for students from different parts of the region to attend classes.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="section-heading">Our Team</h2>
            <p className="mb-8 text-gray-700">
              Our dedicated team of professional trainers and administrative staff work tirelessly to ensure that CBG II TVET School provides the highest quality education.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[...Array(4)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="h-40 w-40 mx-auto bg-gray-200 rounded-full mb-4"></div>
                  <h3 className="font-bold text-gray-900">Team Member Name</h3>
                  <p className="text-gray-600 text-sm">Position</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
  