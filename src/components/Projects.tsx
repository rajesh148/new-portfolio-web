import { Github, ExternalLink, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'DevMates - Developer Social Network',
      description: 'A MERN-stack based social networking platform for developers with real-time friend request notifications, interactive developer discovery system, and secure JWT authentication.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'JWT'],
      github: 'https://github.com/rajesh148/dev-mates-web',
      demo: 'https://github.com/rajesh148/devMates',
      featured: true
    },
    {
      id: 2,
      title: 'TATA NEU Progressive Web App',
      description: 'Built Progressive Web App using React.js and Redux Toolkit, improving Time-to-Interactive by 30% with modular, reusable components and optimized state management.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      tech: ['React.js', 'Redux Toolkit', 'PWA', 'JavaScript', 'Performance Optimization'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Story Editor with Performance Optimization',
      description: 'Responsive story editor built with React.js featuring performance optimizations like lazy loading, useMemo, and code splitting to reduce initial load time by 40%.',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop',
      tech: ['React.js', 'JavaScript', 'Performance Optimization', 'Code Splitting'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Unity 3D Mobile Games Collection',
      description: 'Developed multiple mobile games including Hoops Class, Kiddo Box, and Pool Champs using Unity 3D and C# with engaging gameplay mechanics and responsive design.',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop',
      tech: ['Unity 3D', 'C#', 'Mobile Game Development', 'Game Physics'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Scalable Content Portal',
      description: 'Developed a scalable content portal with React.js featuring comics, videos, pledges, badges, and certifications with optimized performance and wider reach.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop',
      tech: ['React.js', 'Content Management', 'Performance Optimization', 'Responsive Design'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Reusable UI Component Library',
      description: 'Developed comprehensive UI component library reducing duplicate code by 40% and accelerating project delivery by 30% across multiple projects at TCS.',
      image: 'https://images.unsplash.com/photo-1558655146-364adaa0b315?w=600&h=400&fit=crop',
      tech: ['React.js', 'Component Library', 'TypeScript', 'CSS Modules'],
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            UI/UX design, and modern web technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Star className="text-yellow-500" size={24} />
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <div 
                key={project.id}
                className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-border overflow-hidden card-hover fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary/70 rounded-lg transition-colors duration-300"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <div 
                key={project.id}
                className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-border overflow-hidden card-hover fade-in"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs text-muted-foreground">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm px-3 py-1.5 bg-secondary/50 hover:bg-secondary/70 rounded-lg transition-colors duration-300"
                    >
                      <Github size={14} />
                      Code
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-300"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
