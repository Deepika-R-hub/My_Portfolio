import { Code, Layout, Server, Palette, Rocket, Sparkles } from "lucide-react";

const services = [
  {
    title: "MERN Stack Development",
    description: "Building full-stack web applications with MongoDB, Express, React, and Node.js",
    icon: Code,
    available: true,
  },
  {
    title: "Python (Django) Developer",
    description: "Developing robust backend applications and REST APIs with Django framework",
    icon: Layout,
    available: true,
  },
  {
    title: "AI/ML Engineer",
    description: "Exploring machine learning models and AI-powered applications",
    icon: Server,
    available: false,
    label: "Entry Level",
  },
  {
    title: "Data Analyst",
    description: "Transforming raw data into actionable insights using analytical tools and techniques",
    icon: Palette,
    available: false,
    label: "Entry Level",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-purple uppercase tracking-wider">What I offer</span>
          <h2 className="section-title mt-2">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Currently exploring opportunities and open to collaboration in
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-6 transition-all duration-500 hover:scale-[1.02] group relative overflow-hidden ${
                !service.available ? "opacity-80" : ""
              }`}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon size={24} className="text-foreground" />
                  </div>
                  {service.label && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/20 text-foreground">
                      {service.label}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Rocket className="text-purple" size={24} />
              <Sparkles className="text-primary" size={20} />
            </div>
            <h3 className="text-xl font-bold mb-2">Let's Work Together!</h3>
            <p className="text-muted-foreground mb-6">
              I'm eager to collaborate on exciting projects and learn from experienced professionals.
            </p>
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              Get In Touch
              <Sparkles size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
