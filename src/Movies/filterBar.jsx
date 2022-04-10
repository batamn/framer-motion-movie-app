
import { useEffect } from "react";
import * as cx from 'classnames';

export const FilterBar = ({ baseData, setFiltered, setActiveGenre, activeGenre }) => {

    useEffect(() => {
        if (activeGenre === 0) {
            setFiltered(baseData);
            return;
        }

        setFiltered(baseData.filter(movie => movie.genre_ids.includes(activeGenre)));
    }, [activeGenre]);

    const AllClassName = (genre) => cx('button', {
        'active': activeGenre === genre,
    }

    )
    return (
        <div className="filterBar">
            <button className={AllClassName(0)} onClick={() => setActiveGenre(0)}>All</button>
            <button className={AllClassName(35)} onClick={() => setActiveGenre(35)}>Comedy</button>
            <button className={AllClassName(28)} onClick={() => setActiveGenre(28)}>Action</button>
        </div>
    )
}