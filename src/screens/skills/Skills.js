import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import './skills.css';

function Counter({ from = 0, to, suffix = '', duration = 2 }) {
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      let start = from;
      const end = to;
      if (start === end) return;

      let timer = setInterval(() => {
        start += Math.ceil((end - start) / 20);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, duration * 10);

      return () => clearInterval(timer);
    }
  }, [isInView, from, to, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const metrics = [
    { value: 200, suffix: '%+', label: 'Revenue Growth' },
    { value: 19, suffix: '', label: 'Accounts Managed' },
    { value: 6, suffix: '/7', label: 'Continents Traveled' },
    { value: 3, suffix: '', label: 'Skill Sets Combined' }
  ];

  const skillCategories = [
    {
      category: "Design",
      skills: ["Figma", "FigJam", "Miro", "Maze", "User Research", "Usability Testing", "Prototyping", "Journey Mapping"]
    },
    {
      category: "Development",
      skills: ["React.js", "JavaScript", "Python", "HTML/CSS", "C#", "Git", "Responsive Design"]
    },
    {
      category: "Business",
      skills: ["Account Management", "Customer Success", "Revenue Growth", "Team Leadership", "Project Management", "CRM"]
    }
  ];

  return (
    <div className="skills-section" ref={ref}>
      {/* Metrics Section */}
      <div className="metrics-container">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            className="metric-item"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="metric-value">
              <Counter to={metric.value} suffix={metric.suffix} />
            </div>
            <div className="metric-label">{metric.label}</div>
          </motion.div>
        ))}
      </div>
      <motion.p
        className="metrics-tagline"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Design · Code · Business
      </motion.p>

      {/* Skills Section */}
      <motion.h2
        className="skills-heading"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Skills & Tools
      </motion.h2>

      <div className="skills-categories">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="skill-category">
            <motion.h3
              className="category-title"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              {category.category}
            </motion.h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="skill-badge-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.4,
                    delay: (catIndex * 0.2) + (skillIndex * 0.05)
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
