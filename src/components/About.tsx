import { Code, Database, Globe, Smartphone, Server, Zap } from 'lucide-react';

const About = () => {
  const techStack = [
    { name: 'React.js', icon: '⚛️', category: 'Frontend' },
    { name: 'Redux Toolkit', icon: '🟣', category: 'State Management' },
    { name: 'JavaScript (ES6+)', icon: '🟨', category: 'Language' },
    { name: 'HTML5', icon: '🧡', category: 'Frontend' },
    { name: 'CSS3', icon: '💙', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: '🎨', category: 'Styling' },
    { name: 'Node.js', icon: '💚', category: 'Backend' },
    { name: 'Express.js', icon: '⚡', category: 'Backend' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'Unity 3D', icon: '🎮', category: 'Game Dev' },
    { name: 'C#', icon: '💜', category: 'Language' },
    { name: 'Git & GitHub', icon: '📝', category: 'Tools' },
  ];

  const features = [
    {
      icon: <Code size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code following best practices.'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Responsive Design',
      description: 'Creating beautiful interfaces that work seamlessly across all devices and screen sizes.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and excellent user experience.'
    },
    {
      icon: <Server size={24} />,
      title: 'Full Stack',
      description: 'End-to-end development from database design to user interface implementation.'
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            IT Analyst at Tata Consultancy Services with 5+ years of experience in React.js, 
            MERN stack development, and performance optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Bio Section */}
          <div className="space-y-6 fade-in">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm currently working as an IT Analyst at Tata Consultancy Services, where I build 
              scalable web applications and PWAs using React.js and the MERN stack. My expertise 
              includes performance optimization, code splitting, and creating reusable UI components.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I have successfully reduced code duplication by 40% and improved application load times 
              by 40% through optimizations like lazy loading, useMemo, and code splitting. I also 
              have experience in Unity 3D game development and have built multiple mobile games.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about mentoring junior developers and have earned certifications in 
              React.js, Node.js, and Data Structures & Algorithms. I've been recognized with Team 
              Sports and Spark Awards for my contributions.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6 fade-in">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="fade-in">
          <h3 className="text-2xl font-semibold text-center mb-12">Technologies I Work With</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <div 
                key={tech.name}
                className="tech-icon text-center group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h4 className="font-medium text-sm">{tech.name}</h4>
                <p className="text-xs text-muted-foreground">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;