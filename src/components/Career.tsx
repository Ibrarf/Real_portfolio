import "./styles/Career.css";

const experiences = [
  {
    role: "AI Systems & Automation Engineer",
    company: "Nysonian Inc (Toronto)",
    link: "#",
    year: "Current",
    flag: "https://flagcdn.com/24x18/ca.png",
    meta: "Islamabad / Current / Full time (On Site)",
    desc: [
      "Automating HR and Finance operations for a fast scaling US based global lifestyle brand operating across multiple countries.",
      "Automating finance operations including expense tracking, invoice handling, and reporting pipelines.",
      "Supporting the team with fixes, improvements, and new automations as the company continues to grow.",
      "Connecting cross departmental tools so HR and Finance data stays accurate and consistent without manual syncing."
    ],
    tools: ["AI Systems", "Automation", "HR Ops", "Finance Ops", "Reporting"]
  },
  {
    role: "Senior AI Solutions & Software Engineer",
    company: "Drumhierny Hideaway (Ireland)",
    link: "https://www.drumhiernyhideaway.ie/",
    year: "2025 to 2026",
    flag: "https://flagcdn.com/24x18/ie.png",
    meta: "Jan 2025 to Feb 2026 / Full time (Remote)",
    desc: [
      "Designed and deployed AI powered chatbots and RAG based knowledge agents to handle customer inquiries, reducing average response time by over 60%.",
      "Built and configured end to end CRM systems including backend automations, pipeline management, and automated client communication workflows.",
      "Designed automated booking confirmations, follow up sequences, and review collection pipelines integrated with hospitality management tools.",
      "Developed custom CRM backend automations for lead tracking, payment processing, and operational reporting dashboards.",
      "Provided ongoing technical support, system optimization, and iterative improvements to adapt automation systems to evolving business needs."
    ],
    tools: ["AI Chatbots", "RAG Agents", "CRM", "Mews", "Trybe"]
  },
  {
    role: "Automation Developer",
    company: "Badaaas (US)",
    link: "https://www.badaaas.com/",
    year: "2025",
    flag: "https://flagcdn.com/24x18/us.png",
    meta: "2025 / Freelance / (Project Based)",
    desc: [
      "Built a real time Zoom meeting intelligence system using the Zoom Live Transcript API, capturing live speech and feeding it to AI agents mid call.",
      "AI agents analyze the live transcript and auto populate Google Slides in real time, enabling presenters to share accurate, up to date decks directly inside the meeting.",
      "After meeting close: Full transcript extracted and sent to a Make.com pipeline that auto generates a client proposal, manages pricing logic, and handles follow up distribution with zero manual work.",
      "Provided continuous monitoring, troubleshooting, and optimization for production automation pipelines."
    ],
    tools: ["Zoom API", "Make.com", "AI Agents", "Google Slides"]
  },
  {
    role: "N8N Expert and Automation Specialist",
    company: "Leverbrand (UK)",
    link: "https://www.leverbrands.com",
    year: "2024 to 2025",
    flag: "https://flagcdn.com/24x18/gb.png",
    meta: "2024 to 2025 / Full time (Remote)",
    desc: [
      "Designed and implemented complex automation workflows using N8N to optimize multi department operations across sales, marketing, and client management.",
      "Automated social media operations across LinkedIn and other platforms, including scheduled content publishing, engagement tracking, and lead capture pipelines.",
      "Integrated CRM platforms, email marketing tools, and payment gateways to create seamless automated client management pipelines.",
      "Developed custom automations that reduced manual tasks by 40%, saving the team an estimated 15+ hours per week.",
      "Provided continuous monitoring, troubleshooting, and optimization for production automation pipelines."
    ],
    tools: ["N8N", "Social Media Automation", "LinkedIn", "CRM", "Email Marketing", "Payment Gateways"]
  },
  {
    role: "AI Automation & Software Engineer",
    company: "Prosperity Solutions (USA)",
    link: "#",
    year: "2023 to 2024",
    flag: "https://flagcdn.com/24x18/us.png",
    meta: "2023 to 2024 / Full time (Remote)",
    desc: [
      "Built internal systems and automation infrastructure for a debt management company, handling client communication, payment tracking, and compliance reporting.",
      "Built and customized complete CRM systems from the ground up, tailored to client onboarding, pipeline management, and operational workflows.",
      "Worked extensively with GoHighLevel (GHL), building out funnels, pipelines, automated communication sequences, and full CRM backend automations.",
      "Designed and deployed AI powered virtual assistants that streamlined client onboarding and reduced support ticket volume by 35%.",
      "Created automated reporting dashboards and financial tracking systems using Google Sheets integrations and webhook driven pipelines.",
      "Collaborated with cross functional teams of developers, account managers, and compliance officers to ensure seamless integration of automation tools."
    ],
    tools: ["AI Automation", "GoHighLevel (GHL)", "CRM Development", "Software Engineering", "Google Sheets", "Webhooks"]
  },
  {
    role: "Marketing Technology Lead",
    company: "Legistech",
    link: "#",
    year: "2022 to 2023",
    flag: "",
    meta: "Founding Team / Sep 2022 to 2023 / Full time (On Site)",
    desc: [
      "Designed and executed comprehensive digital marketing strategies across SEO, Meta Ads, and social media that significantly increased brand reach and lead generation.",
      "Managed end to end social media campaigns and content calendars, driving measurable growth in customer engagement and conversion rates.",
      "Collaborated with sales and product teams to align marketing initiatives with revenue goals and market positioning."
    ],
    tools: ["Meta Ads", "SEO", "Social Media", "Marketing Tech"]
  }
];

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <div className="career-heading-wrapper">
          <div className="career-subheading">
            <span className="dot pulse-dot"></span>
            Where I've Worked
          </div>
          <h2 className="career-heading title" data-text="EXPERIENCE">
            EXPERIENCE
          </h2>
          <div className="heading-glow"></div>
        </div>
        <div className="career-info">
          <div className="career-rail">
            <div className="career-rail-dot"></div>
          </div>

          {experiences.map((exp, index) => (
            <div className="career-card" key={index}>
              <div className="career-node">
                <span className="career-node-num">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="career-card-inner">
                <div className="career-year-badge">{exp.year}</div>
                <div className="career-card-head">
                  <h4>{exp.role}</h4>
                  <h5 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {exp.flag && <img src={exp.flag} alt={`${exp.company} Country`} style={{ borderRadius: "2px", width: "24px", height: "18px", boxShadow: "0 0 5px rgba(0,0,0,0.5)" }} />}
                    {exp.link !== "#" ? (
                      <a href={exp.link} target="_blank" data-cursor="disable" style={{textDecoration: "underline", color: "inherit"}}>
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                  </h5>
                  {exp.meta && <p className="career-meta">{exp.meta}</p>}
                </div>
                <div className="career-desc-wrap">
                  {Array.isArray(exp.desc) ? (
                    <ul className="career-desc-list">
                      {exp.desc.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{exp.desc}</p>
                  )}
                  <div className="career-tools">
                    {exp.tools.map((tool, i) => (
                      <span className="career-tag" key={i}>{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Career;
