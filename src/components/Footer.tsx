import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Globe, Youtube, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

// WhatsApp icon as SVG (since lucide-react does not export Whatsapp)
const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16.72 13.06a4.72 4.72 0 0 1-2.06-.56c-.32-.16-.7-.36-1.1-.6-.36-.22-.6-.36-.86-.6-.26-.24-.44-.5-.62-.8-.18-.3-.3-.6-.36-.86-.06-.26-.06-.5-.06-.7 0-.2.02-.38.06-.54.04-.16.1-.3.18-.44.08-.14.18-.26.3-.36.12-.1.26-.18.42-.24.16-.06.34-.1.54-.1.2 0 .38.02.54.06.16.04.3.1.44.18.14.08.26.18.36.3.1.12.18.26.24.42.06.16.1.34.1.54 0 .2-.02.38-.06.54-.04.16-.1.3-.18.44-.08.14-.18.26-.3.36-.12.1-.26.18-.42.24-.16.06-.34.1-.54.1-.2 0-.38-.02-.54-.06-.16-.04-.3-.1-.44-.18-.14-.08-.26-.18-.36-.3-.1-.12-.18-.26-.24-.42-.06-.16-.1-.34-.1-.54 0-.2.02-.38.06-.54.04-.16.1-.3.18-.44.08-.14.18-.26.3-.36.12-.1.26-.18.42-.24.16-.06.34-.1.54-.1.2 0 .38.02.54.06.16.04.3.1.44.18.14.08.26.18.36.3.1.12.18.26.24.42.06.16.1.34.1.54 0 .2-.02.38-.06.54-.04.16-.1.3-.18.44-.08.14-.18.26-.3.36-.12.1-.26.18-.42.24-.16.06-.34.1-.54.1z" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">CBG II TVET School</h3>
            <p className="mb-4 text-blue-200">Providing quality technical education and empowering students to become leaders in their fields.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                <WhatsappIcon className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-blue-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-blue-200 hover:text-white transition-colors">Academic Programs</Link></li>
              <li><Link to="/admissions" className="text-blue-200 hover:text-white transition-colors">Admissions</Link></li>
              <li><Link to="/news" className="text-blue-200 hover:text-white transition-colors">News & Events</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li><Link to="/programs" className="text-blue-200 hover:text-white transition-colors">ICT and Multimedia</Link></li>
              <li><Link to="/programs" className="text-blue-200 hover:text-white transition-colors">Accounting</Link></li>
              <li><Link to="/programs" className="text-blue-200 hover:text-white transition-colors">O'Level Education</Link></li>
              <li><Link to="/incubator" className="text-blue-200 hover:text-white transition-colors">Innovation Incubator</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-300 mt-0.5" />
                <span className="text-blue-200">Rubavu, Gisenyi Sector, Rwanda</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-300" />
                <span className="text-blue-200">+250 78 XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-300" />
                <span className="text-blue-200">collegebaptistgacuba2@gmail.cm</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-blue-300" />
                <span className="text-blue-200">collegebaptistgacuba2@gmail.cm</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300 text-sm">
          <p>&copy; {new Date().getFullYear()} CBG II TVET School. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
