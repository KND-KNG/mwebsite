import { useState, useEffect, useRef } from "react";

const skills = {
  "Programming & Development": [
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: ".NET MVC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  ],
  "Databases": [
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  ],
  "Tools & Technologies": [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "CI/CD Pipelines", icon: null, emoji: "⚙️" },
  ],
  "Testing & QA": [
    { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
    { name: "SoapUI", icon: null, emoji: "🔬" },
    { name: "Unit Testing", icon: null, emoji: "✅" },
    { name: "Regression Testing", icon: null, emoji: "🔁" },
  ],
  "Methodologies": [
    { name: "Agile / Scrum", icon: null, emoji: "🔄" },
    { name: "JIRA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    { name: "Azure DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "Trello", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
  ],
};

const experience = [
  {
    title: "Software Test Analyst (Developer-Aligned Role)",
    company: "DHC-SA",
    period: "2022 – Present",
    points: [
      "Collaborate closely with developers within an agile team to analyse requirements, identify defects, and improve application functionality.",
      "Contribute to the development and maintenance of automated test frameworks and test suites, enhancing software reliability and performance.",
      "Design and execute functional, integration, and regression tests to validate system behaviour and support stable releases.",
      "Assist in debugging and troubleshooting issues by analysing system behaviour and working with code-level insights.",
      "Participate in release management processes, ensuring high-quality deployments and adherence to CI/CD practices.",
      "Maintain and enforce source control and versioning best practices within the development lifecycle.",
      "Support continuous improvement of development and QA processes through documentation and adherence to standards.",
      "Provide technical support, gaining exposure to real-world system usage and user requirements.",
    ],
  },
  {
    title: "Student Supplementary Instructor (Programming Focus)",
    company: "Central University of Technology (CUT)",
    period: "2021 – 2022",
    points: [
      "Delivered practical coding sessions to final-year students focusing on C#, Flutter, and Dart.",
      "Reinforced core programming concepts including object-oriented programming, debugging, and problem-solving.",
      "Guided students in applying theoretical knowledge to real-world coding scenarios and development practices.",
      "Supported students in improving code quality, structure, and understanding of the software development process.",
    ],
  },
];

const projects = [
  {
    title: "Web Application",
    tech: "C# / .NET MVC",
    icon: "🌐",
    description: "A full-stack web application built with C# and the .NET MVC framework, demonstrating server-side rendering, routing, and database integration.",
  },
  {
    title: "REST API Project",
    tech: "C# / ASP.NET",
    icon: "⚡",
    description: "A RESTful API exposing structured endpoints, handling authentication, validation, and data persistence with clean architectural patterns.",
  },
  {
    title: "Front-End Application",
    tech: "HTML, CSS, JavaScript",
    icon: "🎨",
    description: "A responsive, interactive front-end application showcasing modern UI/UX practices, DOM manipulation, and clean component structure.",
  },
];

function NavDot({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "6px 0",
        opacity: active ? 1 : 0.4,
        transition: "opacity 0.3s",
      }}
    >
      <span style={{
        width: active ? "28px" : "8px",
        height: "8px",
        borderRadius: "4px",
        background: "#00e5ff",
        display: "block",
        transition: "width 0.3s",
      }} />
      <span style={{
        fontSize: "11px",
        color: "#00e5ff",
        fontFamily: "'Space Mono', monospace",
        letterSpacing: "0.05em",
        display: active ? "block" : "none",
      }}>{label}</span>
    </button>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const sections = ["hero", "summary", "skills", "experience", "education", "projects"];
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      background: "#050a14",
      color: "#e8f0fe",
      minHeight: "100vh",
      overflowX: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500;600&family=Syne:wght@700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #050a14; }
        ::-webkit-scrollbar-thumb { background: #00e5ff44; border-radius: 2px; }

        .section { min-height: 100vh; padding: 80px 5vw; display: flex; flex-direction: column; justify-content: center; }

        .tag {
          display: inline-flex; align-items: center; gap: 8px;
          background: #00e5ff11; border: 1px solid #00e5ff33;
          padding: 6px 14px; border-radius: 20px;
          font-family: 'Space Mono', monospace; font-size: 11px;
          color: #00e5ff; letter-spacing: 0.1em; text-transform: uppercase;
          margin-bottom: 20px;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 6vw, 72px);
          font-weight: 800;
          line-height: 1;
          background: linear-gradient(135deg, #ffffff 0%, #94b4d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 12px;
        }

        .accent { color: #00e5ff; -webkit-text-fill-color: #00e5ff; }

        .card {
          background: #0d1929;
          border: 1px solid #1a2d4a;
          border-radius: 16px;
          padding: 28px;
          transition: border-color 0.3s, transform 0.3s;
        }
        .card:hover { border-color: #00e5ff44; transform: translateY(-3px); }

        .skill-chip {
          display: flex; align-items: center; gap: 10px;
          background: #0d1929; border: 1px solid #1a2d4a;
          border-radius: 12px; padding: 10px 16px;
          transition: all 0.25s; cursor: default;
        }
        .skill-chip:hover {
          border-color: #00e5ff66;
          background: #0d2035;
          transform: translateY(-2px);
          box-shadow: 0 4px 20px #00e5ff15;
        }

        .timeline-dot {
          width: 12px; height: 12px;
          border-radius: 50%; background: #00e5ff;
          flex-shrink: 0; margin-top: 5px;
          box-shadow: 0 0 12px #00e5ff;
        }

        .grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }

        .hero-bg {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 70% 40%, #00e5ff08 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 20% 80%, #1a4a8a18 0%, transparent 60%);
          pointer-events: none;
        }

        .grid-lines {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(#1a2d4a22 1px, transparent 1px),
            linear-gradient(90deg, #1a2d4a22 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .exp-line {
          position: absolute; left: 5px; top: 18px; bottom: 0;
          width: 2px; background: linear-gradient(to bottom, #00e5ff, transparent);
        }

        @media (max-width: 640px) {
          .section { padding: 60px 20px; }
          .nav-sidebar { display: none; }
        }
      `}</style>

      {/* Side Nav */}
      <div className="nav-sidebar" style={{
        position: "fixed", right: "28px", top: "50%", transform: "translateY(-50%)",
        display: "flex", flexDirection: "column", gap: "8px", zIndex: 100,
      }}>
        {sections.map((s) => (
          <NavDot key={s} label={s.toUpperCase()} active={activeSection === s} onClick={() => scrollTo(s)} />
        ))}
      </div>

      {/* HERO */}
      <section id="hero" className="section" style={{ position: "relative", overflow: "hidden" }}>
        <div className="hero-bg" />
        <div className="grid-lines" />
        <div style={{ position: "relative", maxWidth: "900px" }}>
          <div className="tag">⚡ Available for opportunities</div>
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(52px, 10vw, 110px)",
            fontWeight: 800,
            lineHeight: 0.95,
            marginBottom: "24px",
          }}>
            <span style={{ display: "block", color: "#e8f0fe" }}>MPHO</span>
            <span style={{ display: "block", background: "linear-gradient(90deg, #00e5ff, #4d9fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>MOSOTHO</span>
          </h1>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(14px, 2vw, 18px)",
            color: "#7fa8cc",
            letterSpacing: "0.08em",
            marginBottom: "32px",
          }}>JUNIOR SOFTWARE DEVELOPER · CAPE TOWN</p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {[
              { label: "Mphomosotho@live.com", href: "mailto:Mphomosotho@live.com", icon: "✉" },
              { label: "081 865 0238", href: "tel:0818650238", icon: "📞" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/mpho-mosotho-1a8777143", icon: "🔗" },
            ].map((c) => (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  color: "#7fa8cc", textDecoration: "none", fontSize: "14px",
                  border: "1px solid #1a2d4a", borderRadius: "8px",
                  padding: "8px 16px", transition: "all 0.25s",
                  fontFamily: "'Space Mono', monospace",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#00e5ff66"; e.currentTarget.style.color = "#00e5ff"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a2d4a"; e.currentTarget.style.color = "#7fa8cc"; }}
              >
                <span>{c.icon}</span>{c.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section id="summary" className="section" style={{ background: "#070e1a" }}>
        <div style={{ maxWidth: "900px" }}>
          <div className="tag">👤 Profile</div>
          <h2 className="section-title">Professional<br /><span className="accent">Summary</span></h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "32px" }}>
            {[
              "Enthusiastic and detail-oriented Junior Software Developer with a strong foundation in C#, Java, and .NET MVC, complemented by hands-on experience in agile software environments. Background in software testing provides a solid understanding of the full software development lifecycle, enabling the delivery of reliable, high-quality applications.",
              "Skilled in developing, debugging, and improving application functionality, with experience working on test automation frameworks and collaborating closely with development teams to resolve defects and enhance system performance. Proficient in front-end technologies (HTML, CSS, JavaScript) and database management using SQL and MongoDB.",
              "A proactive team player with strong analytical and problem-solving skills, passionate about building efficient, maintainable code and continuously expanding technical expertise in modern software development practices.",
            ].map((text, i) => (
              <div key={i} style={{
                display: "flex", gap: "16px", alignItems: "flex-start",
                background: "#0d1929", border: "1px solid #1a2d4a",
                borderRadius: "12px", padding: "20px",
              }}>
                <span style={{ color: "#00e5ff", fontFamily: "'Space Mono', monospace", fontSize: "12px", marginTop: "3px", flexShrink: 0 }}>0{i + 1}</span>
                <p style={{ color: "#94b4d4", lineHeight: 1.7, fontSize: "15px" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div style={{ maxWidth: "1000px", width: "100%" }}>
          <div className="tag">🛠 Capabilities</div>
          <h2 className="section-title">Technical<br /><span className="accent">Skills</span></h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginTop: "36px" }}>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p style={{
                  fontFamily: "'Space Mono', monospace", fontSize: "11px",
                  color: "#00e5ff", letterSpacing: "0.12em", textTransform: "uppercase",
                  marginBottom: "14px",
                }}>{category}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {items.map((skill) => (
                    <div key={skill.name} className="skill-chip">
                      {skill.icon ? (
                        <img src={skill.icon} alt={skill.name} width={22} height={22}
                          style={{ objectFit: "contain" }}
                          onError={e => { e.target.style.display = "none"; }} />
                      ) : (
                        <span style={{ fontSize: "18px" }}>{skill.emoji}</span>
                      )}
                      <span style={{ fontSize: "14px", color: "#c8ddf0", fontWeight: 500 }}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section" style={{ background: "#070e1a" }}>
        <div style={{ maxWidth: "900px", width: "100%" }}>
          <div className="tag">💼 Career</div>
          <h2 className="section-title">Professional<br /><span className="accent">Experience</span></h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px", marginTop: "36px" }}>
            {experience.map((job, i) => (
              <div key={i} className="card" style={{ position: "relative" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "6px" }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "20px", fontWeight: 700, color: "#e8f0fe" }}>{job.title}</h3>
                  <span style={{
                    fontFamily: "'Space Mono', monospace", fontSize: "11px",
                    color: "#00e5ff", background: "#00e5ff11",
                    border: "1px solid #00e5ff33", borderRadius: "6px", padding: "4px 10px",
                    whiteSpace: "nowrap",
                  }}>{job.period}</span>
                </div>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", color: "#4d9fff", marginBottom: "18px", letterSpacing: "0.05em" }}>{job.company}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", position: "relative", paddingLeft: "20px" }}>
                  <div style={{
                    position: "absolute", left: "5px", top: "8px", bottom: "8px",
                    width: "2px", background: "linear-gradient(to bottom, #00e5ff66, transparent)",
                  }} />
                  {job.points.map((pt, j) => (
                    <div key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <div className="timeline-dot" style={{ marginTop: "6px" }} />
                      <p style={{ color: "#94b4d4", fontSize: "14px", lineHeight: 1.65 }}>{pt}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <div style={{ maxWidth: "900px", width: "100%" }}>
          <div className="tag">🎓 Academic</div>
          <h2 className="section-title">Education &<br /><span className="accent">Certifications</span></h2>
          <div className="grid-2" style={{ marginTop: "36px" }}>
            {[
              {
                icon: "🏫",
                title: "Diploma in Information Technology",
                org: "Central University of Technology (CUT)",
                period: "2019 – 2022",
                color: "#4d9fff",
              },
              {
                icon: "📜",
                title: "ISTQB Foundation Certification (CTFL 4.0)",
                org: "SASTQB",
                period: "2025",
                color: "#00e5ff",
              },
            ].map((edu, i) => (
              <div key={i} className="card" style={{ borderLeft: `3px solid ${edu.color}` }}>
                <span style={{ fontSize: "32px", display: "block", marginBottom: "16px" }}>{edu.icon}</span>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "18px", fontWeight: 700, color: "#e8f0fe", marginBottom: "8px" }}>{edu.title}</h3>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", color: edu.color, marginBottom: "4px" }}>{edu.org}</p>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", color: "#7fa8cc" }}>{edu.period}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "48px" }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", color: "#00e5ff", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "20px" }}>Additional Information</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Strong understanding of the Software Development Life Cycle (SDLC)",
                "Experience working in collaborative, cross-functional agile teams",
                "Passionate about transitioning fully into software development and building scalable applications",
                "Continuously learning and improving skills in modern development technologies",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span style={{ color: "#00e5ff", fontSize: "16px" }}>→</span>
                  <p style={{ color: "#94b4d4", fontSize: "14px" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section" style={{ background: "#070e1a" }}>
        <div style={{ maxWidth: "1000px", width: "100%" }}>
          <div className="tag">🚀 Work</div>
          <h2 className="section-title">Featured<br /><span className="accent">Projects</span></h2>
          <div className="grid-3" style={{ marginTop: "36px" }}>
            {projects.map((proj, i) => (
              <div key={i} className="card" style={{
                position: "relative", overflow: "hidden",
                background: "linear-gradient(135deg, #0d1929 0%, #091525 100%)",
              }}>
                <div style={{
                  position: "absolute", top: "-20px", right: "-20px",
                  fontSize: "80px", opacity: 0.07, pointerEvents: "none",
                }}>{proj.icon}</div>
                <span style={{ fontSize: "36px", display: "block", marginBottom: "16px" }}>{proj.icon}</span>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "20px", fontWeight: 700, color: "#e8f0fe", marginBottom: "8px" }}>{proj.title}</h3>
                <span style={{
                  display: "inline-block", fontFamily: "'Space Mono', monospace", fontSize: "11px",
                  color: "#00e5ff", background: "#00e5ff11", border: "1px solid #00e5ff33",
                  borderRadius: "6px", padding: "3px 10px", marginBottom: "14px",
                }}>{proj.tech}</span>
                <p style={{ color: "#7fa8cc", fontSize: "14px", lineHeight: 1.65 }}>{proj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "40px 5vw",
        borderTop: "1px solid #1a2d4a",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: "16px",
      }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", color: "#3a5a7a" }}>
          © 2025 Mpho Mosotho — Cape Town, ZA
        </p>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", color: "#3a5a7a" }}>
          Built with React JS
        </p>
      </footer>
    </div>
  );
}
