import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>IBRAHIM</h1>

            {/* Status + Stats — contained within intro block */}
            <div className="landing-meta">
              <div className="landing-status">
                <span className="status-dot"></span>
                Available for Work
              </div>
              <div className="landing-stats-row">
                <div className="landing-stat-item">
                  <strong>4</strong>
                  <span>yrs exp</span>
                </div>
                <div className="landing-stat-divider"></div>
                <div className="landing-stat-item">
                  <strong>50+</strong>
                  <span>workflows built</span>
                </div>
              </div>
            </div>
          </div>

          <div className="landing-info">
            <h3>An AI Automation</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Engineer</div>
              <div className="landing-h2-2">Specialist</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Specialist</div>
              <div className="landing-h2-info-1">Engineer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
