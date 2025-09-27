import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./splashscreen.css";

const SplashScreen = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShow(false), 3000); // splash duration
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="splash-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h1
                        className="splash-title"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Memory Lane
                    </motion.h1>
                    <motion.p
                        className="splash-caption"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Honoring the Beloved Past Members of the Madathinakath Family
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
