import { useRef } from "react";
import { useScrollReveal } from "./utils/useScrollReveal";
import "./styles/Experience.css";

interface Position {
  role: string;
  meta: string;
  desc: string[];
  tools: string[];
}

interface ExperienceEntry {
  company: string;
  location: string;
  flag?: string;
  link: string;
  year: string;
  positions: Position[];
}

const experiences: ExperienceEntry[] = [
  {
    company: "Nysonian Inc",
    location: "Toronto",
    flag: "ca",
    link: "#",
    year: "Current",
    positions: [
      {
        role: "Quality Assurance Automation Engineer",
        meta: "Jun 2026 to Present · Islamabad · Full time (On Site)",
        desc: [
          "Promoted from Automation Engineer to Quality Assurance Automation Engineer, working with N8N, Claude Code, and OpenCode to build automation systems that simplify operations.",
          "Building a Warehouse Management System (WMS) and internal software tools used daily by multiple teams across the company.",
          "Creating Python based workflows, AI chatbots, and smart pipelines to handle repetitive tasks.",
        ],
        tools: ["Quality Assurance", "N8N", "Claude Code", "OpenCode", "WMS"],
      },
      {
        role: "Automation Engineer",
        meta: "Mar 2026 to Jun 2026 · Islamabad · Full time (On Site)",
        desc: [
          "Automated HR and Finance operations for a fast scaling US based global lifestyle brand operating across multiple countries, including expense tracking, invoice handling, and reporting pipelines.",
          "Connected cross departmental tools so HR and Finance data stays accurate and consistent without manual syncing.",
        ],
        tools: ["AI Systems", "Automation", "HR Ops", "Finance Ops", "Python"],
      },
    ],
  },
  {
    company: "Drumhierny Hideaway",
    location: "Ireland",
    flag: "ie",
    link: "https://www.drumhiernyhideaway.ie/",
    year: "2025 to 2026",
    positions: [
      {
        role: "Senior AI Solutions & Software Engineer",
        meta: "Jan 2025 to Feb 2026 · Contract, Full Time (Remote)",
        desc: [
          "Designed and deployed AI powered chatbots and RAG based knowledge agents to handle customer inquiries, reducing average response time by over 60%.",
          "Built and configured end to end CRM systems including backend automations, pipeline management, and automated client communication workflows.",
          "Designed automated booking confirmations, follow up sequences, and review collection pipelines integrated with hospitality management tools.",
        ],
        tools: ["AI Chatbots", "RAG Agents", "CRM", "Mews", "Trybe"],
      },
    ],
  },
  {
    company: "Badaaas",
    location: "US",
    flag: "us",
    link: "https://www.badaaas.com/",
    year: "2025",
    positions: [
      {
        role: "Automation Developer",
        meta: "2025 · Freelance (Project Based)",
        desc: [
          "Built a real time Zoom meeting intelligence system using the Zoom Live Transcript API, capturing live speech and feeding it to AI agents mid call.",
          "AI agents analyze the live transcript and auto populate Google Slides in real time, enabling presenters to share accurate, up to date decks directly inside the meeting.",
          "Built a Make.com pipeline that auto generates a client proposal, manages pricing logic, and handles follow up distribution with zero manual work.",
        ],
        tools: ["Zoom API", "Make.com", "AI Agents", "Google Slides"],
      },
    ],
  },
  {
    company: "Leverbrand",
    location: "UK",
    flag: "gb",
    link: "https://www.leverbrands.com",
    year: "2024 to 2025",
    positions: [
      {
        role: "N8N Expert and Automation Specialist",
        meta: "2024 to 2025 · Contract, Full Time (Remote)",
        desc: [
          "Designed and implemented complex automation workflows using N8N to optimize multi department operations across sales, marketing, and client management.",
          "Automated social media operations across LinkedIn and other platforms, including scheduled content publishing, engagement tracking, and lead capture pipelines.",
          "Developed custom automations that reduced manual tasks by 40%, saving the team an estimated 15+ hours per week.",
        ],
        tools: ["N8N", "Social Media Automation", "CRM", "Email Marketing"],
      },
    ],
  },
  {
    company: "Prosperity Solutions",
    location: "USA",
    flag: "us",
    link: "#",
    year: "2023 to 2024",
    positions: [
      {
        role: "CRM Specialist, GHL Expert & Automation Engineer",
        meta: "2023 to 2024 · Contract, Full Time (Remote)",
        desc: [
          "Worked as a CRM Specialist and GoHighLevel (GHL) Expert for a debt management company, building out funnels, pipelines, automated communication sequences, and full CRM backend automations.",
          "Built internal automation infrastructure handling client communication, payment tracking, and compliance reporting.",
          "Designed and deployed AI powered virtual assistants that streamlined client onboarding and reduced support ticket volume by 35%.",
        ],
        tools: ["GoHighLevel", "CRM Development", "AI Automation", "Webhooks"],
      },
    ],
  },
  {
    company: "Legistech",
    location: "",
    link: "#",
    year: "2022 to 2023",
    positions: [
      {
        role: "Marketing Technology Lead",
        meta: "Founding Team · Sep 2022 to 2023 · Full time (On Site)",
        desc: [
          "Designed and executed comprehensive digital marketing strategies across SEO, Meta Ads, and social media that significantly increased brand reach and lead generation.",
          "Managed end to end social media campaigns and content calendars, driving measurable growth in customer engagement and conversion rates.",
        ],
        tools: ["Meta Ads", "SEO", "Social Media", "Marketing Tech"],
      },
    ],
  },
];

const Experience = () => {
  const listRef = useRef<HTMLDivElement>(null);
  useScrollReveal(listRef);

  return (
    <div className="experience-section section-container" id="experience">
      <h2 className="section-title display">Experience</h2>

      <div className="experience-list" ref={listRef}>
        {experiences.map((exp, i) => {
          const isMulti = exp.positions.length > 1;

          return (
            <div className="experience-card reveal" key={exp.company}>
              <div className="experience-card-num mono">{String(i + 1).padStart(2, "0")}</div>
              <div className="experience-card-body">
                <div className="experience-card-head">
                  <div>
                    {!isMulti && <h4 className="experience-role">{exp.positions[0].role}</h4>}
                    <p className="experience-company">
                      {exp.link !== "#" ? (
                        <a href={exp.link} target="_blank" rel="noreferrer" data-cursor="disable">
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                      {exp.location && (
                        <span className="experience-location">
                          {" "}
                          · {exp.location}
                          {exp.flag && (
                            <img
                              className="experience-flag"
                              src={`https://flagcdn.com/24x18/${exp.flag}.png`}
                              alt={exp.location}
                            />
                          )}
                        </span>
                      )}
                    </p>
                  </div>
                  <span className="experience-year mono">{exp.year}</span>
                </div>

                {!isMulti && <p className="experience-meta mono">{exp.positions[0].meta}</p>}

                <div className={isMulti ? "experience-timeline" : undefined}>
                  {exp.positions.map((pos, idx) => (
                    <div className={isMulti ? "experience-position" : undefined} key={idx}>
                      {isMulti && (
                        <div className="experience-position-rail" aria-hidden="true">
                          <span className="experience-position-dot" />
                          {idx < exp.positions.length - 1 && (
                            <span className="experience-position-line" />
                          )}
                        </div>
                      )}
                      <div className={isMulti ? "experience-position-body" : undefined}>
                        {isMulti && <h4 className="experience-role">{pos.role}</h4>}
                        {isMulti && <p className="experience-meta mono">{pos.meta}</p>}
                        <ul className="experience-desc">
                          {pos.desc.map((line, j) => (
                            <li key={j}>{line}</li>
                          ))}
                        </ul>
                        <div className="experience-tools">
                          {pos.tools.map((tool) => (
                            <span className="experience-tag mono" key={tool}>
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
