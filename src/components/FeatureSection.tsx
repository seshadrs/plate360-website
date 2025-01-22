import React, { useState, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureSectionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageUrls: string[];
  reverse?: boolean;
}

export function FeatureSection({ icon: Icon, title, description, imageUrls, reverse = false }: FeatureSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [imageUrls.length]);

  return (
    <div className={`flex items-center gap-12 py-16 max-w-md max-w-[1500px] mx-auto ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className="flex-1 space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100">
          <Icon className="w-6 h-6 text-indigo-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
      <div className="flex-1">
        <div className="aspect-[2/3] rounded-3xl overflow-hidden shadow-2xl max-w-md max-h-[700px] mx-auto">
          <img src={imageUrls[currentImageIndex]} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}