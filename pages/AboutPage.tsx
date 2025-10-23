import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-sm dark:bg-gray-800/95 rounded-2xl shadow-lg max-w-5xl mx-auto p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-brand-dark dark:text-brand-light sm:text-5xl md:text-6xl">
              About Redex Aqua Solutions
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
              Pioneering a sustainable future for aquaculture through innovation and partnership.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-lg text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                <strong>Redex Aqua Solutions</strong> was founded with a singular goal: to empower prawn farmers with the highest quality products and knowledge needed to thrive. In an industry facing constant challenges, from water quality to disease management, we believe that success comes from a foundation of scientific innovation, sustainable practices, and a deep understanding of the farmer's needs.
              </p>
              <p>
                We are more than just a supplier; we are a partner in your cultivation journey. Our team comprises aquaculture experts, nutritionists, and researchers dedicated to developing solutions that not only improve yield but also promote the long-term health of your farm's ecosystem.
              </p>
            </div>

            <div className="p-8 bg-brand-light bg-opacity-50 dark:bg-brand-dark/30 rounded-lg">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Our Mission</h2>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                To be the most trusted provider of aqua solutions by delivering scientifically-backed, effective, and sustainable products that enhance the productivity and profitability of prawn farmers, ensuring a healthy aquatic environment for generations to come.
              </p>
            </div>

            <div className="text-lg text-gray-700 dark:text-gray-300 space-y-4">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Our Commitment to Farmers</h2>
              <p>
                Your success is our success. We are committed to providing you with not only premium feeds, probiotics, and health supplements, but also the support and guidance you need. We understand the hard work that goes into every harvest, and we stand by our promise to offer reliable products, transparent information, and a partnership built on trust and mutual respect. The sentiment, <span className="font-semibold italic">"రైతు బాగుంటేనే మనం బాగుంటాము" (If the farmer is well, we are well)</span>, is at the core of our business philosophy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};