import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    title: "Event Archive",
    description:
      "Serverless full-stack web app that archives my 60+ live event interpreting records and automatically generates pay slips. Includes secure login and an admin dashboard with role-based access.",
    tech: ["React", "Vite", "AWS Lambda", "Python", "DynamoDB", "API Gateway", "Cognito", "S3", "CloudFront"],
    link: "https://d36v50o7fa29wk.cloudfront.net",
  },
  {
    title: "E-Commerce Web App",
    description:
      "Full-stack e-commerce with modern UI, AI-powered recommendations, secure payment integration, product sorting and customizable product inventory.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Gemini API"],
    link: "https://e-commerce-nine-tan-58.vercel.app/",
  },
  {
    title: "Travel Planner App",
    description:
      "Full-stack travel planning app with trip management, interactive maps, photo galleries and social integration features.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "Google Maps API", "UploadThing", "Tailwind CSS"],
    link: "https://travel-planner-gold.vercel.app/",
  },
  {
    title: "Mobile Controller App",
    description:
      "Wireless smartphone game controller with customizable layouts, gyroscopic motion controls and low-latency networking.",
    tech: ["Java", "C#", "Android Studio"],
    link: "https://mobcontrolfyp.netlify.app/",
  },
  {
    title: "VR Escape Room Game",
    description:
      "VR game where players use VR controllers to move objects and solve puzzles to escape the room.",
    tech: ["Unity", "C#"],
    link: "https://drive.google.com/drive/folders/1dvkZZ6ch0rbfI9eGZYZWyGCGnJzemUrd?usp=drive_link",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-6 rounded-xl border border-white/10 transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="mt-auto pt-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                  View project →
                </span>
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};