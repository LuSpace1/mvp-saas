import React from 'react';
import { Nav } from '../components/landing/Nav';
import { Hero } from '../components/landing/Hero';
import { Benefits } from '../components/landing/Benefits';
import { ProductShowcase } from '../components/landing/ProductShowcase';
import { HowItWorks } from '../components/landing/HowItWorks';
import { Plans } from '../components/landing/Plans';
import { Footer } from '../components/landing/Footer';

export const LandingPage = () => {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Benefits />
        <ProductShowcase />
        <HowItWorks />
        <Plans />
      </main>
      <Footer />
    </>
  );
};
