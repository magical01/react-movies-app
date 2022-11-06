import {Movie} from "./Movie"

export function Movies (props) {
  const {movies} = props

  return <div className="movies">
    {movies.length ? ( 
      movies.map((movie) => <Movie key={movie.imbID} {...movie}/>)
    ) : (
      <h3 className="text-2xl">Ooppss... Nothing found</h3>
    )}
  </div>
}