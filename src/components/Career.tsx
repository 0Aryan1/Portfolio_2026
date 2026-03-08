import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Swapple Solutions Pvt. Ltd.</h5>
              </div>
              <h3>2025</h3>
            </div>
            <ul>
              <li>Developed and maintained responsive user interfaces using React.js, ensuring seamless performance across devices and improving overall user accessibility by 35%.</li>
              <li>Implemented secure frontend authentication flows, improving user onboarding efficiency and reducing login-related issues by 30%.</li>
              <li>Integrated and managed APIs with proper CORS handling, asynchronous data fetching, and dynamic UI rendering, reducing data-related UI errors by 40%.</li>
              <li>Optimized frontend performance and code reusability using modular components and state management, decreasing page load time by 25% and improving maintainability.</li>
            </ul>
          </div>
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Full Stack Developer</h4>
                <h5>Monocept (Max Life Insurance)</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Led two development teams on Mpro, a large-scale insurance
              operations platform. Developed multiple modules using React.js &
              migrated critical functionalities to Node.js microservices.
            </p>
          </div> */}
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Logic Loop</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building Solid, a proprietary low-code platform using Angular,
              Next.js & NestJS. Delivering production-ready CMS-based projects
              including e-commerce, CRM, and import-export automation systems.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Career;
