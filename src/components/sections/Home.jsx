import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Hi, I’m Lee Chaehyeon
          </h1>

          <p className="text-xl md:text-2xl font-semibold text-white mb-6">
            Interpreter, Cloud Engineer and Full-Stack Developer
          </p>

          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Computer Science graduate based in Singapore. I support live events and projects as an interpreter 
            while building serverless, full-stack applications on AWS, turning real-world problems 
            from my own work into practical systems that are deployed and used.

          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-400 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/10"
            >
              Contact me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};