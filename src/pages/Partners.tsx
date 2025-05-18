import React from 'react';

const Partners: React.FC = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-6 text-center">Partners</h1>
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <p className="text-lg mb-4">We collaborate with leading organizations and institutions to provide our students with the best opportunities. Our partners help us drive innovation and excellence.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Tech companies</li>
          <li>NGOs</li>
          <li>Universities</li>
          <li>Industry leaders</li>
        </ul>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="flex flex-col items-center">
            <span className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <svg className="h-8 w-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </span>
            <div className="font-bold">Team Member Name</div>
            <div className="text-sm text-gray-600">Position</div>
          </div>
          <div className="flex flex-col items-center">
            <span className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <svg className="h-8 w-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </span>
            <div className="font-bold">Team Member Name</div>
            <div className="text-sm text-gray-600">Position</div>
          </div>
          <div className="flex flex-col items-center">
            <span className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <svg className="h-8 w-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </span>
            <div className="font-bold">Team Member Name</div>
            <div className="text-sm text-gray-600">Position</div>
          </div>
          <div className="flex flex-col items-center">
            <span className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <svg className="h-8 w-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </span>
            <div className="font-bold">Team Member Name</div>
            <div className="text-sm text-gray-600">Position</div>
          </div>
        </div>
      </div>
      <img src="/src/assets/african-student.jpg" alt="Partner Collaboration" className="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-64 md:h-96 mb-6 md:mb-0" />
    </div>
  </div>
);

export default Partners;
