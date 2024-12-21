import React from 'react';
import { motion } from 'framer-motion';

const Verification: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.2 } },
    };

    const inputVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    return (
        <div className="bg-slate-900 dark:bg-white  dark:text-slate-800 h-screen flex justify-center items-center">
            <motion.div
                className="text-white bg-slate-800 dark:bg-white  dark:text-slate-800 h-auto w-80 rounded-md px-6 py-8 drop-shadow-lg space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Heading */}
                <motion.h2
                    className="text-2xl font-bold text-center"
                    variants={fadeInLeft}
                >
                    Verify Your Account
                </motion.h2>

                <motion.p
                    className="text-sm text-gray-400 text-center"
                    variants={fadeInRight}
                >
                    Enter the four-digit code sent to your registered email ID
                </motion.p>

                {/* Code Input */}
                <motion.div className="flex justify-between" variants={containerVariants}>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <motion.input
                            key={index}
                            type="text"
                            maxLength={1}
                            className="w-12 h-12 text-center text-xl font-bold bg-slate-700 dark:text-black dark:bg-slate-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 dark:focus:ring-white"
                            variants={inputVariants}
                        />
                    ))}
                </motion.div>

                <motion.div className="flex flex-col gap-2" variants={containerVariants}>
                    <motion.p
                        className="text-slate-400 text-center"
                        variants={fadeInLeft}
                    >
                        Didn't receive the code?{' '}
                        <span className="text-white dark:text-black hover:underline hover:text-green-500 cursor-pointer">
                            Resend
                        </span>
                    </motion.p>

                    {/* Submit Button */}
                    <motion.button
                        className="w-full bg-white text-black dark:text-white  dark:bg-slate-900 font-semibold text-lg py-2 rounded-md hover:bg-gray-200 transition"

                        variants={fadeInRight}
                    >
                        Verify
                    </motion.button>

                    <motion.p
                        className="text-red-500 text-center"
                        variants={fadeInLeft}
                    >
                        Don't share this code with anyone.
                    </motion.p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Verification;
