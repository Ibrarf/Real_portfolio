import { useRef } from "react";
import { useScrollReveal } from "./utils/useScrollReveal";
import "./styles/FAQ.css";

const faqs = [
  {
    q: "Who is Ibrahim Arif?",
    a: "Ibrahim Arif is an AI Automation Engineer and AI Specialist based in Islamabad, Pakistan, with 4+ years of experience designing AI agents, N8N workflows, and CRM automation systems for clients around the world.",
  },
  {
    q: "What does an AI Automation Engineer do?",
    a: "An AI Automation Engineer builds AI agents, chatbots, voice assistants, and workflow automations that connect a business's tools together and remove manual, repetitive work, typically using platforms like N8N, Make.com, and GoHighLevel alongside custom AI/LLM development.",
  },
  {
    q: "Is Ibrahim Arif available for AI Engineer roles or projects in Islamabad and Pakistan?",
    a: "Yes. Ibrahim Arif is based in Islamabad, Pakistan and takes on AI automation, N8N development, and CRM integration work with clients across Pakistan as well as internationally, both remote and on-site.",
  },
  {
    q: "What tools does Ibrahim Arif specialize in as an N8N and automation expert?",
    a: "N8N, Make.com, GoHighLevel, LangChain, LangGraph, RAG chatbots, AI voice agents (VAPI), Python, SQL, and end-to-end CRM automation systems.",
  },
  {
    q: "What kind of AI automation projects has Ibrahim Arif built?",
    a: "Ibrahim Arif has built AI voice agents, RAG chatbots, live Zoom meeting transcription systems, CRM automations (GoHighLevel and custom-built), AI email and social media outreach systems, and data scraping pipelines for clients in industries like hospitality, finance, and e-commerce.",
  },
  {
    q: "Does Ibrahim Arif have experience working with international clients?",
    a: "Yes. Ibrahim Arif has worked with clients in the US, UK, Ireland, and Canada on contract and freelance projects, building AI agents, N8N workflows, and CRM automation systems remotely from Islamabad, Pakistan.",
  },
  {
    q: "Can Ibrahim Arif build a custom CRM or GoHighLevel automation for my business?",
    a: "Yes. Ibrahim Arif designs and builds complete CRM systems and GoHighLevel implementations, including pipelines, automated communication sequences, and backend integrations tailored to a business's workflow.",
  },
];

const FAQ = () => {
  const listRef = useRef<HTMLDivElement>(null);
  useScrollReveal(listRef);

  return (
    <div className="faq-section section-container" id="faq">
      <h2 className="section-title display">FAQ</h2>

      <div className="faq-list" ref={listRef}>
        {faqs.map((item) => (
          <details className="faq-item reveal" key={item.q}>
            <summary className="faq-question">{item.q}</summary>
            <p className="faq-answer">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
