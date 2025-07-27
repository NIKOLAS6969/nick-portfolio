const About = () => {
  return (
    <section id="about" className="py-24 bg-surface-elevated">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-text-primary mb-8">
              About Me
            </h2>

            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                I'm a passionate Computer Science student who believes in the
                power of clean, functional design. My approach combines
                technical expertise with a keen eye for aesthetics.
              </p>

              <p>
                As I deepen my knowledge in modern web technologies, I focus on
                creating digital solutions that are both beautiful and
                performant.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new design trends,
                reading about emerging technologies, or enjoying a good cup of
                coffee.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {[
              { label: "React & TypeScript", level: "95%" },
              { label: "UI/UX Design", level: "88%" },
              { label: "Node.js", level: "82%" },
              { label: "Mobile Dev", level: "75%" },
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-primary font-medium">
                    {skill.label}
                  </span>
                  <span className="text-text-tertiary">{skill.level}</span>
                </div>
                <div className="h-1 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-1000 ease-out"
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
