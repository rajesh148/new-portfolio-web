import { Download, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm <span className="gradient-text">Rajesh Bagguva</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
                IT Analyst | MERN Stack | React.js Specialist
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Building scalable, responsive web applications and PWAs with
                expertise in React.js, Node.js, and MongoDB. Currently at Tata
                Consultancy Services with 5+ years in full-stack development.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-hero inline-flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href="https://github.com/rajesh148"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-card/80 hover:scale-110 transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rajesh-bagguva-67b197158/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-card/80 hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:rajeshbagguvaiiitn@gmail.com"
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-card/80 hover:scale-110 transition-all duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-primary to-accent p-1 float-animation">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={heroImage}
                    alt="Rajesh Bagguva - Frontend Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
