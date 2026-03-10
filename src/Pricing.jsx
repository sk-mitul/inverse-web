import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "5.00",
    features: ["5 Social Media Account", "Free Platform Access", "24/7 Customer Support"],
    featured: false
  },
  {
    name: "Basic",
    price: "230.00",
    features: ["5 Social Media Account", "Free Platform Access", "Marketing Platform", "24/7 Customer Support", "Life time support"],
    featured: true
  },
  {
    name: "Premium",
    price: "45.00",
    features: ["5 Social Media Account", "Free Platform Access", "24/7 Customer Support"],
    featured: false
  }
];

const PricingCard = ({ plan }) => (
  <div className={`relative group w-full ${plan.featured ? 'lg:-mt-8 lg:mb-8' : ''}`}>
    {/* Red Bottom-Right Shadow Effect */}
    <div className="card-effect" />
    
    {/* Main Card Content */}
    <div className={`relative h-full p-6 rounded-[20px] bg-wild-sand border border-wild-sand flex flex-col transition-transform duration-300 group-hover:-translate-y-1`}>
      <div className="mb-8 text-chinese-black">
        <h3 className="font-bold text-[18px] leading-6.75 mb-4">{plan.name}</h3>
        <div className="font-bold text-[48px] leading-15">$ {plan.price}</div>
        <p className="font-bold text-[18px] leading-6.75 mt-1.25 mb-0.5">Per Month</p>
      </div>

      <ul className="space-y-4 pt-13.75 pb-7">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3.75 text-black-coral font-rubik text-[16px]">
            <div className="bg-red-500 rounded-full p-1 shrink-0">
              <Check size={12} className="text-white" strokeWidth={4} />
            </div>
            {feature}
          </li>
        ))}
      </ul>

      <button className={`btn
        ${plan.featured 
          ? 'bg-red-500 text-white border-transparent hover:bg-gray-900' 
          : 'bg-transparent text-gray-900 border-gray-200 hover:border-red-500 hover:text-red-500'}`}>
        Get Started <ArrowRight size={18} />
      </button>
    </div>
  </div>
);

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-326.25 px-3.75 lg:pt-22.5 py-7.5">
      {/* Header */}
      <div className="text-center mb-5 mt-7.5">
        <span className="text-tomato font-rubik font-medium uppercase tracking-[1px] leading-7 text-[16px]">
          My Price Plan
        </span>
        <h2 className="text-[22px] md:text-[48px] font-bold text-chinese-black mt-[4.4px] leading-[30.8px] md:leading-15">
          Enhancing Collaboration <br className="hidden md:block" /> between Remote
        </h2>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch pt-7.5">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </section>
  );
}
export default Pricing;