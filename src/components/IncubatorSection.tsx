import  { Zap, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const IncubatorSection = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-purple-800" />,
      title: "Innovation Hub",
      description: "A dedicated space for students to develop, test and launch their tech projects and startups."
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-600" />,
      title: "Mentorship Programs",
      description: "Expert guidance from industry professionals to help students refine their ideas and projects."
    },
    {
      icon: <Users className="h-8 w-8 text-teal-700" />,
      title: "Community Impact",
      description: "Projects focused on solving local challenges and contributing to community development."
    }
  ];

  return (
    <section className="py-20 bg-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Incubator & Innovation</h2>
          <p className="text-blue-100">
            Our incubator nurtures creative ideas and transforms them into viable projects and startups, 
            providing students with the resources and support they need to succeed.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-colors"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-blue-100">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 relative">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold mb-4">Student Success Stories</h3>
              <p className="mb-6">
                Our students have developed innovative solutions that address real-world problems. 
                From mobile applications that improve healthcare access to renewable energy projects, 
                CBG II TVET School students are making an impact.
              </p>
              <a 
                href="/incubator" 
                className="inline-block bg-white text-blue-900 px-6 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors"
              >
                Explore Projects
              </a>
            </div>
            <div className="md:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1741636371327-175a62b1a6e2?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZyUyMGNhbXB1cyUyMGVkdWNhdGlvbnxlbnwwfHx8fDE3NDc1NDIwODB8MA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
                alt="Student Innovation" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncubatorSection;
  