'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import Interactive3DShowcase from '@/components/Interactive3DShowcase';
import Products from '@/components/Products';
import EditorialShowcase from '@/components/EditorialShowcase';
import WhyStarEggs from '@/components/WhyStarEggs';
import Distribution from '@/components/Distribution';
import Contact from '@/components/Contact';

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState('Grade-A Fresh White Table Eggs');

  const handleProductSelect = (productName) => {
    setSelectedProduct(productName);
  };

  return (
    <>
      <Hero />
      <Interactive3DShowcase />
      <Products onSelectProduct={handleProductSelect} />
      <EditorialShowcase />
      <WhyStarEggs />
      <Distribution />
      <Contact preselectedProduct={selectedProduct} />
    </>
  );
}
