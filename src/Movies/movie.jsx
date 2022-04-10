
import { motion } from 'framer-motion';

const imgContainerMotion = {
    rest: { opacity: 1, ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
        opacity: 0.25,
        transition: {
            duration: 0.75,
            type: "tween"
        }
    }
}
const overviewMotion = {
    rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
        y: -15,
        opacity: 1,
        transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeIn"
        }
    }
}
export const Movie = ({ movie }) => {
    return (
        <motion.div layout key={movie.id} >
            <h2>{movie.title}</h2>
            <motion.div
                className='imgContainer'
                whileHover="hover" animate="rest"
            >
                <motion.img className='img'
                    variants={imgContainerMotion}
                    src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.backdrop_path} />
                <motion.div
                    className='overview'
                    variants={overviewMotion}
                >
                    {movie.overview}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}