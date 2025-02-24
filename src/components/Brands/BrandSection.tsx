import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Activity, Utensils, BookOpen } from 'lucide-react';

interface BrandCardProps {
  icon: typeof Building2;
  title: string;
  description: string;
  services: string[];
  image?: string;
}

function BrandCard({ icon: Icon, title, description, services, image }: BrandCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-black/80 border-2 border-green-400/30 rounded-lg p-6 hover:border-green-400 transition-all"
    >
      <div className="flex items-start gap-4 mb-4">
        {image ? (
          <img src={image} alt={title} className="w-12 h-12 object-contain" />
        ) : (
          <Icon className="w-8 h-8 text-green-400 mt-1" />
        )}
        <div>
          <h3 className="text-xl font-mono font-bold text-green-400">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-green-400 font-mono">Services Provided:</p>
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-300">
              <span className="text-green-400">›</span>
              {service}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function BrandSection() {
  const brands = [
    {
      icon: Activity,
      title: "The Applied Physio",
      description: "Leading physiotherapy clinic in Durgapur",
      services: [
        "Full-stack web application development",
        "Online appointment scheduling",
      ]
    },
    {
      icon: GraduationCap,
      title: "Mankar College",
      description: "Premier educational institution in West Bengal",
      services: [
        "Departmental Website implementation",
        "SEO Optimization",
      ]
    },
    // {
    //   icon: Utensils,
    //   title: "Dhanilanka Restaurant",
    //   description: "Popular restaurant in Durgapur",
    //   services: [
    //     "Restaurant website development",
    //     "Online menu management",
    //     "Order tracking system",
    //     "Customer feedback portal"
    //   ]
    // },
    // {
    //   icon: BookOpen,
    //   title: "Pankaj TD Bull",
    //   description: "Educational trading platform",
    //   services: [
    //     "Course management system",
    //     "Website maintenance",
    //     "Student progress tracking",
    //     "Content delivery platform"
    //   ]
    // }
  ];

  return (
    <section className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-mono font-bold text-green-400 mb-4">
            Trusted By Brands
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Delivering innovative digital solutions to businesses and institutions across West Bengal
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brands.map((brand) => (
            <BrandCard key={brand.title} {...brand} />
          ))}
        </div>
      </div>
    </section>
  );
}