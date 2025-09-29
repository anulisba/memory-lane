import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./splashscreen.css";

const SplashScreen = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timers = [
            setTimeout(() => setStep(1), 3000), // after 3s show caption
            setTimeout(() => setStep(2), 6000), // after 6s remove splash
        ];

        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <AnimatePresence>
            {step < 2 && (
                <motion.div
                    className="splash-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    {step === 0 && (
                        <motion.h1
                            className="splash-title"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Memory Lane
                        </motion.h1>
                    )}

                    {step === 1 && (
                        <motion.p
                            className="splash-caption"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            HONORING THE BELOVED MEMBERS OF <br />
                            {/* <img src="https://res.cloudinary.com/dpo91btlc/image/upload/v1759077822/madahinakath_wfdsss.png" /> */}
                            MADATHINAKATH
                            <br />
                            FAMILY
                        </motion.p>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
