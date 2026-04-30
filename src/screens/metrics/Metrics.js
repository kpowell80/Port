import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './metrics.css';

function Counter({ from = 0, to, suffix = '', duration = 2 }) {
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true });
  const [count, setCount] = React.useState(from);

  React.useEffect(() => {
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

function Metrics() {
  const containerRef = useRef();
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const metrics = [
    { value: 200, suffix: '%+', label: 'Revenue Growth' },
    { value: 19, suffix: '', label: 'Accounts Managed' },
    { value: 6, suffix: '/7', label: 'Continents Traveled' },
    { value: 3, suffix: '', label: 'Skill Sets Combined' }
  ];

  return (
    <div className="metrics-section" ref={containerRef}>
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
    </div>
  );
}

export default Metrics;
