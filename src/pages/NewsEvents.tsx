import React from 'react';

const NewsEvents: React.FC = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-6 text-center">News & Events</h1>
    <div className="flex flex-col md:flex-row items-center gap-8">
      <img src="/src/assets/african-student.jpg" alt="African Student" className="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-64 md:h-96" />
      <div className="flex-1">
        <p className="text-lg mb-4">Stay updated with the latest news and upcoming events on campus. From academic conferences to cultural festivals, there’s always something happening!</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Annual Science Fair</li>
          <li>Guest lectures</li>
          <li>Sports tournaments</li>
          <li>Community outreach</li>
        </ul>
      </div>
    </div>
  </div>
);

export default NewsEvents;
