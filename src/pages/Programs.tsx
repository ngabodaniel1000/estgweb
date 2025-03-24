
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AnimatedSection from '../components/ui/AnimatedSection';

const Programs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 bg-estg-gray-light">
        <div className="container px-4">
          <AnimatedSection animation="slide-up" className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Academic Programs
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Discover our comprehensive range of undergraduate and graduate programs designed to prepare you for success in your chosen field.
            </p>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Programs Content - Placeholder, will be replaced with actual content */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container px-4">
          <AnimatedSection animation="fade-in" className="text-center">
            <p className="text-xl text-estg-blue">Programs Page Content Coming Soon</p>
          </AnimatedSection>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Programs;
