import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$29',
    features: [
      '5 social accounts',
      '50 scheduled posts',
      'Basic analytics',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: '$79',
    features: [
      '15 social accounts',
      'Unlimited scheduled posts',
      'Advanced analytics',
      'Priority support',
      'AI-powered content suggestions',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$199',
    features: [
      'Unlimited social accounts',
      'Unlimited scheduled posts',
      'Custom analytics',
      'Dedicated account manager',
      'API access',
      'White-label solution',
    ],
  },
];

const Pricing = () =>{
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing</h2>
          <p className="text-lg text-gray-600">Choose the perfect plan for your needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 bg-white border ${
                plan.popular ? 'border-blue-500 shadow-lg scale-105' : 'border-gray-200'
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <div className="mt-4 flex items-baseline text-gray-900">
                <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                <span className="ml-1 text-lg text-gray-500">/mo</span>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-blue-500 shrink-0" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-2 px-4 rounded-lg text-white font-medium ${
                  plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;