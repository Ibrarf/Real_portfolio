import { useRef } from "react";
import { useScrollReveal } from "./utils/useScrollReveal";
import "./styles/Experience.css";

const experiences = [
  {
    role: "AI Systems & Automation Engineer",
    company: "Nysonian Inc",
    location: "Toronto",
    flag: "ca",
    link: "#",
    year: "Current",
    meta: "Islamabad · Current · Full time (On Site)",
    desc: [
      "Automating HR and Finance operations for a fast scaling US based global lifestyle brand operating across multiple countries.",
      "Automating finance operations including expense tracking, invoice handling, and reporting pipelines.",
      "Connecting cross departmental tools so HR and Finance data stays accurate and consistent without manual syncing.",
    ],
    tools: ["AI Systems", "Automation", "HR Ops", "Finance Ops", "Reporting"],
  },
  {
    role: "Senior AI Solutions & Software Engineer",
    company: "Drumhierny Hideaway",
    location: "Ireland",
    flag: "ie",
    link: "https://www.drumhiernyhideaway.ie/",
    year: "2025 to 2026",
    meta: "Jan 2025 to Feb 2026 · Contract, Full Time (Remote)",
    desc: [
      "Designed and deployed AI powered chatbots and RAG based knowledge agents to handle customer inquiries, reducing average response time by over 60%.",
      "Built and configured end to end CRM systems including backend automations, pipeline management, and automated client communication workflows.",
      "Designed automated booking confirmations, follow up sequences, and review collection pipelines integrated with hospitality management tools.",
    ],
    tools: ["AI Chatbots", "RAG Agents", "CRM", "Mews", "Trybe"],
  },
  {
    role: "Automation Developer",
    company: "Badaaas",
    location: "US",
    flag: "us",
    link: "https://www.badaaas.com/",
    year: "2025",
    meta: "2025 · Freelance (Project Based)",
    desc: [
      "Built a real time Zoom meeting intelligence system using the Zoom Live Transcript API, capturing live speech and feeding it to AI agents mid call.",
      "AI agents analyze the live transcript and auto populate Google Slides in real time, enabling presenters to share accurate, up to date decks directly inside the meeting.",
      "Built a Make.com pipeline that auto generates a client proposal, manages pricing logic, and handles follow up distribution with zero manual work.",
    ],
    tools: ["Zoom API", "Make.com", "AI Agents", "Google Slides"],
  },
  {
    role: "N8N Expert and Automation Specialist",
    company: "Leverbrand",
    location: "UK",
    flag: "gb",
    link: "https://www.leverbrands.com",
    year: "2024 to 2025",
    meta: "2024 to 2025 · Contract, Full Time (Remote)",
    desc: [
      "Designed and implemented complex automation workflows using N8N to optimize multi department operations across sales, marketing, and client management.",
      "Automated social media operations across LinkedIn and other platforms, including scheduled content publishing, engagement tracking, and lead capture pipelines.",
      "Developed custom automations that reduced manual tasks by 40%, saving the team an estimated 15+ hours per week.",
    ],
    tools: ["N8N", "Social Media Automation", "CRM", "Email Marketing"],
  },
  {
    role: "AI Automation & Software Engineer",
    company: "Prosperity Solutions",
    location: "USA",
    flag: "us",
    link: "#",
    year: "2023 to 2024",
    meta: "2023 to 2024 · Contract, Full Time (Remote)",
    desc: [
      "Built internal systems and automation infrastructure for a debt management company, handling client communication, payment tracking, and compliance reporting.",
      "Worked extensively with GoHighLevel (GHL), building out funnels, pipelines, automated communication sequences, and full CRM backend automations.",
      "Designed and deployed AI powered virtual assistants that streamlined client onboarding and reduced support ticket volume by 35%.",
    ],
    tools: ["AI Automation", "GoHighLevel", "CRM Development", "Webhooks"],
  },
  {
    role: "Marketing Technology Lead",
    company: "Legistech",
    location: "",
    link: "#",
    year: "2022 to 2023",
    meta: "Founding Team · Sep 2022 to 2023 · Full time (On Site)",
    desc: [
      "Designed and executed comprehensive digital marketing strategies across SEO, Meta Ads, and social media that significantly increased brand reach and lead generation.",
      "Managed end to end social media campaigns and content calendars, driving measurable growth in customer engagement and conversion rates.",
    ],
    tools: ["Meta Ads", "SEO", "Social Media", "Marketing Tech"],
  },
];

const Experience = () => {
  const listRef = useRef<HTMLDivElement>(null);
  useScrollReveal(listRef);

  return (
    <div className="experience-section section-container" id="experience">
      <h2 className="section-title display">Experience</h2>

      <div className="experience-list" ref={listRef}>
        {experiences.map((exp, i) => (
          <div className="experience-card reveal" key={exp.company}>
            <div className="experience-card-num mono">{String(i + 1).padStart(2, "0")}</div>
            <div className="experience-card-body">
              <div className="experience-card-head">
                <div>
                  <h4 className="experience-role">{exp.role}</h4>
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
              <p className="experience-meta mono">{exp.meta}</p>
              <ul className="experience-desc">
                {exp.desc.map((line, j) => (
                  <li key={j}>{line}</li>
                ))}
              </ul>
              <div className="experience-tools">
                {exp.tools.map((tool) => (
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
  );
};

export default Experience;
