import {useState} from 'react';
function MovieList() {
    const [movies, setMovies] = useState([]);
    return (
        <div>
            <button onClick={()=>setMovies([...movies,"Tenet"])}>
                Add to Movie List
            </button>
            {console.log(movies)};
            {movies.map((item,index)=>(
                <p key={index}>{item}</p>
            ))}
        </div>
    );
}
export default MovieList;