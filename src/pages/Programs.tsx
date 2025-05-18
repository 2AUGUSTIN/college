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
                <img src="data:image/jpeg;base64,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" alt="ICT and Multimedia" className="hidden md:block md:w-1/3 object-cover h-full" />
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
                <img src="data:image/jpeg;base64,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" alt="O'Level Education" className="hidden md:block md:w-1/3 object-cover h-full" />
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
