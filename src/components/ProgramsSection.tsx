import  { Code, Calculator, Book } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProgramsSection = () => {
  const programs = [
    {
      title: "ICT and Multimedia",
      description: "Software Development (L3-L5) covering programming, database management, web development, and multimedia creation.",
      icon: <Code className="h-8 w-8 text-blue-800" />,
      color: "bg-blue-50",
      borderColor: "border-blue-100",
      link: "/programs#ict"
    },
    {
      title: "Accounting",
      description: "Comprehensive accounting program (S4-S6) teaching financial management, bookkeeping, and business principles.",
      icon: <Calculator className="h-8 w-8 text-green-800" />,
      color: "bg-green-50",
      borderColor: "border-green-100",
      link: "/programs#accounting"
    },
    {
      title: "O'Level Education",
      description: "Quality general education (S1-S3) providing a strong foundation for further technical and vocational studies.",
      icon: <Book className="h-8 w-8 text-orange-700" />,
      color: "bg-orange-50",
      borderColor: "border-orange-100",
      link: "/programs#olevel"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="programs">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading mx-auto">Our Academic Programs</h2>
          <p className="text-gray-700">
            CBG II TVET School offers a range of specialized programs designed to prepare students for successful careers in high-demand fields.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${program.color} border ${program.borderColor} rounded-lg p-8 transition-transform hover:-translate-y-2`}
            >
              <div className="mb-4">{program.icon}</div>
              <h3 className="text-xl font-bold mb-3">{program.title}</h3>
              <p className="text-gray-700 mb-6">{program.description}</p>
              <Link to={program.link} className="text-blue-800 font-medium hover:text-blue-600 transition-colors">
                Learn more
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/admissions" className="btn-primary inline-block">
            Apply for Admission
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
  