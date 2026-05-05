import React, { useEffect, useRef } from 'react';
import './SnowfallEffects.css';
import silverFlake from '../images/snow/silverFlake.png';

function SnowfallEffects() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Create 60 snowflakes
        for (let i = 0; i < 60; i++) {
            const snowflake = document.createElement('img');
            snowflake.src = silverFlake;
            snowflake.className = 'silver-snowflake';

            // Random properties
            const startPositionX = Math.random() * 100;
            const duration = 10 + Math.random() * 20;
            const delay = Math.random() * 5; // Reduced from 10 to 5 for quicker start
            const size = 10 + Math.random() * 20;

            snowflake.style.left = `${startPositionX}%`;
            snowflake.style.animationDuration = `${duration}s`;
            snowflake.style.animationDelay = `${delay}s`;
            snowflake.style.width = `${size}px`;
            snowflake.style.height = `${size}px`;

            container.appendChild(snowflake);
        }

        // Cleanup
        return () => {
            if (container) {
                container.innerHTML = '';
            }
        };
    }, []);

    return <div ref={containerRef} className="silver-snow-overlay"></div>;
}

export default SnowfallEffects;
