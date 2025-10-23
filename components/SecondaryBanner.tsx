
import React from 'react';
import { Link } from 'react-router-dom';

export const SecondaryBanner: React.FC = () => {
  return (
    <section className="my-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="bg-brand-dark rounded-2xl shadow-lg overflow-hidden">
                <div className="text-center text-white py-20 px-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-lg">
                    Your Partner in Aquaculture Success
                    </h2>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
                    From pond preparation to harvest, we provide expert guidance and top-tier products. Explore our resources to elevate your farming practices.
                    </p>
                    <div className="mt-8">
                    <Link
                        to="/education"
                        className="inline-block bg-brand-secondary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-opacity-50"
                    >
                        Explore Knowledge Hub
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
