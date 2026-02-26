import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "Python",
    "Java",
    "TypeScript",
    "JavaScript",
    "C#",
    "C++",
  ];

  const backendSkills = ["Unity", "PostgreSQL", "Prisma", "AWS", "MongoDB", "Linux","Next.js","React", "Vercel", "Git",];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate Computer Science graduate with a strong foundation in data analysis, AI and development. 
              Dedicated to turning complex data into meaningful insights and building solutions that drive real-world impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Baschelor of Computer Science </strong> - University of Wollongong
                  (2023-2026)
                </li>
                <li>
                  <strong> Diploma in Management Studies </strong> - Singapore Institute of Management
                  (2019-2020)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Professional Experience </h3>
              <div className="space-y-4 text-gray-300">
  <div>
    <strong>Data Analytics Project</strong> - TalentLink Polaris Industry Masterclass
    <br />
    <span className="text-sm text-gray-400">(December 2024)</span>
  </div>

  <div>
    <strong>Ethical Hacking Workshop</strong> - CENTRE for Micro-Credentials
    <br />
    <span className="text-sm text-gray-400">(March 2025)</span>
  </div>

  <div>
    <strong>AWS Certified AI Practitioner</strong> - Amazon Web Services (AWS)
    <br />
    <span className="text-sm text-gray-400">(July 2025)</span>
    <p className="text-sm">Certification</p>
  </div>
</div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
