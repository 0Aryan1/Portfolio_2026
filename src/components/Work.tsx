import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import project5 from "../assets/project-5.jpg";

const projects = [
  {
    title: "Zingr",
    category: "Food Discovery & Ordering Platform",
    tools: "React.js, React Router, Vite, Axios, Node.js, Express.js, MongoDB, ImageKit",
    image: project1,
    github:"https://github.com/0Aryan1/Zingr" ,
    demo: "https://zingr-eta.vercel.app/register",
  },
  {
    title: "DealDrop",
    category: "an intelligent price tracking platform for e-commerce",
    tools: "Next.js, React, Supabase, Firecrawl API, Resend, Recharts",
    image: project2,
    github: "https://github.com/0Aryan1/DealDrop",
    demo: "https://deal-drop-jade.vercel.app/",
  },
  {
    title: "The Jargonaut",
    category: "The Jargonaut is a blog-style web application focused on exploring topics in corporate law",
    tools: "React.js, Appwrite, Redux Toolkit, React Hook Form, TinyMCE",
    image: project3,
     github: "https://github.com/0Aryan1/JARGONAUT",
    demo: "https://www.thejargonaut.in.net/"
  },
  {
    title: "VIFS",
    category: " web app for sharing GIFs, stickers, and memes",
    tools: "HTML, TailwindCSS, React, JavaScript",
    image: project4,
    github: "https://github.com/0Aryan1/VIFSS_APP",
    demo: "https://vifss-app-918n.vercel.app"
  },
  {
    title: "Movie Hub",
    category: "fully responsive movie and TV show web app",
    tools: "HTML, TailwindCSS, JavaScript, React, Material UI, TMDB API",
    image: project5,
    github: "https://github.com/0Aryan1/Movie-Hub",
    demo: "https://movie-hub-sage-nine.vercel.app"
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        <div className="carousel-links">
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link"
                            data-cursor="disable"
                          >
                            <FaGithub /> GitHub
                          </a>
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link"
                            data-cursor="disable"
                          >
                            <FaExternalLinkAlt /> Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
