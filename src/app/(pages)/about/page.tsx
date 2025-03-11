'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';

export default function About() {
  const stats = useMemo(() => [
    { endNumber: 10, label: "Years of Excellence", suffix: "+" },
    { endNumber: 5000, label: "Happy Customers", suffix: "+" },
    { endNumber: 1000, label: "Products", suffix: "+" },
    { endNumber: 99, label: "Satisfaction Rate", suffix: "%" }
  ], []);

  const [counts, setCounts] = useState(stats.map(() => 0));

  const startCounting = useCallback(() => {
    const duration = 2000;
    const frameRate = 60;
    const totalFrames = (duration / 1000) * frameRate;

    stats.forEach((stat, index) => {
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.floor(progress * stat.endNumber);

        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          newCounts[index] = currentCount;
          return newCounts;
        });

        if (frame === totalFrames) {
          clearInterval(counter);
          setCounts(prevCounts => {
            const newCounts = [...prevCounts];
            newCounts[index] = stat.endNumber;
            return newCounts;
          });
        }
      }, 1000 / frameRate);
    });
  }, [stats]);

  useEffect(() => {
    startCounting();
  }, [startCounting, stats]);

  return (
    <div className="max-w-6xl mx-auto px-4 pt-8">
      {/* Hero Section */}
      <div className="relative py-12 mb-16 rounded-2xl overflow-hidden bg-gradient-to-r from-green-600 to-green-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Mega Trade</h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto px-4">
            Your trusted destination for high-quality products and exceptional service since 2010
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="mb-16">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
          Welcome to Mega Trade, where we believe in providing our customers with the finest quality products
          and an unmatched shopping experience. Our journey began with a simple vision: to revolutionize
          the way people shop for their daily needs.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {counts[i]}{stat.suffix}
            </div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Mission & Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-green-600">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To provide our customers with the highest quality products while maintaining excellent customer 
            service and competitive prices. We strive to create a shopping experience that exceeds expectations
            and builds lasting relationships with our customers.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-green-600">Our Values</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "Customer Satisfaction", icon: "🎯" },
              { value: "Quality Assurance", icon: "✨" },
              { value: "Integrity & Transparency", icon: "🤝" },
              { value: "Innovation", icon: "💡" }
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg transform transition-all duration-300 hover:bg-gray-100">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-gray-700 font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-green-800">Our Commitment</h2>
          <p className="text-gray-600 leading-relaxed">
            At Mega Trade, we&apos;re committed to sustainability, quality, and customer satisfaction. 
            We carefully select our products and partners to ensure we deliver only the best to our customers.
            Our team works tirelessly to maintain the highest standards in everything we do.
          </p>
        </div>
      </div>
    </div>
  );
} 