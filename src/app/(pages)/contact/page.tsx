export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 hover:text-green-600 transition-colors">
        Get in Touch
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(0,128,0,0.12)] transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send us a Message</h2>
          <form className="space-y-6" action="/api/contact" method="POST">
            <div className="group">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-all duration-300 hover:border-green-400"
                placeholder="Your name"
                required
              />
            </div>
            <div className="group">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-all duration-300 hover:border-green-400"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="group">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-all duration-300 hover:border-green-400"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transform hover:scale-[1.02] transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] space-y-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h2>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Email</p>
                <p className="text-base font-medium text-gray-800 group-hover:text-green-600 transition-colors">contact@megatrade.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Phone</p>
                <p className="text-base font-medium text-gray-800 group-hover:text-green-600 transition-colors">(555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Address</p>
                <p className="text-base font-medium text-gray-800 group-hover:text-green-600 transition-colors">123 Trade Street, Business City, ST 12345</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Business Hours</h3>
            <div className="space-y-2 text-gray-600">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 