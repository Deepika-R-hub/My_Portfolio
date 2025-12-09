import { ExternalLink, Github } from "lucide-react";
import projectBrainMri from "@/assets/project-brain-mri.png";
import projectEmployee from "@/assets/project-employee.png";

const projects = [
  {
    title: "Brain MRI Classification",
    subtitle: "Deep Learning Research",
    description: "Preprocessed MRI data for feature extraction using pre-trained CNN models. Applied PCA for dimensionality reduction to improve classification accuracy.",
    tech: ["Python", "TensorFlow", "Scikit-learn", "NumPy"],
    image: projectBrainMri,
    gradient: "from-accent to-secondary",
  },
  {
    title: "Employee Management System",
    subtitle: "MERN Stack Application",
    description: "Developed comprehensive admin & employee portals featuring attendance tracking, leave management, salary operations, JWT authentication, REST APIs, and Excel export functionality.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "JWT"],
    image: projectEmployee,
    timeline: "Feb 2024 – Apr 2024",
    gradient: "from-primary to-secondary",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-purple uppercase tracking-wider">My Work</span>
          <h2 className="section-title mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A showcase of my recent work and technical explorations
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-20 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              {/* Left Side - Project Info */}
              <div className="flex-1 w-full">
                <div className="glass rounded-2xl p-8 border border-border/50 h-full">
                  {/* Timeline Badge */}
                  {project.timeline && (
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-accent/20 text-accent mb-4">
                      {project.timeline}
                    </span>
                  )}
                  
                  {/* Project Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 leading-tight">
                    {project.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-secondary font-medium text-lg mb-6">
                    {project.subtitle}
                  </p>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 text-sm font-medium rounded-full bg-muted/80 text-foreground border border-border/50 hover:bg-muted hover:border-secondary/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-secondary/50 text-foreground font-medium hover:bg-secondary/10 hover:border-secondary transition-all duration-300 group">
                    <ExternalLink size={18} />
                    <span>Learn More</span>
                  </button>
                </div>
              </div>

              {/* Right Side - Project Image */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  {/* Glow Effect */}
                  <div className={`absolute -inset-4 bg-gradient-to-r ${project.gradient} rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  {/* Image Container */}
                  <div className="relative rounded-2xl overflow-hidden border border-border/30 shadow-2xl">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Overlay with View Code Button */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                      <a 
                        href="https://github.com/Deepika-R-hub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all duration-300 shadow-lg"
                      >
                        <Github size={18} />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Coming */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-border/50">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-muted-foreground">More projects coming soon...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
