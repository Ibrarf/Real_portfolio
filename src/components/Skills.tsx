import "./styles/Skills.css";

const professionalSkills = [
  "Teamwork and Collaboration",
  "Strong Communication",
  "Problem Solving and Analysis",
  "Project Management",
  "Client Relations",
  "Agile Workflow Management",
  "Cross-functional Collaboration"
];

const technicalSkills = [
  "AI Automations",
  "N8N",
  "Go High Level",
  "All CRM (Forth etc.)",
  "AI Voice Agents",
  "RAG Agents & Chatbots",
  "WordPress Dev",
  "Zapier / Make",
  "Webhooks & APIs",
  "Google Sheets Automation",
  "LLM Integration",
  "Azure AI",
  "Prompt Engineering",
  "CRM Setup & Backend",
  "Data Scraping",
  "Workflow Optimization",
  "Live Transcription Systems",
  "Python",
  "JavaScript",
  "Claude Code",
  "OpenClaw",
  "Next.js",
  "MCP server",
  "LangChain",
  "LangGraph",
  "Vector databases",
  "AWS",
  "Docker",
  "SQL",
  "NoSQL",
  "Cursor",
  "Langfuse",
  "SEO",
  "Meta Ads"
];

const Skills = () => {
  return (
    <div className="skills-section section-container" id="skills">
      <div className="skills-container">
        <div className="career-heading-wrapper">
          <div className="career-subheading">
            <span className="dot pulse-dot"></span>
            What I Bring
          </div>
          <h2 className="career-heading title" data-text="SKILLS">
            SKILLS
          </h2>
          <div className="heading-glow"></div>
        </div>

        <div className="skills-groups">
          <div className="skills-group">
            <h3 className="skills-group-title">
              <span className="skills-group-dot soft-dot"></span>
              Professional Skills
            </h3>
            <div className="skills-tags">
              {professionalSkills.map((skill, i) => (
                <span className="skill-chip skill-chip-soft" key={i}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skills-group">
            <h3 className="skills-group-title">
              <span className="skills-group-dot tech-dot"></span>
              Technical Skills
            </h3>
            <div className="skills-tags">
              {technicalSkills.map((skill, i) => (
                <span className="skill-chip skill-chip-tech" key={i}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
