import { ArrowDown, Sparkles, Github } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6 animate-fade-in-up">
              <Sparkles size={16} className="text-purple" />
              <span className="text-sm font-medium text-foreground/80">Open to New Adventures ✨</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Hello, I'm
              <br />
              <span className="gradient-text">
                <i className="fa-duotone fa-solid fa-user-graduate fa-spin fa-spin-reverse" style={{ "--fa-primary-color": "#B197FC", "--fa-secondary-color": "#B197FC" }}></i>
                Deepika R
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Aspiring Software Developer
            </h2>

            <p className="text-foreground/70 text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <a href="#projects" className="btn-primary inline-flex items-center justify-center gap-2">
                View Projects
                <ArrowDown size={18} />
              </a>
              <a 
                href="https://github.com/Deepika-R-hub" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline inline-flex items-center justify-center gap-2"
              >
                <Github size={18} />
                Let's Connect
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text">2+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text">MCA</div>
                <div className="text-sm text-muted-foreground">Pursuing</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border-2 border-primary/20 animate-pulse-glow" />
              <div className="absolute inset-4 w-[268px] h-[268px] md:w-[368px] md:h-[368px] rounded-full border-2 border-secondary/30" />
              
              {/* Gradient blob behind image */}
              <div className="absolute inset-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-50 blur-2xl animate-gradient-shift bg-200%" />
              
              {/* Profile Image Container */}
              <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-4 border-card shadow-2xl animate-scale-in">
                <img
                  src={profileImage}
                  alt="Deepika R - Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -right-4 top-1/4 glass px-4 py-2 rounded-xl animate-float shadow-lg">
                <span className="text-sm font-medium">React.js</span>
              </div>
              <div className="absolute -left-4 bottom-1/4 glass px-4 py-2 rounded-xl animate-float shadow-lg" style={{ animationDelay: "1s" }}>
                <span className="text-sm font-medium">Python</span>
              </div>
              <div className="absolute right-8 -bottom-2 glass px-4 py-2 rounded-xl animate-float shadow-lg" style={{ animationDelay: "2s" }}>
                <span className="text-sm font-medium">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
