import { useRef, CSSProperties } from "react";
import { useScrollReveal } from "./utils/useScrollReveal";
import "./styles/Skills.css";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "SQL", "NoSQL"],
  },
  {
    title: "AI & LLM",
    skills: [
      "LangChain",
      "LangGraph",
      "RAG Agents & Chatbots",
      "Prompt Engineering",
      "Vector Databases",
      "MCP Server",
      "Claude Code",
      "AI Voice Agents",
    ],
  },
  {
    title: "Automation & CRM",
    skills: [
      "N8N",
      "Go High Level",
      "All CRM (Forth etc.)",
      "Zapier / Make",
      "Google Sheets Automation",
    ],
  },
  {
    title: "API & Systems Integration",
    skills: [
      "REST API Integrations",
      "Webhook Development",
      "Database Integrations",
      "CRM Integrations",
      "AI API Integrations",
      "Payment Workflow Integrations",
      "Cross-Platform Synchronization",
      "Third-Party Connections",
      "Custom Python Scripts",
    ],
  },
  {
    title: "Tools",
    skills: ["Docker", "AWS", "Cursor", "Claude", "Langfuse", "WordPress Dev", "Next.js", ".NET", "TypeScript"],
  },
  {
    title: "Other",
    skills: [
      "SEO",
      "Meta Ads",
      "Data Scraping",
      "Workflow Optimization",
      "Live Transcription Systems",
    ],
  },
  {
    title: "Professional Skills",
    skills: [
      "Teamwork and Collaboration",
      "Strong Communication",
      "Problem Solving and Analysis",
      "Project Management",
      "Client Relations",
      "Agile Workflow Management",
    ],
  },
];

const Skills = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  useScrollReveal(gridRef);

  return (
    <div className="skills-section section-container" id="skills">
      <h2 className="section-title display">Skills</h2>

      <div className="skills-grid" ref={gridRef}>
        {skillGroups.map((group, i) => (
          <div
            className="skills-box reveal"
            key={group.title}
            style={{ "--reveal-delay": `${(i % 3) * 0.08}s` } as CSSProperties}
          >
            <h3 className="skills-box-title">{group.title}</h3>
            <div className="skills-box-list">
              {group.skills.map((skill) => (
                <span className="skills-box-item" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
