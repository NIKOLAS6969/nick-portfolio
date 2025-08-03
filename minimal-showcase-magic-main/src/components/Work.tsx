import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        " A modern, responsive approach using AI to create websites for barbershops, nail salons, and beauty services. Focused on frontend design, automation, and client interaction, showcasing the future of how websites are built with smart, efficient solutions. e-commerce solution built with React and Node.js. Features include user authentication, payment processing, and real-time inventory management.",
      image: project1,
      tags: ["AI", "Frontend", "Automation", "Client Interaction"],
      link: "#",
      github: "#",
      category: "AI Development",
    },
    {
      id: 2,
      title: "Mobile App",
      description:
        "Intuitive mobile banking interface focusing on user experience and security. Designed with modern UI principles and accessibility in mind.",
      image: project2,
      tags: ["AI", "Frontend", "Automation", "Client Interaction"],
      link: "#",
      github: "#",
      category: "AI Development",
    },
  ];

  return (
    <section
      id="work"
      className="py-32 bg-gradient-to-b from-background to-surface-elevated"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6"
          >
            <span className="text-primary text-sm font-medium">Portfolio</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-light text-text-primary mb-6">
            Featured
            <span className="block font-normal bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            A curated selection of projects that demonstrate my expertise in
            creating innovative digital solutions with cutting-edge
            technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`group relative ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl bg-surface-elevated shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Floating Action Buttons */}
                  <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <a
                      href={project.link}
                      className="p-3 bg-background/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.github}
                      className="p-3 bg-background/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-medium text-text-primary mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-text-primary uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 text-sm text-text-secondary bg-surface-elevated border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-primary rounded-lg hover:bg-surface-elevated transition-all duration-300 hover:scale-105"
                  >
                    Source Code
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
