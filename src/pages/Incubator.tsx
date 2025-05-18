import React from 'react';

const Incubator: React.FC = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-6 text-center">Incubator</h1>
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <p className="text-lg mb-4">Our Incubator program supports student entrepreneurs with mentorship, resources, and funding opportunities. Join a vibrant community of innovators and turn your ideas into reality!</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Startup mentorship</li>
          <li>Access to funding</li>
          <li>Networking events</li>
          <li>Co-working spaces</li>
        </ul>
      </div>
      <img src="/src/assets/african-student.jpg" alt="African Student" className="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-64 md:h-96" />
    </div>
  </div>
);

export default Incubator;
