import { Code2, Database, Palette, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Web Development",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript"],
    color: "primary",
  },
  {
    title: "Frameworks",
    icon: Wrench,
    skills: ["React.js", "Node.js", "Django"],
    color: "secondary",
  },
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python"],
    color: "accent",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["SQL", "MongoDB"],
    color: "purple",
  },
  {
    title: "Design Tools",
    icon: Palette,
    skills: ["Canva", "Figma", "MS Office Suite"],
    color: "pink",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-purple uppercase tracking-wider">What I know</span>
          <h2 className="section-title mt-2">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 transition-all duration-500 hover:scale-[1.03] hover:shadow-xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-xl mb-4 transition-all duration-300 ${
                category.color === "primary" ? "bg-primary/20 group-hover:bg-primary/30" :
                category.color === "secondary" ? "bg-secondary/30 group-hover:bg-secondary/40" :
                category.color === "accent" ? "bg-accent/20 group-hover:bg-accent/30" :
                category.color === "purple" ? "bg-purple/20 group-hover:bg-purple/30" :
                "bg-pink/20 group-hover:bg-pink/30"
              }`}>
                <category.icon size={24} className="text-foreground" />
              </div>

              <h3 className="text-lg font-bold mb-4">{category.title}</h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`skill-badge cursor-default ${
                      category.color === "primary" ? "border-primary/30 bg-primary/10 hover:border-primary hover:bg-primary/20" :
                      category.color === "secondary" ? "border-secondary/50 bg-secondary/20 hover:border-secondary hover:bg-secondary/30" :
                      category.color === "accent" ? "border-accent/30 bg-accent/10 hover:border-accent hover:bg-accent/20" :
                      category.color === "purple" ? "border-purple/30 bg-purple/10 hover:border-purple hover:bg-purple/20" :
                      "border-pink/30 bg-pink/10 hover:border-pink hover:bg-pink/20"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All Skills Tags */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">All technologies at a glance</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Django", "Python", "SQL", "MongoDB", "Canva", "Figma", "MS Office"].map((skill, index) => (
              <span
                key={index}
                className="px-5 py-2.5 rounded-full text-sm font-medium border border-border bg-card/50 text-foreground/80 hover:border-primary hover:text-foreground transition-all duration-300 cursor-default hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
