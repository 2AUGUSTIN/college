import  { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Calculator, Book } from 'lucide-react';

const Programs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-20">
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Academic Programs</h1>
          <p className="text-xl text-blue-100">
            Discover our range of quality technical education programs
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Educational Offerings</h2>
            <p className="text-gray-700">
              At CBG II TVET School, we offer a range of specialized programs designed to prepare 
              students for successful careers in high-demand fields. Our curriculum combines 
              theoretical knowledge with practical skills to ensure our graduates are industry-ready.
            </p>
          </div>
          
          <div id="ict" className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-blue-50 border border-blue-100 rounded-lg overflow-hidden"
            >
              <div className="md:flex">
                <img src="/src/assets/african-student.jpg" alt="ICT and Multimedia" className="hidden md:block md:w-1/3 object-cover h-full" />
                <div className="md:w-1/3 bg-blue-800 text-white p-8 flex flex-col justify-center">
                  <Code className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">ICT and Multimedia</h3>
                  <p className="text-blue-100">Software Development (L3-L5)</p>
                </div>
                <div className="md:w-2/3 p-8">
                  <h4 className="text-xl font-semibold text-blue-900 mb-4">Program Overview</h4>
                  <p className="mb-4 text-gray-700">
                    Our ICT and Multimedia program focuses on providing students with comprehensive 
                    skills in software development, web design, database management, and multimedia creation.
                  </p>
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Key Subjects Include:</h5>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Programming Fundamentals (Python, Java)</li>
                      <li>Web Development (HTML, CSS, JavaScript)</li>
                      <li>Database Design and Management</li>
                      <li>Mobile Application Development</li>
                      <li>Multimedia Design and Production</li>
                      <li>Network Fundamentals</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Career Opportunities:</h5>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Software Developer</li>
                      <li>Web Designer</li>
                      <li>Database Administrator</li>
                      <li>Mobile App Developer</li>
                      <li>IT Support Specialist</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div id="accounting" className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-green-50 border border-green-100 rounded-lg overflow-hidden"
            >
              <div className="md:flex">
                <img src="/src/assets/african-student.jpg" alt="Accounting" className="hidden md:block md:w-1/3 object-cover h-full" />
                <div className="md:w-1/3 bg-green-800 text-white p-8 flex flex-col justify-center">
                  <Calculator className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Accounting</h3>
                  <p className="text-green-100">S4-S6 Level</p>
                </div>
                <div className="md:w-2/3 p-8">
                  <h4 className="text-xl font-semibold text-green-900 mb-4">Program Overview</h4>
                  <p className="mb-4 text-gray-700">
                    Our Accounting program equips students with the knowledge and skills needed to 
                    manage financial records, prepare financial statements, and understand business principles.
                  </p>
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Key Subjects Include:</h5>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Financial Accounting</li>
                      <li>Cost and Management Accounting</li>
                      <li>Taxation</li>
                      <li>Business Mathematics</li>
                      <li>Computer Applications in Accounting</li>
                      <li>Business Communication</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Career Opportunities:</h5>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Accounting Assistant</li>
                      <li>Bookkeeper</li>
                      <li>Tax Assistant</li>
                      <li>Payroll Clerk</li>
                      <li>Accounts Receivable/Payable Clerk</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div id="olevel" className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-orange-50 border border-orange-100 rounded-lg overflow-hidden"
            >
              <div className="md:flex">
                <img src="/src/assets/african-student.jpg" alt="O'Level Education" className="hidden md:block md:w-1/3 object-cover h-full" />
                <div className="md:w-1/3 bg-orange-700 text-white p-8 flex flex-col justify-center">
                  <Book className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">O'Level Education</h3>
                  <p className="text-orange-100">S1-S3 Level</p>
                </div>
                <div className="md:w-2/3 p-8">
                  <h4 className="text-xl font-semibold text-orange-900 mb-4">Program Overview</h4>
                  <p className="mb-4 text-gray-700">
                    Our O'Level program provides a strong foundation in general education, 
                    preparing students for further technical and vocational studies or higher education.
                  </p>
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Key Subjects Include:</h5>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Mathematics</li>
                      <li>English Language</li>
                      <li>Kinyarwanda</li>
                      <li>Science (Physics, Chemistry, Biology)</li>
                      <li>Geography and History</li>
                      <li>Computer Studies</li>
                      <li>Entrepreneurship</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Progression Opportunities:</h5>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Advanced studies in ICT and Multimedia</li>
                      <li>Advanced studies in Accounting</li>
                      <li>Other technical and vocational programs</li>
                      <li>Higher education opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div>
            <h2 className="section-heading">Admission Requirements</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">ICT and Multimedia</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Completion of O'Level or equivalent</li>
                  <li>Pass in Mathematics and English</li>
                  <li>Basic computer knowledge</li>
                  <li>Successful entrance assessment</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Accounting</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Completion of O'Level or equivalent</li>
                  <li>Pass in Mathematics and English</li>
                  <li>Basic numeracy skills</li>
                  <li>Successful entrance assessment</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">O'Level</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Completion of primary education</li>
                  <li>National examination results</li>
                  <li>Interview with school officials</li>
                  <li>Parent/guardian commitment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Programs;
