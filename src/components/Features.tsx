"use client"
import React from 'react';
import { FaUsers, FaChartLine } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const features = [
  {
    name: 'AI-Powered Assistance',
    description:
      'Leverage artificial intelligence to automate tasks, get smart suggestions, and enhance your workflow.',
    icon: <HiSparkles className="h-4 w-4 text-indigo-500" />,
    color: 'bg-indigo-50',
  },
  {
    name: 'Team collaboration',
    description:
      'Work seamlessly with your team members, share resources, and communicate effectively in real-time.',
    icon: <FaUsers className="h-4 w-4 text-emerald-500" />,
    color: 'bg-emerald-50',
  },
  {
    name: 'Insightful analytics',
    description:
      'Make data-driven decisions with comprehensive analytics and reporting features.',
    icon: <FaChartLine className="h-4 w-4 text-rose-500" />,
    color: 'bg-rose-50',
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage your projects
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Harness the power of AI to streamline your project management workflow
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="relative group">
              <div className="relative p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition duration-200">
                <div className={`flex items-center justify-center w-10 h-10 mb-4 ${feature.color} rounded-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.name}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;