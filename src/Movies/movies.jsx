import { useEffect, useState } from "react"
import { FilterBar } from "./filterBar";
import { Movie } from "./movie";
import { LoadingPage } from "./loadingPage";
import './movies.css';
import { motion, AnimatePresence } from 'framer-motion';

export const MoviesGrid = () => {
    const [baseData, setBaseData] = useState();
    const [filtered, setFiltered] = useState();
    const [activeGenre, setActiveGenre] = useState(0);
    const [toggle, setToggle] = useState(false);
    console.log(toggle);
    useEffect(() => {
        fetchPopular();
    }, []);

    const fetchPopular = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=606c8c30990ea42489da997a311b380e&language=en-US&page=1"
        );

        const popularData = await data.json();;
        setBaseData(popularData.results);
        setFiltered(popularData.results);
    }

    return (
        <div className="container" style={!toggle ? { display: 'flex' } : { display: 'block' }}>
            {!toggle && <LoadingPage setToggle={setToggle} />}
            {toggle &&
                <div className="moviesContainer">
                    <FilterBar baseData={baseData} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
                    <motion.div layout className='moviesGrid'>
                        <AnimatePresence>
                            {filtered?.map(movie => {
                                return (
                                    <Movie movie={movie} key={movie.id} />
                                )
                            })}
                        </AnimatePresence>
                    </motion.div>
                </div>
            }

        </div>
    )
}