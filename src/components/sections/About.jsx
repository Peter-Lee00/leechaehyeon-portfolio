import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const skillGroups = [
    {
      title: "Languages",
      skills: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "C#", "C++"],
    },
    {
      title: "AWS Cloud",
      skills: ["Lambda", "DynamoDB", "API Gateway", "Cognito", "S3", "CloudFront", "CloudFormation"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Kubernetes", "Ansible", "Kafka", "Linux", "Git", "Vercel"],
    },
    {
      title: "Frameworks & Databases",
      skills: ["React", "Next.js", "FastAPI", "Unity", "PostgreSQL", "Prisma", "MongoDB"],
    },
  ];

  const experience = [
    {
      role: "Live Event Interpreter & Production Coordinator",
      org: "Concerts & Fan Meetings",
      period: "",
      detail:
        "Interpreted and coordinated on-site operations for 60+ large-scale live shows. Reviewed artist riders and aligned requirements between artist management and local promoters under tight timelines.",
    },
    {
      role: "Data Analytics Trainee",
      org: "TalentLink Polaris Industry Masterclass",
      period: "Dec 2024",
      detail: "Built a Random Forest prediction model (AUC 0.85) using Python, SQL and Pandas.",
    },
  ];

  const education = [
    {
      title: "Bachelor of Computer Science",
      org: "University of Wollongong",
      period: "2023 – 2026",
    },
    {
      title: "Diploma in Management Studies",
      org: "Singapore Institute of Management",
      period: "2019 – 2020",
    },
  ];

  const certifications = [
    { title: "AWS Certified Solutions Architect – Associate", org: "SAA-C03" },
    { title: "AWS Certified AI Practitioner", org: "Amazon Web Services" },
    { title: "AWS Certified Cloud Practitioner", org: "Amazon Web Services" },
    { title: "Ethical Hacking Workshop", org: "CENTRE for Micro-Credentials" },
  ];

  const Entry = ({ title, org, period, detail }) => (
    <div className="border-l-2 border-blue-500/40 pl-4">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h4 className="font-semibold text-white">{title}</h4>
        {period && <span className="text-sm text-gray-500">{period}</span>}
      </div>
      <p className="text-sm text-gray-400">{org}</p>
      {detail && <p className="text-sm text-gray-300 mt-2 leading-relaxed">{detail}</p>}
    </div>
  );

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Intro + skills */}
          <div className="rounded-xl p-8 border border-white/10">
            <p className="text-gray-300 mb-4 leading-relaxed">
              Computer Science graduate and AWS Certified Solutions Architect – Associate, focused on cloud
              and serverless engineering. I design, build and deploy full-stack applications on AWS — most
              recently Event Archive, a serverless app that automates pay slips for my live event
              interpreting work.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Fully bilingual in English and Korean, I bring experience from 60+ live shows coordinating
              between artist teams and promoters under tight timelines — the same skills I apply to working
              with stakeholders on technical projects.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-semibold text-gray-200 mb-3">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="rounded-xl p-8 border border-white/10 mt-6">
            <h3 className="text-xl font-bold mb-6">Professional Experience</h3>
            <div className="space-y-6">
              {experience.map((item) => (
                <Entry
                  key={item.role}
                  title={item.role}
                  org={item.org}
                  period={item.period}
                  detail={item.detail}
                />
              ))}
            </div>
          </div>

          {/* Education + Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-6">Education</h3>
              <div className="space-y-5">
                {education.map((item) => (
                  <Entry key={item.title} {...item} />
                ))}
              </div>
            </div>

            <div className="rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-6">Certifications</h3>
              <div className="space-y-5">
                {certifications.map((item) => (
                  <Entry key={item.title} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};