import React from "react";
import SpotlightCard from "../components/SpotlightCard"; 

const Experience = () => {
  const experiences = [
    {
      company: "Rakuna Co.",
      role: "Software Development Intern",
      date: "Jun 2025 – Aug 2025",
      bullets: [
        "Engineered a resume management feature within the prospect details page, enabling recruiters to add, delete, and save resumes, complete with an ‘undo’ function to prevent accidental data loss.",
        "Developed and launched a full-stack QR code check-in feature, iteratively refined the UI and functionality based on user testing and team feedback to enhance the event check-in experience.",
        "Resolved a concurrency bug in the third-party support chat integration by engineering a dynamic session identifier system, effectively preventing cross-user data leakage.",
        "Optimized the query by implementing ID-based filtering for autocomplete, improving query accuracy for recruiters up to 70%.",
        "Containerized the main application and internal tools to QA environments, eliminating environment configuration errors and reducing team onboarding time up to 100%.",
      ],
      tech: ["Ruby", "Rails", "React", "JavaScript", "HTML", "CSS", "PostgreSQL", "AWS EC2", "Docker", "HashiCorp Vault"]
    },
    {
      company: "Texas Christian University",
      role: "Computer Science Tutor",
      date: "Aug 2024 – Present",
      bullets: [
        "Broke down complex topics in Data Structures and Calculus into digestible concepts during 1-on-1 sessions, directly enabling over 30 students to complete challenging assignments.",
        "Provided hands-on project guidance for Java (OOP) and Scala (Functional Programming) assignments, instructing students on best practices for debugging, tool selection, and code architecture."
      ],
      tech: ["JavaScript", "HTML", "CSS", "Java", "Scala"]
    }
  ];

  return (
    <div id="experience" className="flex flex-col items-center w-full max-w-4xl mx-auto py-20 space-y-12">
      
      {/* Heading - Matches your Portfolio Style */}
      <div className='py-4 text-5xl font-bold z-10 
                      bg-gradient-to-r from-yellow-300 to-yellow-300 bg-no-repeat 
                      [background-position:50%_50%] [background-size:50%_100%] text-slate-900'>
        Experience
      </div>

      <div className="w-full space-y-6 px-4">
        {experiences.map((exp, index) => (
          <SpotlightCard key={index} className="p-8">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                <p className="text-xl text-yellow-600 font-semibold">{exp.company}</p>
              </div>
              <span className="text-slate-500 font-mono mt-2 md:mt-0 bg-slate-100 px-3 py-1 rounded-full text-sm shadow-lg">
                {exp.date}
              </span>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-3 mb-8">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start text-slate-600 group">
                  <span className="mr-3 mt-1.5 text-yellow-400 text-xs">▶</span>
                  <span className="group-hover:text-slate-900 transition-colors duration-200 leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-100">
              {exp.tech.map((tech, tIndex) => (
                <span 
                  key={tIndex} 
                  className="px-3 py-1 text-xs font-medium text-slate-600 bg-slate-50 rounded-md hover:border-yellow-400 hover:bg-yellow-50 hover:text-yellow-700 transition-all cursor-default shadow-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default Experience;