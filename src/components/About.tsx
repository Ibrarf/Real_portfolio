import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <div className="about-content">
          <p className="para about-intro">
            I am an AI Automation Engineer and AI Specialist with over 3 years of professional experience working with international clients.
          </p>
          <p className="para about-detail">
            I build scalable AI agents, voice assistants, and complete CRM automation systems. My core stack includes N8N, GoHighLevel, Make.com, LangChain, Python, and SQL.
          </p>
          <p className="para about-detail">
            I help businesses streamline operations, eliminate manual work, and scale faster through intelligent workflows and modern automation solutions.
          </p>

          <a href="#what" className="about-next-link para" data-cursor="disable" onClick={(e) => {
             e.preventDefault();
             // Find smoother instance from window or rely on smooth scroll
             const target = document.querySelector('#what');
             if(target) target.scrollIntoView({behavior: 'smooth'});
          }}>
            Explore What I Do
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
