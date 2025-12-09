import { GraduationCap, Quote, Briefcase } from "lucide-react";

const educationData = [
  {
    degree: "MCA",
    institution: "SASTRA Deemed University, Thanjavur",
    year: "2024–2026",
    grade: "CGPA: 6.85 (up to 2nd semester)",
    current: true,
  },
  {
    degree: "B.Sc Computer Science",
    institution: "Bishop Heber College, Trichy",
    year: "2021–2024",
    grade: "CGPA: 7.8",
    current: false,
  },
  {
    degree: "HSC",
    institution: "Jawahar Matric HSS, Neyveli",
    year: "2020–2021",
    grade: "Percentage: 79%",
    current: false,
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-purple uppercase tracking-wider">Get to know me</span>
          <h2 className="section-title mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Bio */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8">
              <p className="text-foreground/80 leading-relaxed text-lg">
          
Enthusiastic and detail-oriented MCA student with strong foundations in computer science, programming, and software development. Experienced in developing web applications and contributing to deep learning research projects involving MRI data and CNN models. Strong problem-solving abilities with a consistent focus on learning and innovation. Committed to delivering impactful, real-world solutions through thoughtful and efficient development.

              </p>
            </div>

            {/* Quote */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-primary/30">
                <Quote size={48} />
              </div>
              <div className="glass rounded-2xl p-8 pl-12 border-l-4 border-primary">
                <p className="text-xl font-medium italic gradient-text">
                  "Always learning. Always building."
                </p>
              </div>
            </div>

            {/* Work Status */}
            <div className="glass rounded-2xl p-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-accent/20">
                <Briefcase className="text-accent-foreground" size={24} />
              </div>
              <div>
                <h4 className="font-semibold">Work Experience</h4>
                <p className="text-muted-foreground">Fresher - Open to opportunities</p>
              </div>
            </div>
          </div>

          {/* Right - Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-secondary/30">
                <GraduationCap className="text-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent rounded-full" />

              <div className="space-y-8">
                {educationData.map((edu, index) => (
                  <div key={index} className="relative pl-16">
                    {/* Timeline dot */}
                    <div className={`absolute left-4 w-4 h-4 rounded-full border-2 ${
                      edu.current 
                        ? "bg-primary border-primary animate-pulse-glow" 
                        : "bg-card border-secondary"
                    }`} />

                    <div className={`glass rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] ${
                      edu.current ? "border-2 border-primary/30" : ""
                    }`}>
                      {edu.current && (
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-foreground mb-3">
                          Currently Pursuing
                        </span>
                      )}
                      <h4 className="text-lg font-bold">{edu.degree}</h4>
                      <p className="text-muted-foreground mt-1">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 mt-3 text-sm">
                        <span className="text-purple font-medium">{edu.year}</span>
                        <span className="text-accent font-medium">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
