import  { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Background from './components/Background';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import NotFound from './pages/NotFound';
import AcademicPrograms from './pages/AcademicPrograms';
import Incubator from './pages/Incubator';
import StudentLife from './pages/StudentLife';
import Admissions from './pages/Admissions';
import NewsEvents from './pages/NewsEvents';
import Partners from './pages/Partners';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="flex w-full h-screen items-center justify-center flex-col space-y-3 p-2">
        <span className="loader" />
        <div className="text-base font-semibold">
          Loading CBG II TVET School Website...
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <Background />
      <div className="content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/academic-programs" element={<AcademicPrograms />} />
          <Route path="/incubator" element={<Incubator />} />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/news" element={<NewsEvents />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
