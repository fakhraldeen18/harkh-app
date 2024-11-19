import React from 'react';

interface PricingCardProps {
  plan: string;
  price: number;
  features: string[];
  isCurrent: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, price, features, isCurrent }) => {
  return (
    <div className={`border rounded-lg p-6 shadow-md text-center ${isCurrent ? 'border-blue-500' : 'border-gray-300'}`}>
      <h3 className="text-2xl font-semibold mb-2">{plan}</h3>
      <p className="text-gray-500 mb-4">
        {price === 0 ? 'Free' : `$${price} / member / month`}
      </p>
      <button
        className={`w-full py-2 px-4 rounded-md mb-4 ${isCurrent ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
      >
        {isCurrent ? 'Current' : 'Upgrade'}
      </button>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2">✅</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
