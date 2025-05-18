import  { motion } from 'framer-motion';

const PartnersSection = () => {
  const partners = [
    { name: "C.ARICENT TECHNOLOGY LTD", logo: <div className="h-16 w-full flex items-center justify-center text-xl font-bold text-blue-800">C.ARICENT</div> },
    { name: "IMARA TECH SOLUTIONS", logo: <div className="h-16 w-full flex items-center justify-center text-xl font-bold text-green-700">IMARA TECH</div> },
    { name: "HB Hub", logo: <div className="h-16 w-full flex items-center justify-center text-xl font-bold text-purple-700">HB Hub</div> },
    { name: "Rwanda TVET Board", logo: <div className="h-16 w-full flex items-center justify-center text-xl font-bold text-red-700">RTB</div> }
  ];

  return (
    <section className="py-16 bg-blue-900" id="partners">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-heading mx-auto">Our Partners</h2>
          <p className="text-gray-700">
            We collaborate with leading industry partners to ensure our training programs remain relevant and our students get exposure to real-world applications.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <img src="/src/assets/african-student.jpg" alt="Partner Highlight" className="col-span-2 md:col-span-1 rounded-lg shadow-lg object-cover h-32 w-full" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition-shadow"
            >
              {partner.logo}
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/partners" 
            className="text-blue-800 font-medium hover:text-blue-600 transition-colors inline-flex items-center"
          >
            View all our partners and collaboration opportunities
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
