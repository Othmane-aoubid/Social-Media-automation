import { CalendarDays, Hash, BarChart3, Brain, Users, Share2 } from 'lucide-react';

const features = [
  {
    title: 'AI-Powered Content Creation',
    description: 'Generate engaging posts with our advanced AI algorithms.',
    icon: Brain,
  },
  {
    title: 'Multi-Platform Scheduling',
    description: 'Schedule posts across multiple social media platforms effortlessly.',
    icon: Share2,
  },
  {
    title: 'Analytics Dashboard',
    description: 'Track your social media performance with detailed analytics.',
    icon: BarChart3,
  },
  {
    title: 'Automated Hashtag Suggestions',
    description: 'Get relevant hashtag suggestions to increase your post visibility.',
    icon: Hash,
  },
  {
    title: 'Content Calendar',
    description: 'Plan and visualize your content strategy with an intuitive calendar view.',
    icon: CalendarDays,
  },
  {
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team members on content creation and scheduling.',
    icon: Users,
  },
];

export default function Features() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your social media presence effectively
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}