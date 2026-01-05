import { Code2, Server, Layers, Database, Figma, Zap } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive, modern web applications using React.js, JavaScript/TypeScript, and Tailwind CSS with focus on performance and user experience.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Robust server-side applications with Node.js/Express.js and Spring Boot. RESTful API design, authentication, and business logic implementation.",
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description: "Complete end-to-end web solutions combining React.js frontend with Node.js or Spring Boot backend, seamlessly integrated for scalable applications.",
  },
  {
    icon: Database,
    title: "Database Design & Integration",
    description: "Database architecture and management with MySQL and MongoDB. Schema design, query optimization, and efficient data modeling for your applications.",
  },
  {
    icon: Figma,
    title: "Figma to Code Conversion",
    description: "Transforming design files into pixel-perfect, production-ready code with responsive layouts and modern CSS frameworks.",
  },
  {
    icon: Zap,
    title: "Portfolio & Landing Pages",
    description: "Custom portfolio websites and landing pages that showcase your brand effectively.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What I Offer
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            What I can do{" "}
            <span className="font-serif italic font-normal text-white">
              for you.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            I specialize in building modern web applications and turning ideas into reality. 
            Here's how I can help bring your project to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl hover:border-primary/50 border border-transparent transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in animation-delay-600">
          <p className="text-lg text-muted-foreground mb-4">
            Ready to start your project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 font-medium"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};
