import React from 'react';

const StudentLife: React.FC = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-6 text-center">Student Life</h1>
    <div className="flex flex-col md:flex-row items-center gap-8">
      <img src="/src/assets/african-student.jpg" alt="African Student" className="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-64 md:h-96" />
      <div className="flex-1">
        <p className="text-lg mb-4">Experience a vibrant campus life with diverse clubs, sports, and cultural activities. Our campus is a place where lifelong friendships are made and talents are nurtured.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Student clubs & organizations</li>
          <li>Sports & recreation</li>
          <li>Cultural festivals</li>
          <li>Leadership programs</li>
        </ul>
      </div>
    </div>
  </div>
);

export default StudentLife;
