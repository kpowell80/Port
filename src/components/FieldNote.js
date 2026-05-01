import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fieldNotes } from '../helpers/fieldNotes';
import './FieldNote.css';

function FieldNote() {
    const [isRevealed, setIsRevealed] = useState(false);
    const [currentNote, setCurrentNote] = useState('');

    useEffect(() => {
        // Get day of year to determine which note to show
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        // Rotate through field notes based on day
        const noteIndex = dayOfYear % fieldNotes.length;
        setCurrentNote(fieldNotes[noteIndex]);
    }, []);

    return (
        <div className="field-note-system">
            {/* Glowing cluster with gentle constrained drift */}
            <motion.div
                className="field-note-cluster"
                onClick={() => setIsRevealed(!isRevealed)}
                onMouseEnter={() => setIsRevealed(true)}
                onMouseLeave={() => setIsRevealed(false)}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7],
                    x: [0, 8, 0, -6, 0],
                    y: [0, -5, -10, -4, 0],
                }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <div className="cluster-glow"></div>
                <div className="cluster-core"></div>
            </motion.div>

            {/* Connecting line */}
            <AnimatePresence>
                {isRevealed && (
                    <motion.div
                        className="field-note-connector"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        exit={{ scaleX: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                )}
            </AnimatePresence>

            {/* The field note with label */}
            <AnimatePresence>
                {isRevealed && (
                    <motion.div
                        className="field-note-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="field-note-label">
                            <span className="sparkle">✦</span> TODAY'S FIELD NOTE
                        </div>
                        <p className="field-note-text">{currentNote}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default FieldNote;
