import React from 'react';

const Admissions: React.FC = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-6 text-center">Admissions</h1>
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <p className="text-lg mb-4">Join our academic community! Learn about our admissions process, requirements, and how to apply. We welcome students from all backgrounds to pursue their dreams with us.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Online application</li>
          <li>Scholarship opportunities</li>
          <li>International student support</li>
          <li>Campus tours</li>
        </ul>
      </div>
      <img src="/src/assets/african-student.jpg" alt="African Student" className="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-64 md:h-96" />
    </div>
  </div>
);

export default Admissions;
