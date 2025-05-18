import React from 'react';

const AcademicPrograms: React.FC = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-6 text-center">Academic Programs</h1>
    <div className="flex flex-col md:flex-row items-center gap-8">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqU2SEvIjOuiDDq-c1yc-qMmsG8M2iBgfcKw&s" alt="African Student" className="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-64 md:h-96" />
      <div className="flex-1">
        <p className="text-lg mb-4">Explore our diverse academic programs designed to empower students for success in a global world. Our curriculum is tailored to foster innovation, critical thinking, and leadership.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Bachelor of Science in Computer Science</li>
          <li>Bachelor of Business Administration</li>
          <li>Bachelor of Arts in Communication</li>
          <li>Master of Science in Data Analytics</li>
        </ul>
      </div>
    </div>
  </div>
);

export default AcademicPrograms;
