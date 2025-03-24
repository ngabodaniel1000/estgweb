import React, { useState, useEffect } from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const stats = [
  { value: '35+', label: 'Years of Excellence' },
  { value: '8,500+', label: 'Students' },
  { value: '250+', label: 'Expert Faculty' },
  { value: '95%', label: 'Employment Rate' },
];

const About = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <AnimatedSection animation="fade-in" className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="ESTG Campus"
                className={`w-full h-full object-cover aspect-[4/3] ${loaded ? 'loaded' : 'lazy-load'}`}
              />
            </div>
          </AnimatedSection>
          
          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <AnimatedSection animation="slide-up">
              <h2 className="section-heading mb-6">About ESTG</h2>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={200}>
              <p className="text-lg text-muted-foreground mb-6">
                Since 1985, Escola Superior de Tecnologia e Gestão (ESTG) has been at the forefront of technical and management education in Portugal, nurturing talent and driving innovation.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={400}>
              <p className="text-muted-foreground mb-8">
                Our mission is to provide transformative education that equips students with the knowledge, skills, and values needed to succeed in a rapidly evolving global landscape. Through a blend of theoretical learning and practical experience, we prepare our graduates to be innovative problem-solvers and responsible leaders.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={600}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-display font-bold text-estg-blue mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={800}>
              <Button>
                Learn More About Us
                <ArrowRight size={18} />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
