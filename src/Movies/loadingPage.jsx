import { motion, MotionConfig } from "framer-motion";

export const LoadingPage = ({ setToggle }) => {
    return (
        <MotionConfig reducedMotion="user">
            <div className="loadingPageContainer">
                <motion.div
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1.5
                    }}
                >
                    <motion.div
                        className="loadingBox"
                        onClick={() => setTimeout(() => setToggle(true), 1000)}
                        whileTap={{ scale: 3 }}
                        transition={{ duration: 1 }}
                    >
                        Tap
                    </motion.div>
                </motion.div>
            </div>
        </MotionConfig>
    )
}