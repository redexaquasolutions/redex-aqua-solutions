import React, { useState } from 'react';

export const ContactPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let message = 'Thank you for your message! We will get back to you soon.';
    if (file) {
      message += `\n\n(Your file "${file.name}" was included for review.)`;
    }
    alert(message);
    (e.target as HTMLFormElement).reset();
    setFile(null);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-brand-dark dark:text-brand-light">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">We'd love to hear from you. Reach out with any questions or inquiries.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/95 backdrop-blur-sm dark:bg-gray-800/95 p-8 rounded-2xl shadow-lg">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-brand-primary mb-6">Get in Touch</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-brand-secondary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>Plot No 7/A, Golden Tulip Estates, Kondapur, Hyderabad</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
               <svg className="w-6 h-6 text-brand-secondary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>redexaquasolutions@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-brand-secondary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>9493340492 / 9246241777</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
           <h2 className="text-2xl font-bold text-brand-primary mb-6">Send a Message</h2>
           <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" name="name" id="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Your Name" />
              </div>
               <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Your Email" />
              </div>
               <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea name="message" id="message" rows={5} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Your Message"></textarea>
              </div>
               <div>
                <label htmlFor="file-upload" className="w-full cursor-pointer bg-white text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:border-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                  <span>Attach a File</span>
                </label>
                <input 
                  id="file-upload" 
                  name="file-upload" 
                  type="file" 
                  className="sr-only" 
                  onChange={handleFileChange}
                />
                {file && <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">Selected: {file.name}</p>}
              </div>
              <div>
                <button type="submit" className="w-full bg-brand-secondary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
                  Submit
                </button>
              </div>
           </form>
        </div>
      </div>
    </div>
  );
};