import  { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="section-heading">Contact Us</h2>
            <p className="mb-8 text-gray-700">
              Have questions about our programs or want to learn more about CBG II TVET School? 
              Get in touch with us using the contact information below or fill out the inquiry form.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="mb-6">
                <iframe
                  title="CBG II TVET School Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.123456789!2d29.250000!3d-1.700000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19ddf7b7b7b7b7b7%3A0x123456789abcdef!2sRubavu%2C%20Gisenyi%2C%20Rwanda!5e0!3m2!1sen!2srw!4v1680000000000!5m2!1sen!2srw"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: '0.5rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <MapPin className="h-6 w-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Our Location</h3>
                  <p className="text-gray-700">Rubavu, Gisenyi Sector, Rwanda</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Phone className="h-6 w-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-700">+250 78 XXX XXX</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Mail className="h-6 w-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-700">collegebaptistgacuba2@gmail.cm</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              
              <form>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your.email@example.com" 
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Inquiry about..." 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your message..." 
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
