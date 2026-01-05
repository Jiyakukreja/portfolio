import { Code, Palette, Server, Smartphone, Search, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description:
      "End-to-end web application development using MERN stack, Next.js, and modern technologies.",
    features: ["React & Next.js", "Node.js & Express", "MongoDB & PostgreSQL"],
  },
  {
    icon: Palette,
    title: "UI/UX Design Implementation",
    description:
      "Converting designs into pixel-perfect, responsive, and accessible web interfaces.",
    features: ["Responsive Design", "Tailwind CSS", "Modern UI/UX"],
  },
  {
    icon: Server,
    title: "API Development",
    description:
      "Building robust RESTful APIs with authentication, validation, and proper documentation.",
    features: ["REST APIs", "Authentication", "Database Integration"],
  },
  {
    icon: Smartphone,
    title: "Responsive Web Apps",
    description:
      "Creating mobile-first applications that work seamlessly across all devices and screen sizes.",
    features: ["Mobile-First", "Cross-Browser", "Performance Optimized"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Enhancing application speed, SEO, and overall user experience through best practices.",
    features: ["Fast Loading", "SEO Friendly", "Code Optimization"],
  },
  {
    icon: Search,
    title: "Maintenance & Support",
    description:
      "Ongoing support, bug fixes, and feature enhancements for existing projects.",
    features: ["Bug Fixes", "Updates", "Technical Support"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Services &{" "}
            <span className="font-serif italic font-normal text-white">
              Expertise
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Comprehensive web development solutions tailored to bring your ideas
            to life with modern technologies and best practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="glass p-8 rounded-2xl border border-border hover:border-primary/40 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIdx) => (
                  <li
                    key={featureIdx}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-600">
          <p className="text-muted-foreground mb-4">
            Ready to start your project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};
